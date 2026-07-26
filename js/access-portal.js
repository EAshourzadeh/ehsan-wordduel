(function () {
  "use strict";

  const APP_NAME = "EHSAN WordDuel";
  const ACCESS_KEY = "ehsanWordDuelAccessPath";
  let intendedPath = sessionStorage.getItem(ACCESS_KEY) || "";
  let pendingTeacherTarget = "";
  let securedTeacherAccess = null;

  function addPortal() {
    localStorage.removeItem("teacherPw");

    const style = document.createElement("style");
    style.textContent = `
      .cloud-account{top:auto!important;bottom:14px!important;right:14px!important;max-width:calc(100vw - 28px)}
      .access-portal{position:fixed;inset:0;z-index:2000;display:flex;align-items:center;justify-content:center;
        padding:22px;background:radial-gradient(circle at top,#273a69 0,#111a2f 58%,#090f1e 100%)}
      .access-portal[hidden]{display:none}.access-card{width:min(760px,100%);padding:30px;border:1px solid #ffffff24;
        border-radius:26px;background:#111c33ed;color:#fff;box-shadow:0 30px 90px #0009;text-align:center}
      .access-mark{font-size:45px}.access-card h1{margin:8px 0 6px;font-size:clamp(25px,5vw,38px)}
      .access-card>p{margin:0 auto 23px;color:#b8c5dc;max-width:530px;line-height:1.55}
      .access-paths{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}.access-path{border:1px solid #ffffff24;
        border-radius:18px;padding:20px 14px;background:#1c2945;color:#fff;cursor:pointer;text-align:left;transition:.18s}
      .access-path:hover{transform:translateY(-2px);border-color:#8b5cf6;background:#243354}
      .access-path strong{display:block;margin:8px 0 5px;font-size:17px}.access-path span{display:block;color:#b8c5dc;font-size:12px;line-height:1.45}
      .access-icon{font-size:29px}.access-path.student{border-color:#7c3aed88}.access-path.teacher{border-color:#06b6d488}
      .access-error{min-height:20px;margin-top:15px;color:#fca5a5;font-size:13px}
      .cloud-auth-switch[hidden]{display:none!important}
      @media(max-width:640px){.access-paths{grid-template-columns:1fr}.access-card{padding:22px}.access-path{padding:14px}
        .cloud-account{font-size:10px;bottom:8px!important;right:8px!important}}
    `;
    document.head.appendChild(style);

    const portal = document.createElement("section");
    portal.id = "access-portal";
    portal.className = "access-portal";
    portal.setAttribute("aria-label", "Choose how to enter");
    portal.innerHTML = `
      <div class="access-card">
        <div class="access-mark">⚡</div>
        <h1>${APP_NAME}</h1>
        <p>Choose the path that matches how you want to use the app.</p>
        <div class="access-paths">
          <button class="access-path student" id="access-student" type="button">
            <span class="access-icon">🎓</span><strong>Student</strong>
            <span>Sign in or create an account so your scores can be connected to you.</span>
          </button>
          <button class="access-path teacher" id="access-teacher" type="button">
            <span class="access-icon">🧑‍🏫</span><strong>Teacher</strong>
            <span>Sign in with an authorized teacher account to manage vocabulary and scores.</span>
          </button>
          <button class="access-path guest" id="access-guest" type="button">
            <span class="access-icon">▶️</span><strong>Continue as Guest</strong>
            <span>Play immediately using local storage. Cloud scores are unavailable.</span>
          </button>
        </div>
        <div class="access-error" id="access-error"></div>
      </div>`;
    document.body.appendChild(portal);

    document.getElementById("access-student").addEventListener("click", () => choosePath("student"));
    document.getElementById("access-teacher").addEventListener("click", () => choosePath("teacher", "editor"));
    document.getElementById("access-guest").addEventListener("click", () => {
      intendedPath = "guest";
      sessionStorage.setItem(ACCESS_KEY, intendedPath);
      hidePortal();
    });

    const signin = document.getElementById("cloud-signin");
    signin.addEventListener("click", event => {
      event.preventDefault();
      event.stopImmediatePropagation();
      intendedPath = "";
      sessionStorage.removeItem(ACCESS_KEY);
      showPortal();
    }, true);

    document.getElementById("cloud-signout").addEventListener("click", () => {
      intendedPath = "";
      sessionStorage.removeItem(ACCESS_KEY);
    });

    document.getElementById("cloud-auth-cancel").textContent = "Back to choices";
    document.getElementById("cloud-auth-cancel").addEventListener("click", showPortal);

    securedTeacherAccess = window.requirePw;
    window.requirePw = function (target) {
      if (firebaseAuth.currentUser) {
        securedTeacherAccess(target);
      } else {
        choosePath("teacher", target || "editor");
      }
    };
  }

  function forceSignInMode() {
    const switchButton = document.getElementById("cloud-auth-switch");
    if (switchButton.textContent.includes("already have")) switchButton.click();
  }

  function choosePath(path, target) {
    intendedPath = path;
    pendingTeacherTarget = target || "";
    sessionStorage.setItem(ACCESS_KEY, path);
    document.getElementById("access-error").textContent = "";
    hidePortal();
    forceSignInMode();
    document.getElementById("cloud-auth-form").reset();
    document.getElementById("cloud-email").value = "";
    document.getElementById("cloud-password").value = "";
    document.getElementById("cloud-name").value = "";
    document.getElementById("cloud-auth-title").textContent = path === "teacher" ? "Teacher sign in" : "Student sign in";
    document.getElementById("cloud-auth-subtitle").textContent = path === "teacher"
      ? "Use the Firebase account that has the teacher role."
      : "Sign in to save scores, or create a student account.";
    document.getElementById("cloud-auth-switch").hidden = path === "teacher";
    document.getElementById("cloud-auth").classList.add("show");
    setTimeout(() => document.getElementById("cloud-email").focus(), 50);
  }

  function showPortal() {
    document.getElementById("cloud-auth").classList.remove("show");
    document.getElementById("access-portal").hidden = false;
  }

  function hidePortal() {
    document.getElementById("access-portal").hidden = true;
  }

  async function verifyPath(user) {
    if (!user) {
      if (intendedPath !== "guest") showPortal();
      return;
    }
    if (intendedPath === "teacher") {
      try {
        const snapshot = await firestoreDb.collection("users").doc(user.uid).get();
        if (!snapshot.exists || snapshot.data().role !== "teacher") {
          await firebaseAuth.signOut();
          sessionStorage.removeItem(ACCESS_KEY);
          intendedPath = "";
          showPortal();
          document.getElementById("access-error").textContent = "That account does not have teacher permission.";
          return;
        }
        hidePortal();
        if (pendingTeacherTarget) {
          const target = pendingTeacherTarget;
          pendingTeacherTarget = "";
          showScreen("editor");
        }
      } catch (error) {
        document.getElementById("access-error").textContent = "Teacher permission could not be verified.";
        showPortal();
      }
    } else {
      intendedPath = "student";
      sessionStorage.setItem(ACCESS_KEY, intendedPath);
      hidePortal();
    }
  }

  document.addEventListener("DOMContentLoaded", () => {
    addPortal();
    firebaseAuth.onAuthStateChanged(verifyPath);
  });
})();
