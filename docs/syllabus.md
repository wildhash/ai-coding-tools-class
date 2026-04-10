# Course Syllabus — Padang AI Coding Tools Class

**Venue:** Telkom AI Space / IndigoSpace Padang, Indonesia
**Format:** Workshop (single session, 90 min or 2 hours)
**Language of Instruction:** Bahasa Indonesia / English (bilingual facilitation)
**Level:** Beginner-friendly

---

## Course Description

This hands-on workshop introduces students and new developers to the growing ecosystem of AI-powered coding tools. Participants will explore how tools like Claude, GitHub Copilot, Cursor, and CodeRabbit can accelerate development, improve code quality, and reduce time spent on repetitive tasks — all while maintaining critical thinking and ownership of their work.

By the end of this workshop, participants will have created and deployed a real web page using AI assistance, and will leave with a curated set of prompts and resources to continue learning independently.

---

## Learning Objectives

By the end of this workshop, participants will be able to:

1. **Identify** the major categories of AI coding tools and explain what each type does.
2. **Use Claude** (Web, Desktop, or Code) to generate, explain, and refactor code.
3. **Interpret** AI-generated code review feedback from CodeRabbit on a GitHub pull request.
4. **Apply** prompt engineering techniques to get better results from AI coding assistants.
5. **Create** a GitHub repository, commit code, and publish a site with GitHub Pages.
6. **Recognize** common failure modes of AI tools: hallucinations, outdated information, and insecure suggestions.
7. **Debug** a broken code snippet using an AI assistant with proper context sharing.
8. **Select** the right AI tool for a given task (chat vs. inline vs. CLI vs. review).
9. **Describe** responsible and ethical use of AI tools in professional development.
10. **Access** documentation, prompts, and community resources to continue self-directed learning.

---

## Prerequisites

### Required
- None. No prior programming experience is strictly required, though basic familiarity with computers is assumed.

### Nice to Have
- Basic understanding of HTML (what a tag is, what a browser does)
- Any exposure to Python, JavaScript, or another programming language
- A GitHub account (can be created during the workshop)
- Laptop with a modern browser (Chrome or Firefox recommended)

### What You Do NOT Need
- Paid subscriptions to any tool
- Prior experience with AI tools
- A local development environment pre-configured (we set it up together)

---

## Module Breakdown

---

### Module 1 — Introduction to AI Coding Tools

**Duration:** 10–15 minutes
**Format:** Presentation + discussion

**Topics:**
- The AI coding tools landscape: assistants, inline completers, CLI agents, review bots
- How large language models (LLMs) work at a high level
- The difference between generating code and understanding code
- Why AI tools are a complement to, not a replacement for, learning

**Key Concepts:**
- Prompt → Response cycle
- Context window: what the AI can "see"
- Tokens, temperature, and why outputs vary

**Discussion Question:** "Have you ever used AI to help you with any task — coding or otherwise? What worked? What didn't?"

---

### Module 2 — Claude: Web, Desktop, and Code

**Duration:** 20–30 minutes
**Format:** Live demo + follow-along

**Topics:**
- Claude Web: using claude.ai in the browser for code generation and explanation
- Claude Code: running Claude in the terminal as a coding agent
- Claude Desktop + MCP: connecting Claude to your local filesystem
- Writing effective prompts for coding tasks

**Hands-On Activity:** Write a prompt that generates a working HTML page with a navigation bar and a hero section.

**Key Takeaways:**
- Claude Web is the easiest starting point — no install needed
- Claude Code can read, write, and edit files in your project
- MCP extends Claude's reach to local tools and data sources

---

### Module 3 — Code Review and Security

**Duration:** 15–20 minutes
**Format:** Live demo on a real pull request

**Topics:**
- What automated code review catches (and what it misses)
- CodeRabbit: AI-powered pull request review
- Common security issues in beginner code: hardcoded secrets, SQL injection basics, insecure dependencies
- How to respond to, dismiss, or act on review comments

**Demo:** Open a prepared pull request in the workshop GitHub repo and walk through CodeRabbit's review comments live.

**Key Takeaways:**
- Automated review is a safety net, not a guarantee
- Learning to read review comments is a professional skill
- Never commit API keys or passwords — use environment variables

---

### Module 4 — GitHub Workflow

**Duration:** 15 minutes
**Format:** Instructor-led demo + student follow-along

**Topics:**
- Creating a GitHub repository
- Git basics: init, add, commit, push
- Opening a pull request
- GitHub Actions overview (brief)

**Hands-On Activity:** Create a new GitHub repo and push at least one file to it.

**Key Takeaways:**
- Git and GitHub are foundational — AI tools build on top of them
- A pull request is how professional teams collaborate on code

---

### Module 5 — Building and Deploying

**Duration:** 15–20 minutes
**Format:** Guided project

**Topics:**
- Enabling GitHub Pages from a repository
- Structuring a simple static site (index.html + assets)
- Deploying changes by pushing to main
- Verifying the live URL

**Hands-On Activity:** Create `index.html` with AI assistance, push to GitHub, enable Pages, and share the live URL.

**Key Takeaways:**
- A deployed, public URL is more impressive than local code
- GitHub Pages is free and requires no server configuration
- Every push to `main` becomes a deployment

---

### Module 6 — Responsible AI Use

**Duration:** 10 minutes
**Format:** Discussion + guidelines handout

**Topics:**
- Hallucinations: when AI confidently says something wrong
- Code ownership and attribution
- Privacy: never paste sensitive data into AI tools
- Over-reliance: AI as a crutch vs. AI as a tool
- Academic and professional integrity

**Discussion:** "If AI writes your code, is it your code? Where do you draw the line?"

**Key Takeaways:**
- Always read and understand AI-generated code before using it
- Verify factual claims and test generated code
- Your name is on the commit — you are responsible

---

## Assessment / Completion Criteria

This workshop does not have a formal grade. Completion is demonstrated by:

| Milestone                                             | How Verified                          |
|-------------------------------------------------------|---------------------------------------|
| GitHub repository created                             | Instructor checks GitHub profile      |
| At least one file committed and pushed                | Visible in repo commit history        |
| GitHub Pages site live with a working URL             | Student shares URL during show & tell |
| Participated in a code review discussion              | Present during CodeRabbit demo        |
| Completed the installation checklist (Tier 1 minimum) | Self-reported + verification commands |

A digital certificate of participation can be issued upon request.

---

## Resources

### Official Documentation
- [Claude Documentation](https://docs.anthropic.com)
- [Claude Code (CLI)](https://docs.anthropic.com/claude-code)
- [GitHub Docs](https://docs.github.com)
- [GitHub Pages](https://pages.github.com)
- [Cursor Docs](https://cursor.sh/docs)
- [CodeRabbit Docs](https://docs.coderabbit.ai)
- [Aider](https://aider.chat)
- [Continue.dev](https://continue.dev)

### Workshop Repository
- [github.com/your-org/ai-coding-tools-class](https://github.com/your-org/ai-coding-tools-class) ← _update with actual URL_

### Supplementary Reading
- Anthropic's Responsible Scaling Policy: [anthropic.com/policies](https://www.anthropic.com/policies)
- GitHub's Guide to Copilot: [github.com/features/copilot](https://github.com/features/copilot)
- "Prompt Engineering Guide": [promptingguide.ai](https://www.promptingguide.ai)

### Community
- [r/LocalLLaMA](https://reddit.com/r/LocalLLaMA) — open source AI tools
- [Hacker News](https://news.ycombinator.com) — AI and developer discussions
- Telkom AI Space / IndigoSpace Padang community channels _(add local links here)_
