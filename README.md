<div align="center">

# ⚡ EHSAN WordDuel

### SAT Vocabulary • Synonyms & Antonyms

An interactive vocabulary game that helps learners master English vocabulary through engaging challenges, active recall, and repetition.

<p>
  <a href="https://ehsan-wordduel.learninglabs.workers.dev"><strong>🎮 Play Live Demo</strong></a>
</p>

<p>
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
  <img src="https://img.shields.io/badge/Cloudflare-Workers-F38020?style=for-the-badge&logo=cloudflare&logoColor=white">
  <img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge">
</p>

<img src="docs/images/home.png" alt="WordDuel" width="900">

</div>

---

# 📖 About

**EHSAN WordDuel** is a browser-based educational vocabulary game designed to make learning English words both effective and enjoyable.

Instead of relying on traditional flashcards, learners strengthen their vocabulary through interactive game modes that reinforce **synonyms**, **antonyms**, **spelling**, **pronunciation**, and **active recall**.

The application runs entirely in the browser, requires no backend server, and stores all data locally.

---

# 🚀 Why WordDuel?

WordDuel transforms English vocabulary practice into an interactive learning experience. Multiple game modes, pronunciation support, multilingual navigation, and teacher tools keep learners engaged while reinforcing long-term memory through active recall and repetition.

---

# ✨ Features

- 🎯 SAT vocabulary practice
- 🎮 Five engaging game modes
- 🔊 Built-in pronunciation (Text-to-Speech)
- 🌍 Multilingual interface
- 👨‍🏫 Password-protected Teacher Mode
- 📥 Import vocabulary lists (.txt)
- ✏️ Edit vocabulary directly in the browser
- 🏆 Local leaderboard
- 💾 Automatic Local Storage saving
- 🎵 Optional background music
- 📱 Fully responsive design
- ☁️ Deployed on Cloudflare Workers

---

# 🎮 Game Modes

| Mode | Description |
|------|-------------|
| 🎯 Multiple Choice | Select the correct synonym or antonym before time runs out. |
| 🔗 Matching Pairs | Match vocabulary words with their meanings. |
| ✍️ Fill in the Blank | Type the correct answer. |
| 🔥 Streak Mode | Build the longest streak of correct answers. |
| 🔀 Unscramble | Reconstruct scrambled vocabulary words using optional hints. |

---

# 📸 Screenshots

Experience WordDuel through five engaging game modes, each designed to reinforce vocabulary using a different learning strategy.

## 🏠 Home Screen

The main menu provides quick access to every game mode, language selection, leaderboard, background music, and teacher tools.

<p align="center">
  <img src="docs/images/home-modes.png" alt="Home Screen" width="900">
</p>

---

## 🎯 Multiple Choice

Choose the correct synonym or antonym before the timer expires.

<p align="center">
  <img src="docs/images/multiple-choice.png" alt="Multiple Choice Mode" width="900">
</p>

---

## 🔗 Matching Pairs

Match vocabulary words with their corresponding synonyms or antonyms.

<p align="center">
  <img src="docs/images/matching-pairs.png" alt="Matching Pairs Mode" width="900">
</p>

---

## ✍️ Fill in the Blank

Recall the correct word by typing the answer yourself.

<p align="center">
  <img src="docs/images/fill-in-the-blank.png" alt="Fill in the Blank Mode" width="900">
</p>

---

## 🔥 Streak Mode

Challenge yourself to answer as many questions correctly as possible without making a mistake.

<p align="center">
  <img src="docs/images/streak-mode.png" alt="Streak Mode" width="900">
</p>

---

## 🔀 Unscramble

Reconstruct scrambled vocabulary words using your spelling knowledge and optional hints.

<p align="center">
  <img src="docs/images/unscramble.png" alt="Unscramble Mode" width="900">
</p>

---

## 🔐 Teacher Access

Teacher Mode is protected by a password to prevent unauthorized changes to the vocabulary database.

<p align="center">
  <img src="docs/images/teacher-mode.png" alt="Teacher Login" width="900">
</p>

---

## 📝 Vocabulary Editor

Teachers can add, edit, delete, and import vocabulary directly from the browser.

<p align="center">
  <img src="docs/images/words.png" alt="Vocabulary Editor" width="900">
</p>

---

# 🌍 Supported Languages

The interface is currently available in:

- 🇺🇸 English
- 🇪🇸 Español
- 🇷🇺 Русский
- 🇮🇷 فارسی
- 🇹🇷 Türkçe

The vocabulary itself remains in English so learners practice authentic English while using an interface in their preferred language.

---

# 👨‍🏫 Teacher Mode

Teacher Mode allows instructors to fully customize the learning experience.

### Features

- 🔐 Password-protected access
- ➕ Add new vocabulary
- ✏️ Edit existing words
- 🗑️ Delete vocabulary
- 📥 Import `.txt` vocabulary lists
- 🔑 Change the teacher password

All data is stored locally in the browser.

---

# 📄 Importing Vocabulary

Word lists can be imported from a simple text file.

Example:

```text
abandon     leave      keep
benevolent  kind       cruel
scarce      rare       abundant
```

Each row should contain:

```text
Word<TAB>Synonym<TAB>Antonym
```

---

# 🛠 Technology Stack

- HTML5
- CSS3
- Vanilla JavaScript
- Web Speech API
- Local Storage API
- QRCode.js
- Google Fonts (Inter)
- Cloudflare Workers

---

# 📂 Project Structure

```text
.
├── css/
├── docs/
│   └── images/
├── js/
├── index.html
├── README.md
└── LICENSE
```

---

# 🚀 Getting Started

Clone the repository:

```bash
git clone https://github.com/EAshourzadeh/ehsan-wordduel.git
```

Navigate to the project folder:

```bash
cd ehsan-wordduel
```

Serve locally:

```bash
python -m http.server
```

Open your browser:

```
http://localhost:8000
```

You can also simply open `index.html` directly in your browser.

---

# 💾 Data Storage

WordDuel stores all data locally using the browser's Local Storage.

This includes:

- Vocabulary database
- Leaderboard
- Teacher preferences
- Language settings
- Music preferences
- Game settings

No user accounts or external database are required.

---

# 🎯 Educational Goals

WordDuel helps learners improve:

- Vocabulary acquisition
- Synonym recognition
- Antonym recognition
- Spelling accuracy
- Pronunciation
- Long-term retention through active recall

Suitable for learners preparing for:

- SAT
- GRE
- TOEFL
- IELTS
- General English proficiency

---

# 🤝 Contributing

Contributions are welcome!

1. Fork the repository.
2. Create a feature branch.

```bash
git checkout -b feature/new-feature
```

3. Commit your changes.

```bash
git commit -m "Add new feature"
```

4. Push to your branch.

```bash
git push origin feature/new-feature
```

5. Open a Pull Request.

---

# 🌐 Live Demo

👉 **https://ehsan-wordduel.learninglabs.workers.dev**

---

# 👤 Author

**Ehsan Ashourzadeh**

Designed and developed for educational purposes.

GitHub: https://github.com/EAshourzadeh

---

# ⭐ Support

If you found this project useful, please consider:

- ⭐ Starring the repository
- 🍴 Forking the project
- 📢 Sharing it with other English learners

Your support helps improve the project and motivates future development.

---

<div align="center">

## Learn English. Play Smarter. Build Your Vocabulary.

Made with ❤️ for English learners worldwide.

</div>
