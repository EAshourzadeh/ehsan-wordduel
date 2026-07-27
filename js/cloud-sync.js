/* Firebase account and cloud synchronization layer.
   The original game remains usable when Firebase is unavailable. */
(function () {
  "use strict";

  const state = { user: null, profile: null, online: navigator.onLine };
  const vocabularyRef = firestoreDb.collection("appData").doc("vocabulary");
  let authMode = "signin";
  let vocabularyReady = false;

  function isTeacher() {
    return !!(state.user && state.profile && state.profile.role === "teacher");
  }

  function serverTime() {
    return firebase.firestore.FieldValue.serverTimestamp();
  }

  function message(text, error) {
    let el = document.getElementById("cloud-toast");
    if (!el) {
      el = document.createElement("div");
      el.id = "cloud-toast";
      document.body.appendChild(el);
    }
    el.textContent = text;
    el.className = "cloud-toast show" + (error ? " error" : "");
    clearTimeout(message.timer);
    message.timer = setTimeout(() => { el.className = "cloud-toast"; }, 3200);
  }

  function injectUi() {
    const style = document.createElement("style");
    style.textContent = `
      .cloud-account{position:fixed;right:14px;top:14px;z-index:900;display:flex;gap:8px;align-items:center;
        padding:7px 9px;border:1px solid rgba(255,255,255,.18);border-radius:999px;background:rgba(16,24,40,.9);
        color:#fff;font:600 12px/1.2 Inter,sans-serif;box-shadow:0 5px 18px rgba(0,0,0,.2)}
      .cloud-account button{border:0;border-radius:999px;padding:7px 11px;cursor:pointer;font-weight:800}
      .cloud-account .cloud-primary{background:#ffd43b;color:#202020}.cloud-account .cloud-link{background:#334155;color:#fff}
      .cloud-dot{width:8px;height:8px;border-radius:50%;background:#22c55e}.cloud-dot.offline{background:#f59e0b}
      .cloud-auth{position:fixed;inset:0;z-index:1200;display:none;align-items:center;justify-content:center;
        padding:20px;background:rgba(2,6,23,.72)}.cloud-auth.show{display:flex}
      .cloud-auth-card{width:min(420px,100%);background:#fff;color:#172033;border-radius:20px;padding:25px;
        box-shadow:0 25px 80px rgba(0,0,0,.35)}.cloud-auth-card h2{margin:0 0 7px}
      .cloud-auth-card p{margin:0 0 18px;color:#64748b}.cloud-auth-card input{box-sizing:border-box;width:100%;
        margin:6px 0;padding:12px;border:1px solid #cbd5e1;border-radius:10px;font:inherit}
      .cloud-auth-actions{display:flex;gap:8px;margin-top:13px}.cloud-auth-actions button{flex:1;border:0;border-radius:10px;
        padding:11px;cursor:pointer;font-weight:800}.cloud-auth-submit{background:#6d28d9;color:#fff}.cloud-auth-cancel{background:#e2e8f0}
      .cloud-auth-switch{display:block;margin:14px auto 0;border:0;background:none;color:#6d28d9;cursor:pointer;font-weight:700}
      .cloud-auth-error{min-height:20px;color:#b91c1c;font-size:13px;margin-top:7px}
      .cloud-toast{position:fixed;left:50%;bottom:22px;z-index:1500;transform:translate(-50%,20px);opacity:0;
        pointer-events:none;background:#153f36;color:#fff;padding:11px 16px;border-radius:10px;transition:.2s}
      .cloud-toast.show{opacity:1;transform:translate(-50%,0)}.cloud-toast.error{background:#991b1b}
      @media(max-width:640px){.cloud-account{position:static;margin:8px auto;width:max-content}}
    `;
    document.head.appendChild(style);

    const account = document.createElement("div");
    account.id = "cloud-account";
    account.className = "cloud-account";
    account.innerHTML = `
      <span id="cloud-dot" class="cloud-dot"></span>
      <span id="cloud-account-label">Guest · local mode</span>
      <button id="cloud-signin" class="cloud-primary" type="button">Sign in</button>
      <button id="cloud-signout" class="cloud-link" type="button" hidden>Sign out</button>`;
    document.body.appendChild(account);

    const auth = document.createElement("div");
    auth.id = "cloud-auth";
    auth.className = "cloud-auth";
    auth.innerHTML = `
      <form class="cloud-auth-card" id="cloud-auth-form">
        <h2 id="cloud-auth-title">Sign in</h2>
        <p id="cloud-auth-subtitle">Use your student or teacher account.</p>
        <input id="cloud-name" autocomplete="name" maxlength="60" placeholder="Your name" hidden>
        <input id="cloud-email" type="email" autocomplete="email" required placeholder="Email">
        <input id="cloud-password" type="password" autocomplete="current-password" minlength="6" required placeholder="Password">
        <div id="cloud-auth-error" class="cloud-auth-error"></div>
        <div class="cloud-auth-actions">
          <button class="cloud-auth-cancel" id="cloud-auth-cancel" type="button">Continue as guest</button>
          <button class="cloud-auth-submit" id="cloud-auth-submit" type="submit">Sign in</button>
        </div>
        <button class="cloud-auth-switch" id="cloud-auth-switch" type="button">Create a student account</button>
      </form>`;
    document.body.appendChild(auth);

    document.getElementById("cloud-signin").addEventListener("click", openAuth);
    document.getElementById("cloud-signout").addEventListener("click", () => firebaseAuth.signOut());
    document.getElementById("cloud-auth-cancel").addEventListener("click", closeAuth);
    document.getElementById("cloud-auth-switch").addEventListener("click", toggleAuthMode);
    document.getElementById("cloud-auth-form").addEventListener("submit", submitAuth);
    auth.addEventListener("click", event => { if (event.target === auth) closeAuth(); });
    window.addEventListener("online", updateConnectivity);
    window.addEventListener("offline", updateConnectivity);
    updateConnectivity();
  }

  function updateConnectivity() {
    state.online = navigator.onLine;
    const dot = document.getElementById("cloud-dot");
    if (dot) dot.classList.toggle("offline", !state.online);
  }

  function openAuth() {
    clearAuthFields();
    document.getElementById("cloud-auth-error").textContent = "";
    document.getElementById("cloud-auth").classList.add("show");
    setTimeout(() => document.getElementById("cloud-email").focus(), 50);
  }

  function clearAuthFields() {
    document.getElementById("cloud-auth-form").reset();
    document.getElementById("cloud-email").value = "";
    document.getElementById("cloud-password").value = "";
    document.getElementById("cloud-name").value = "";
  }

  function closeAuth() {
    document.getElementById("cloud-auth").classList.remove("show");
  }

  function toggleAuthMode() {
    authMode = authMode === "signin" ? "register" : "signin";
    const registering = authMode === "register";
    document.getElementById("cloud-name").hidden = !registering;
    document.getElementById("cloud-name").required = registering;
    document.getElementById("cloud-auth-title").textContent = registering ? "Create student account" : "Sign in";
    document.getElementById("cloud-auth-submit").textContent = registering ? "Create account" : "Sign in";
    document.getElementById("cloud-auth-switch").textContent = registering ? "I already have an account" : "Create a student account";
    document.getElementById("cloud-password").autocomplete = registering ? "new-password" : "current-password";
    document.getElementById("cloud-auth-error").textContent = "";
  }

  async function submitAuth(event) {
    event.preventDefault();
    const email = document.getElementById("cloud-email").value.trim();
    const password = document.getElementById("cloud-password").value;
    const name = document.getElementById("cloud-name").value.trim();
    const error = document.getElementById("cloud-auth-error");
    const submit = document.getElementById("cloud-auth-submit");
    error.textContent = "";
    submit.disabled = true;
    try {
      if (authMode === "register") {
        const credential = await firebaseAuth.createUserWithEmailAndPassword(email, password);
        await credential.user.updateProfile({ displayName: name });
        await firestoreDb.collection("users").doc(credential.user.uid).set({
          displayName: name, email, role: "student", createdAt: serverTime(), updatedAt: serverTime()
        }, { merge: true });
      } else {
        await firebaseAuth.signInWithEmailAndPassword(email, password);
      }
      closeAuth();
    } catch (err) {
      error.textContent = friendlyAuthError(err);
    } finally {
      submit.disabled = false;
    }
  }

  function friendlyAuthError(err) {
    const code = err && err.code;
    if (code === "auth/email-already-in-use") return "That email already has an account.";
    if (code === "auth/invalid-email") return "Enter a valid email address.";
    if (code === "auth/weak-password") return "Use a password with at least six characters.";
    if (code === "auth/user-not-found" || code === "auth/wrong-password" || code === "auth/invalid-credential") return "Incorrect email or password.";
    if (code === "auth/network-request-failed") return "Network unavailable. Guest mode still works.";
    return (err && err.message) || "Authentication failed.";
  }

  async function handleAuth(user) {
    state.user = user;
    state.profile = null;
    if (user) {
      try {
        const removed = await firestoreDb.collection("removedUsers").doc(user.uid).get();
        if (removed.exists) {
          message("This student account no longer has access. Contact your teacher.", true);
          await firebaseAuth.signOut();
          return;
        }
        const ref = firestoreDb.collection("users").doc(user.uid);
        const snapshot = await ref.get();
        if (snapshot.exists) {
          state.profile = snapshot.data();
          await ref.set({ email: user.email || "", displayName: user.displayName || snapshot.data().displayName || "", updatedAt: serverTime() }, { merge: true });
        } else {
          state.profile = { displayName: user.displayName || user.email || "Student", email: user.email || "", role: "student" };
          await ref.set({ ...state.profile, createdAt: serverTime(), updatedAt: serverTime() }, { merge: true });
        }
      } catch (err) {
        state.profile = { displayName: user.displayName || user.email || "Student", role: "student" };
        message("Signed in; cloud profile is temporarily unavailable.", true);
      }
      await loadCloudVocabulary();
    }
    renderAccount();
  }

  function renderAccount() {
    const label = document.getElementById("cloud-account-label");
    const signin = document.getElementById("cloud-signin");
    const signout = document.getElementById("cloud-signout");
    if (!state.user) {
      label.textContent = "Guest · local mode";
      signin.hidden = false;
      signout.hidden = true;
    } else {
      const name = (state.profile && state.profile.displayName) || state.user.displayName || state.user.email;
      label.textContent = `${name}${isTeacher() ? " · Teacher" : " · Student"}`;
      signin.hidden = true;
      signout.hidden = false;
    }
    const teacherEditor = document.getElementById("teacher-editor-btn");
    const teacherUsers = document.getElementById("teacher-users-btn");
    const clearScores = document.getElementById("clear-lb-btn");
    if (teacherEditor) teacherEditor.hidden = !isTeacher();
    if (teacherUsers) teacherUsers.hidden = !isTeacher();
    if (clearScores) clearScores.hidden = !isTeacher();
  }

  async function loadCloudVocabulary() {
    try {
      const snapshot = await vocabularyRef.get();
      const data = snapshot.exists ? snapshot.data() : null;
      if (data && Array.isArray(data.words) && data.words.length) {
        localStorage.setItem("wordlist", JSON.stringify(data.words));
        words = loadWords();
        vocabularyReady = true;
        message("Cloud vocabulary synchronized.");
      }
    } catch (err) {
      message("Using the saved local vocabulary.", true);
    }
  }

  const originalSaveWords = window.saveWords;
  window.saveWords = function (list) {
    originalSaveWords(list);
    if (isTeacher()) {
      vocabularyRef.set({
        words: list,
        updatedAt: serverTime(),
        updatedBy: state.user.uid,
        schemaVersion: 1
      }).then(() => message("Vocabulary saved locally and to Firebase."))
        .catch(() => message("Saved locally; cloud update failed.", true));
    } else if (state.user && vocabularyReady) {
      message("Saved on this device. Teacher role is required for cloud publishing.", true);
    }
  };

  const originalRequirePw = window.requirePw;
  window.requirePw = function (target) {
    if (target === "leaderboard") {
      showScreen("leaderboard");
      return;
    }
    if (isTeacher()) {
      showScreen("editor");
      return;
    }
    if (state.user) {
      message("This account does not have teacher permission.", true);
      return;
    }
    openAuth();
    message("Sign in with a teacher account to continue.");
  };

  const originalSaveScore = window.saveScore;
  window.saveScore = function () {
    originalSaveScore();
    if (!state.user) return;
    const name = document.getElementById("res-name").value.trim() ||
      (state.profile && state.profile.displayName) || state.user.displayName || "Student";
    firestoreDb.collection("scores").add({
      uid: state.user.uid,
      name,
      score: Number(gameState.score) || 0,
      mode: gameState._mode || currentMode || "",
      accuracy: gameState._acc == null ? null : Number(gameState._acc),
      createdAt: serverTime()
    }).then(() => message("Score saved to your account."))
      .catch(() => message("Score saved locally; cloud update failed.", true));
  };

  document.addEventListener("DOMContentLoaded", () => {
    injectUi();
    firebaseAuth.onAuthStateChanged(handleAuth);
  });
})();
