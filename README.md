# EHSAN WordDuel

EHSAN WordDuel is a browser-based vocabulary game for practising English synonyms, antonyms, spelling, pronunciation, and active recall.

The application supports guests, students, and teachers. Students can practise with Easy, Medium, or Hard vocabulary, while teachers manage every word list and student account through Firebase-backed tools.

[Open the live app](https://ehsan-wordduel.learninglabs.workers.dev/)

## Features

- Five vocabulary game modes
- Synonym and antonym practice
- Easy, Medium, and Hard difficulty levels for signed-in students
- A separate teacher-managed default list for guests
- Difficulty-specific score records and leaderboards
- Student registration and sign-in with Firebase Authentication
- Teacher-only vocabulary and user management
- Word-list import and export using text files
- Built-in English pronunciation using the Web Speech API
- English, Spanish, Russian, Persian, and Turkish interface options
- Optional sound effects and background music
- Responsive layout for desktop and mobile browsers
- Local fallback data when Firebase is temporarily unavailable

## Game Modes

| Mode | How it works |
| --- | --- |
| Multiple Choice | Choose the correct synonym or antonym before time expires. |
| Matching Pairs | Match vocabulary words with their corresponding answers. |
| Fill in the Blank | Type the correct synonym or antonym. |
| Streak Mode | Continue answering until the streak ends. |
| Unscramble | Rebuild a vocabulary word from shuffled letters. |

## Accounts and Access

### Guest

Guests can begin playing without an account. They use the **Guest Default** word list and cannot select Easy, Medium, or Hard.

Guest scores are stored only in that browser and are not written to Firestore.

### Student

Students sign in or create an account using Firebase Authentication. A signed-in student can:

- Choose Easy, Medium, or Hard vocabulary
- Play every game mode
- Save difficulty-tagged scores to Firestore
- View the leaderboard without a teacher password

### Teacher

Teacher access is determined by the `role` value in the teacher's Firestore user document. Teachers can:

- Manage Guest Default, Easy, Medium, and Hard word lists in separate tabs
- Add, edit, import, export, or remove vocabulary
- View and manage student accounts
- Remove a student's application access
- View and clear leaderboard records

Teacher tools are hidden from guests and students.

## Vocabulary and Difficulty Model

The four word lists are stored as separate Firestore documents:

```text
vocabulary/guest
vocabulary/easy
vocabulary/medium
vocabulary/hard
```

Each document uses this general structure:

```javascript
{
  difficulty: "medium",
  words: [
    {
      word: "abundant",
      syn: "plentiful",
      ant: "scarce",
      def: "existing in large quantities"
    }
  ],
  schemaVersion: 2,
  updatedBy: "TEACHER_UID",
  updatedAt: "Firestore server timestamp"
}
```

The application retains compatibility with the former `appData/vocabulary` document. If the new Guest Default or Medium document has not yet been published, the old vocabulary can be used as migration data.

## Score Records

Signed-in student results are written to the `scores` collection. New score records include:

```javascript
{
  uid: "STUDENT_UID",
  name: "Student name",
  score: 120,
  mode: "mc",
  difficulty: "medium",
  accuracy: 87,
  createdAt: "Firestore server timestamp"
}
```

The `difficulty` field keeps Easy, Medium, and Hard results separate. Guest results remain in local storage.

## Technology

- HTML5
- CSS3
- Vanilla JavaScript
- Firebase Authentication
- Cloud Firestore
- Firebase compatibility SDK
- Web Speech API
- Local Storage API
- QRCode.js
- Cloudflare hosting

No build step or frontend framework is required.

## Project Structure

```text
.
|-- css/
|   `-- styles.css
|-- js/
|   |-- access-portal.js
|   |-- app.js
|   |-- cloud-sync.js
|   |-- firebase-init.js
|   `-- user-management.js
|-- firestore.rules
|-- index.html
`-- README.md
```

### Main files

- `index.html` contains the application screens, modals, and script loading order.
- `css/styles.css` contains the complete responsive interface styling.
- `js/app.js` contains the games, vocabulary state, difficulty controls, local scores, editor, translation system, audio, and text-to-speech behavior.
- `js/cloud-sync.js` connects authentication, vocabulary, and scores to Firebase.
- `js/access-portal.js` controls Guest, Student, and Teacher entry paths.
- `js/user-management.js` provides the teacher-only student manager.
- `js/firebase-init.js` initializes Firebase.
- `firestore.rules` defines the application data permissions.

## Run Locally

Clone the repository:

```bash
git clone https://github.com/EAshourzadeh/ehsan-wordduel.git
cd ehsan-wordduel
```

Start any static web server. For example, with Python:

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000/
```

Using a local server is recommended because browser security behavior can differ when `index.html` is opened directly as a file.

## Firebase Setup

### 1. Create or select a Firebase project

Enable these services in the Firebase console:

- Authentication
- Email/Password sign-in
- Cloud Firestore

### 2. Configure the web application

Put the Firebase web configuration in `js/firebase-init.js`:

```javascript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT.firebasestorage.app",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};
```

Firebase web configuration identifies the Firebase project; it is not a replacement for Firestore security rules.

### 3. Deploy the Firestore rules

The supplied `firestore.rules` file is required for the role and difficulty model.

You can copy its contents into **Firebase Console → Firestore Database → Rules**, or deploy it with the Firebase CLI after configuring the project:

```bash
firebase deploy --only firestore:rules --project YOUR_PROJECT_ID
```

The rules provide these important restrictions:

- Guests can read only the Guest Default vocabulary document.
- Signed-in users can read Easy, Medium, and Hard vocabulary.
- Only teachers can publish or delete vocabulary.
- Students can create only their own score records.
- New cloud scores must use Easy, Medium, or Hard.
- Only teachers can manage other users and cloud score records.

### 4. Create the first teacher

Create the teacher in Firebase Authentication, then create the matching Firestore document manually:

```text
Collection: users
Document ID: the teacher's Firebase Authentication UID
```

Example fields:

```javascript
{
  displayName: "Teacher Name",
  email: "teacher@example.com",
  role: "teacher"
}
```

The document ID must exactly match the Authentication UID. Do not assign teacher permissions from client-side registration; normal registration intentionally creates a `student` profile.

## Import and Export Format

Teachers can import the active vocabulary tab from a UTF-8 `.txt` file. Every line must contain exactly four tab-separated fields, and every field must end with a semicolon:

```text
abandon;	leave;	keep;	to leave something behind;
benevolent;	kind;	cruel;	well meaning and generous;
scarce;	rare;	abundant;	available only in small quantities;
```

The fields are:

```text
word<TAB>synonym<TAB>antonym<TAB>definition
```

Blank lines, missing fields, extra fields, or missing semicolons cause the import to be rejected. Exported files already use the correct format and can be edited before being imported again.

Imports and exports affect only the currently selected teacher tab.

## Local Storage

The application caches vocabulary and preferences in the browser so games can continue when the network is temporarily unavailable.

Difficulty-specific vocabulary uses keys such as:

```text
wordlist:guest
wordlist:easy
wordlist:medium
wordlist:hard
```

The previous `wordlist` key is still recognized for migration compatibility. The selected student difficulty and local leaderboard data are also retained in the browser.

Local storage is a convenience and offline fallback, not an authorization system. Teacher authorization is enforced by Firebase Authentication, user roles, and Firestore rules.

## Deployment

WordDuel is a static application. Deploy the repository's web files to Cloudflare Workers, Cloudflare Pages, or another static host.

Before publishing a new version:

1. Confirm that `js/firebase-init.js` points to the intended Firebase project.
2. Deploy the current `firestore.rules`.
3. Verify Guest, Student, and Teacher entry paths.
4. Publish at least the Guest Default and Medium word lists.
5. Test one game and score submission at each student difficulty.
6. Confirm that teacher-only controls are hidden from non-teachers.

No server-side application process is required by the frontend host. Firebase provides authentication and database services separately.

## Security Notes

- Do not rely on hidden buttons to protect teacher operations; keep Firestore rules deployed.
- Do not give students a `role: "teacher"` user document.
- Do not place service-account credentials or private server keys in this repository.
- Firebase web configuration may be present in browser code, but all data permissions must remain enforced by Firestore rules.
- Removing a student through the app blocks application access using Firestore records. Deleting the Firebase Authentication identity itself requires Firebase Console or a trusted server using the Firebase Admin SDK.

## Browser Support

WordDuel works best in current versions of Chrome, Edge, Firefox, and Safari. Text-to-speech voice availability and pronunciation quality depend on the browser and operating system.

## Contributing

Contributions and bug reports are welcome.

1. Fork the repository.
2. Create a focused feature branch.
3. Test Guest, Student, and Teacher behavior when changing access or data logic.
4. Commit the change with a clear message.
5. Open a pull request describing the behavior and verification performed.

## Author

Created by Ehsan Ashour Zadeh for educational use.
