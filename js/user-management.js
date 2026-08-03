(function () {
  "use strict";

  const students = new Map();
  const isWordDuel = document.title.toLowerCase().includes("wordduel");
  let panel;

  function escapeHtml(value) {
    return String(value || "").replace(/[&<>"']/g, char => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
    })[char]);
  }

  function notify(text, error) {
    const existing = document.getElementById("cloud-toast");
    if (existing) {
      existing.textContent = text;
      existing.className = "cloud-toast show" + (error ? " error" : "");
      clearTimeout(notify.timer);
      notify.timer = setTimeout(() => { existing.className = "cloud-toast"; }, 3600);
      return;
    }
    window.alert(text);
  }

  async function currentUserIsTeacher() {
    const user = firebaseAuth.currentUser;
    if (!user) return false;
    const snapshot = await firestoreDb.collection("users").doc(user.uid).get();
    return snapshot.exists && snapshot.data().role === "teacher";
  }

  function injectPanel() {
    const style = document.createElement("style");
    style.textContent = `
      .user-manager{position:fixed;inset:0;z-index:2100;display:none;align-items:center;justify-content:center;
        padding:20px;background:rgba(2,6,23,.78);backdrop-filter:blur(5px)}
      .user-manager.show{display:flex}.user-manager-card{width:min(820px,100%);max-height:min(760px,92vh);
        display:flex;flex-direction:column;overflow:hidden;border:1px solid rgba(255,255,255,.14);border-radius:22px;
        background:#111c33;color:#f8fafc;box-shadow:0 28px 90px rgba(0,0,0,.5)}
      .user-manager-head{display:flex;align-items:flex-start;justify-content:space-between;gap:16px;padding:22px 24px 15px}
      .user-manager-head h2{margin:0 0 5px;font-size:22px}.user-manager-head p{margin:0;color:#94a3b8;font-size:13px}
      .user-manager-close{flex:none;width:36px;height:36px;border-radius:50%;background:#24324d;color:#fff;font-size:20px}
      .user-manager-tools{display:flex;gap:10px;padding:0 24px 16px}.user-manager-search{box-sizing:border-box;flex:1;
        min-width:0;padding:11px 13px;border:1px solid #334155;border-radius:11px;background:#0b1426;color:#fff;font:inherit}
      .user-manager-refresh{padding:10px 14px;border-radius:11px;background:#334155;color:#fff;font-weight:800}
      .user-manager-note{margin:0 24px 14px;padding:10px 12px;border-radius:10px;background:#172554;color:#bfdbfe;
        font-size:12px;line-height:1.45}.user-manager-list{overflow:auto;padding:0 24px 24px}
      .user-row{display:grid;grid-template-columns:minmax(0,1fr) auto;gap:14px;align-items:center;padding:14px 0;
        border-top:1px solid rgba(255,255,255,.1)}.user-name{font-weight:850;overflow-wrap:anywhere}
      .user-email{margin-top:3px;color:#94a3b8;font-size:12px;overflow-wrap:anywhere}.user-actions{display:flex;gap:8px}
      .user-action{padding:9px 11px;border-radius:9px;font-size:12px;font-weight:800;color:#fff}
      .user-reset{background:#2563eb}.user-remove{background:#991b1b}.user-empty{padding:28px;text-align:center;color:#94a3b8}
      @media(max-width:620px){.user-row{grid-template-columns:1fr}.user-actions{width:100%}.user-action{flex:1}
        .user-manager-head,.user-manager-tools{padding-left:16px;padding-right:16px}.user-manager-note{margin-left:16px;margin-right:16px}
        .user-manager-list{padding-left:16px;padding-right:16px}}
    `;
    document.head.appendChild(style);

    panel = document.createElement("section");
    panel.id = "user-manager";
    panel.className = "user-manager";
    panel.setAttribute("role", "dialog");
    panel.setAttribute("aria-modal", "true");
    panel.setAttribute("aria-labelledby", "user-manager-title");
    panel.innerHTML = `
      <div class="user-manager-card">
        <div class="user-manager-head">
          <div><h2 id="user-manager-title">👥 User Management</h2>
            <p>Teacher tools for student access and password recovery.</p></div>
          <button class="user-manager-close" type="button" aria-label="Close user management">×</button>
        </div>
        <div class="user-manager-tools">
          <input class="user-manager-search" id="user-manager-search" type="search"
            placeholder="Search students by name or email" autocomplete="off">
          <button class="user-manager-refresh" id="user-manager-refresh" type="button">↻ Refresh</button>
        </div>
        <p class="user-manager-note">Password resets are sent securely by Firebase. Removing access deletes the
          student's app profile${isWordDuel ? " and saved scores" : " and FlipCards progress"} and blocks future app sign-in.
          It does not expose or display passwords.</p>
        <div class="user-manager-list" id="user-manager-list"><div class="user-empty">Loading students…</div></div>
      </div>`;
    document.body.appendChild(panel);

    panel.querySelector(".user-manager-close").addEventListener("click", closeUserManagement);
    panel.addEventListener("click", event => { if (event.target === panel) closeUserManagement(); });
    document.getElementById("user-manager-refresh").addEventListener("click", loadStudents);
    document.getElementById("user-manager-search").addEventListener("input", renderStudents);
    document.getElementById("user-manager-list").addEventListener("click", handleAction);
  }

  async function openUserManagement() {
    try {
      if (!await currentUserIsTeacher()) {
        notify("Teacher permission is required.", true);
        return;
      }
      panel.classList.add("show");
      document.getElementById("user-manager-search").value = "";
      await loadStudents();
      document.getElementById("user-manager-search").focus();
    } catch (error) {
      notify("User Management could not be opened.", true);
    }
  }

  function closeUserManagement() {
    if (panel) panel.classList.remove("show");
  }

  async function loadStudents() {
    const list = document.getElementById("user-manager-list");
    list.innerHTML = '<div class="user-empty">Loading students…</div>';
    try {
      if (!await currentUserIsTeacher()) throw new Error("teacher-required");
      const snapshot = await firestoreDb.collection("users").where("role", "==", "student").get();
      students.clear();
      snapshot.forEach(doc => students.set(doc.id, { uid: doc.id, ...doc.data() }));
      renderStudents();
    } catch (error) {
      list.innerHTML = '<div class="user-empty">Students could not be loaded. Check the deployed Firestore rules.</div>';
    }
  }

  function renderStudents() {
    const query = (document.getElementById("user-manager-search").value || "").trim().toLowerCase();
    const matches = [...students.values()]
      .filter(student => `${student.displayName || ""} ${student.email || ""}`.toLowerCase().includes(query))
      .sort((a, b) => (a.displayName || a.email || "").localeCompare(b.displayName || b.email || ""));
    const list = document.getElementById("user-manager-list");
    if (!matches.length) {
      list.innerHTML = `<div class="user-empty">${query ? "No matching students." : "No student accounts found."}</div>`;
      return;
    }
    list.innerHTML = matches.map(student => `
      <div class="user-row">
        <div><div class="user-name">${escapeHtml(student.displayName || "Unnamed student")}</div>
          <div class="user-email">${escapeHtml(student.email || "No email available")}</div></div>
        <div class="user-actions">
          <button class="user-action user-reset" type="button" data-action="reset" data-uid="${escapeHtml(student.uid)}"
            ${student.email ? "" : "disabled"}>Send Reset Email</button>
          <button class="user-action user-remove" type="button" data-action="remove" data-uid="${escapeHtml(student.uid)}">
            Remove Access</button>
        </div>
      </div>`).join("");
  }

  async function handleAction(event) {
    const button = event.target.closest("button[data-action]");
    if (!button) return;
    const student = students.get(button.dataset.uid);
    if (!student) return;
    button.disabled = true;
    try {
      if (!await currentUserIsTeacher()) throw new Error("teacher-required");
      if (button.dataset.action === "reset") await sendReset(student);
      if (button.dataset.action === "remove") await removeStudent(student);
    } catch (error) {
      notify(error.message === "teacher-required" ? "Teacher permission is required." : "The action could not be completed.", true);
    } finally {
      button.disabled = false;
    }
  }

  async function sendReset(student) {
    if (!student.email) {
      notify("This student does not have an email address.", true);
      return;
    }
    await firebaseAuth.sendPasswordResetEmail(student.email);
    notify(`Password reset email sent to ${student.email}.`);
  }

  async function removeStudent(student) {
    const label = student.displayName || student.email || "this student";
    if (!window.confirm(`Remove app access for ${label}? Their app profile and saved data will be deleted.`)) return;
    const teacher = firebaseAuth.currentUser;
    const batch = firestoreDb.batch();
    const userRef = firestoreDb.collection("users").doc(student.uid);
    const removedRef = firestoreDb.collection("removedUsers").doc(student.uid);
    batch.set(removedRef, {
      displayName: student.displayName || "",
      email: student.email || "",
      removedAt: firebase.firestore.FieldValue.serverTimestamp(),
      removedBy: teacher.uid
    });
    batch.delete(userRef);
    if (isWordDuel) {
      const scores = await firestoreDb.collection("scores").where("uid", "==", student.uid).get();
      scores.forEach(doc => batch.delete(doc.ref));
    } else {
      batch.delete(userRef.collection("appState").doc("flipcards"));
    }
    await batch.commit();
    students.delete(student.uid);
    renderStudents();
    notify(`${label} no longer has access to this app.`);
  }

  window.openUserManagement = openUserManagement;
  window.closeUserManagement = closeUserManagement;
  document.addEventListener("DOMContentLoaded", injectPanel);
})();
