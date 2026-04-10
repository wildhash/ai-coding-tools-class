# Contributing to Padang AI Coding Tools Class

## Welcome / Selamat Datang

**EN:** Thank you for your interest in contributing to this workshop repository! Whether you're fixing a typo, improving a translation, adding a new tool entry, or suggesting a better prompt example — all contributions are valued and appreciated.

**ID:** Terima kasih telah tertarik untuk berkontribusi pada repositori workshop ini! Baik itu memperbaiki typo, meningkatkan terjemahan, menambahkan entri alat baru, atau menyarankan contoh prompt yang lebih baik — semua kontribusi dihargai.

---

## 📋 How to Contribute

### 1. Fork the Repository

```bash
# Click "Fork" on GitHub, then clone your fork
git clone https://github.com/YOUR-USERNAME/ai-coding-tools-class.git
cd ai-coding-tools-class
```

### 2. Create a Branch

Use a descriptive branch name:

```bash
# For a new feature or content
git checkout -b feat/add-gemini-to-tools-table

# For a bug fix
git checkout -b fix/broken-link-in-readme

# For a translation
git checkout -b i18n/improve-indonesian-translation

# For documentation
git checkout -b docs/update-cheatsheet
```

### 3. Make Your Changes

- Keep changes focused — one branch per topic
- Follow the existing file structure and formatting
- Test any HTML/CSS/JS changes by opening the file in a browser
- For Markdown files, preview in VS Code (`Ctrl+Shift+V`) before committing

### 4. Commit with a Clear Message

```bash
git add .
git commit -m "feat: add Gemini to tools comparison table

- Added Google Gemini / AI Studio row
- Included free tier details and student pack info
- Added official link"
```

### 5. Push and Open a Pull Request

```bash
git push origin feat/add-gemini-to-tools-table
```

Then go to GitHub and click **"Compare & pull request"**.

---

## ✅ Pull Request Guidelines

When opening a PR, please:

- **Use a clear, descriptive title** — e.g. `feat: add Windsurf keyboard shortcuts to cheatsheet`
- **Describe your changes** in the PR body — what did you change and why?
- **Link any related issues** — use `Closes #42` or `Related to #15` in the description
- **Keep PRs focused** — avoid mixing unrelated changes in a single PR
- **Check that your Markdown renders correctly** — use GitHub's preview tab
- **Be responsive** — if reviewers (including CodeRabbit 🐇) leave comments, please respond or make the requested changes

---

## 🤖 CodeRabbit Auto-Review

This repository has **CodeRabbit** enabled for automated PR review. When you open a PR:

- CodeRabbit will post a summary and line-by-line feedback automatically
- You can ask it follow-up questions by commenting `@coderabbitai` in the PR
- Address or acknowledge all CodeRabbit comments before the PR is merged
- You can request a fresh review with `@coderabbitai review`

---

## 🌐 Adding Translations (data-i18n System)

The workshop website (`site/index.html`) uses a `data-i18n` attribute system for bilingual content. Here's how to add or improve translations:

### How it works

HTML elements that need translation have a `data-i18n` attribute with a unique key:

```html
<h1 data-i18n="hero.title">Padang AI Coding Tools Class</h1>
<p data-i18n="hero.subtitle">Hands-on workshop for modern AI tools</p>
```

The translation dictionary lives in `site/js/i18n.js`:

```js
const translations = {
  en: {
    "hero.title": "Padang AI Coding Tools Class",
    "hero.subtitle": "Hands-on workshop for modern AI tools",
  },
  id: {
    "hero.title": "Kelas Alat Coding AI Padang",
    "hero.subtitle": "Workshop langsung untuk alat AI modern",
  }
};
```

### To add a new translatable string

1. Add a `data-i18n="section.key"` attribute to the HTML element
2. Add the English string under `en` in `i18n.js`
3. Add the Bahasa Indonesia string under `id` in `i18n.js`
4. Test both languages by toggling the language switcher in the browser

### Translation quality

- Prefer natural, conversational Bahasa Indonesia over direct word-for-word translation
- Technical terms (e.g. "pull request", "commit", "deployment") can remain in English
- If you're unsure about a translation, add a comment in the PR and a maintainer will help

---

## 📝 Bilingual Content Note

For Markdown files (README, CONTRIBUTING, CHEATSHEET, etc.):

- Primary language is **English**
- Important sections may include an Indonesian summary or note
- When adding new sections, English content is required; Indonesian is a bonus
- Label bilingual blocks clearly: `**EN:**` and `**ID:**`

---

## 🛡️ Code of Conduct

This project follows a simple code of conduct:

- **Be kind and respectful** to all contributors, regardless of experience level
- **Give constructive feedback** — critique the code, not the person
- **Be patient** — many contributors are students learning for the first time
- **Celebrate contributions** — a first PR is a big deal!

Harassment, discrimination, or dismissive behaviour will not be tolerated.

---

## ❓ Contact / Questions

**Have a question before opening a PR?**

- Open a [GitHub Discussion](https://github.com/padangaiclass/ai-coding-tools-class/discussions) for general questions
- Open a [GitHub Issue](https://github.com/padangaiclass/ai-coding-tools-class/issues) for specific bugs or content requests
- Reach out to the workshop organiser via the contact details on the [workshop site](https://padangaiclass.github.io/ai-coding-tools-class/)

**ID:** Punya pertanyaan? Buka diskusi di GitHub atau buka issue baru. Kami senang membantu!

---

Thank you for helping make this workshop better for everyone in Padang and beyond! 🙏🇮🇩
