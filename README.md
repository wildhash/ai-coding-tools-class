# Padang AI Coding Tools Class

> **(EN/ID) Hands-on workshop for modern AI/ML coding tools**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)
[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live-brightgreen)](https://padangaiclass.github.io/ai-coding-tools-class/)

A practical, bilingual (English / Bahasa Indonesia) workshop held at **Telkom AI Space / IndigoSpace Padang, Indonesia**. Participants learn to use modern AI-assisted coding tools — from writing their first prompt to shipping a live website. No prior AI experience required; a basic understanding of HTML/CSS is helpful but not mandatory.

---

## 👥 Who This Is For

- 🎓 University students and recent graduates
- 💻 New developers looking to level up with AI tools
- 🤔 Anyone curious about how AI coding assistants actually work
- 🇮🇩 Indonesian learners who want bilingual (EN/ID) resources

---

## 🛠️ Tools Covered

### 🆓 Free Core Tools
| Tool | What it does |
|------|-------------|
| [Claude.ai](https://claude.ai) | Web-based AI assistant for coding, writing, analysis |
| [Claude Desktop](https://claude.ai/download) | Desktop app with MCP support and file access |
| [Claude Code](https://docs.anthropic.com/en/docs/claude-code) | Agentic CLI coding tool — runs in your terminal |
| [VS Code](https://code.visualstudio.com/) | Free, extensible code editor by Microsoft |
| [Cursor](https://cursor.sh/) | AI-first code editor (VS Code fork) with inline AI |
| [GitHub](https://github.com/) | Git hosting, collaboration, Actions CI/CD |
| [GitHub Copilot](https://copilot.github.com/) | AI pair programmer (free for students via Student Pack) |
| [ChatGPT](https://chatgpt.com/) | General-purpose AI assistant by OpenAI |

### 🔒 Security & Review Tools
| Tool | What it does |
|------|-------------|
| [CodeRabbit](https://coderabbit.ai/) | AI-powered automated PR code review |
| [GitHub Secret Scanning](https://docs.github.com/en/code-security/secret-scanning) | Detects accidentally committed secrets |
| [Semgrep](https://semgrep.dev/) | Static analysis and security linting |
| [GitGuardian](https://gitguardian.com/) | Real-time secret detection and policy enforcement |

### ⚙️ Optional / Advanced Tools
| Tool | What it does |
|------|-------------|
| [Lovable](https://lovable.dev/) | Prompt-to-full-stack-app builder |
| [Vercel](https://vercel.com/) | One-click frontend deployment and hosting |
| [Netlify](https://netlify.com/) | Drag-and-drop and Git-connected deployment |
| [Replit](https://replit.com/) | Browser-based IDE with AI + instant deployment |
| [Windsurf](https://codeium.com/windsurf) | Agentic AI code editor by Codeium |
| [Aider](https://aider.chat/) | CLI AI coding assistant with git integration |
| [Continue.dev](https://continue.dev/) | Open-source AI coding assistant VS Code extension |
| [Macroscope](https://macroscope.so/) | AI-powered codebase exploration and onboarding |

---

## 🎯 Learning Outcomes

By the end of this workshop, participants will be able to:

- ✅ **Explain** what AI coding tools are and how they fit into a developer workflow
- ✅ **Prompt effectively** — write structured, specific prompts that produce useful code
- ✅ **Use Claude Code** in the terminal to initialise, review, and improve a project
- ✅ **Set up GitHub Copilot** in VS Code or Cursor and use inline AI suggestions
- ✅ **Configure CodeRabbit** on a GitHub repo to automate PR code review
- ✅ **Identify and avoid** common AI pitfalls: hallucinations, insecure code, over-reliance
- ✅ **Deploy a live website** to GitHub Pages from a Git repository
- ✅ **Discuss responsible AI** use in software development contexts

---

## 🔄 Workshop Workflow Arc

```
Think → Prompt → Build → Review → Commit → Publish
```

| Step | Emoji | Description |
|------|-------|-------------|
| **Think** | 🧠 | Clarify the problem before touching any tool. What do you actually want? |
| **Prompt** | ✍️ | Write a clear, specific prompt. Give context, role, constraints, and expected output. |
| **Build** | 🔨 | Use Claude Code / Copilot / Cursor to generate and iterate on code. |
| **Review** | 🔍 | Use CodeRabbit or manual review to catch bugs, security issues, and bad patterns. |
| **Commit** | 📦 | Stage changes with meaningful commit messages. Push to GitHub. |
| **Publish** | 🚀 | Deploy to GitHub Pages, Vercel, or Netlify. Share your live URL. |

---

## ⚡ Quick Start

```bash
# 1. Clone the workshop repository
git clone https://github.com/padangaiclass/ai-coding-tools-class.git

# 2. Open in VS Code
code ai-coding-tools-class

# 3. Open the live workshop site locally
open site/index.html   # macOS
xdg-open site/index.html   # Linux
start site/index.html  # Windows
```

---

## 🏗️ What Students Will Build

1. **Personal AI Tools Landing Page** — A single-page HTML/CSS/JS site showcasing the tools they learned, deployed to GitHub Pages
2. **Prompted Mini-App** — A small web app (e.g. to-do list, quote generator, simple calculator) built entirely with AI assistance and committed to their own GitHub repo
3. **Reviewed Pull Request** — A PR on a shared class repo, automatically reviewed by CodeRabbit, with students responding to and resolving the AI review comments

---

## 🎬 Live Demo Flow

The instructor will demonstrate the full workflow live. Follow along:

1. **Open Claude.ai** → Ask it to explain what a REST API is in simple terms
2. **Switch to Claude Desktop** → Show file access and MCP tools in action
3. **Open Cursor** → Create a new HTML file, use `Ctrl+K` to generate a navbar
4. **Open VS Code + Copilot** → Start typing a function, accept inline suggestions
5. **Open Terminal** → Run `claude` CLI, do `/init` on the project folder
6. **Prompt Claude Code** → "Add a dark mode toggle to index.html using vanilla JS"
7. **Push to GitHub** → `git add . && git commit -m "feat: add dark mode" && git push`
8. **Open the PR** → Watch CodeRabbit post its automated review within seconds
9. **Deploy** → Enable GitHub Pages from the repo Settings → Pages tab
10. **Share the live URL** → Your site is now live on the internet 🎉

---

## 🌐 Bilingual Note / Catatan Dua Bahasa

> **EN:** All slides, cheat sheets, and this README are available in both English and Bahasa Indonesia. The workshop site uses a language toggle — click 🇬🇧 / 🇮🇩 to switch.
>
> **ID:** Semua slide, lembar contekan, dan README ini tersedia dalam Bahasa Inggris dan Bahasa Indonesia. Situs workshop menggunakan tombol ganti bahasa — klik 🇬🇧 / 🇮🇩 untuk beralih.

---

## 🤝 Responsible AI

We take responsible AI use seriously. In this workshop:

- 🚫 **Don't blindly trust AI output** — always read and understand the code before committing it
- 🔐 **Never put real secrets in prompts** — API keys, passwords, and tokens must stay out of AI chats
- 📚 **Cite your tools** — if AI generated significant portions of your work, acknowledge it
- 🧩 **AI is a tool, not a replacement** — use it to augment your skills, not skip learning fundamentals

---

## 🔗 Workshop Site (GitHub Pages)

👉 **[https://padangaiclass.github.io/ai-coding-tools-class/](https://padangaiclass.github.io/ai-coding-tools-class/)**

The live site includes interactive tool cards, bilingual content toggle, and the full workshop schedule.

---

## 🤝 Contributing

Contributions are welcome! Whether it's fixing a typo, adding a tool, or translating content, please read [CONTRIBUTING.md](./CONTRIBUTING.md) before opening a PR.

---

## 📄 License

This project is licensed under the **MIT License** — see [LICENSE](./LICENSE) for details.
