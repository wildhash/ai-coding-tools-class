# Student Projects — Padang AI Coding Tools Class

Five mini-projects to build during and after the workshop. Each includes the concept, tools, difficulty, and a starter prompt you can copy directly into Claude, ChatGPT, or Claude Code.

---

## Project 1: Personal Profile Website 🌐
**Difficulty:** Beginner | **Tools:** Claude Web, VS Code, GitHub Pages

Build a personal portfolio page and deploy it live. This is the classic first project that every developer can show to employers and put in their GitHub profile.

**What to build:**
- Hero section with your name and tagline
- About section with your background
- Skills section (HTML, CSS, JS, GitHub, the AI tools you learned)
- Projects section with 2–3 placeholder cards
- Contact section with GitHub link

**Stretch goals:** dark/light mode toggle, scroll animations, custom domain via Student Pack

**Starter prompt:**
```
Create a complete single-page personal portfolio using HTML, CSS, and JavaScript.

My name is [Your Name]. I study [Major] at [University], Padang, Indonesia.
Interests: [interests].

Requirements:
- Sticky nav with smooth scroll
- Hero with name, tagline, and CTA button
- About, Skills, Projects, Contact sections
- Responsive: mobile-first
- No external frameworks — vanilla HTML/CSS/JS
- Dark theme with purple accent (#7c3aed)

Return one complete index.html file.
```

---

## Project 2: AI Tools Directory 🗂️
**Difficulty:** Beginner | **Tools:** Cursor, Copilot, GitHub Pages

Build a filterable, searchable reference page of AI coding tools — your own version to customize and share.

**What to build:**
- Grid of tool cards with name, description, category badge, and free-tier badge
- Each card links to the official tool URL
- Filter buttons: All / AI Chat / IDE / Review / Deploy
- Live search that filters as you type

**Stretch goals:** save favorites to localStorage, comparison mode for two tools

---

## Project 3: Prompt Library Site 📚
**Difficulty:** Beginner–Intermediate | **Tools:** Claude Code, GitHub Pages

A shareable collection of your best AI prompts — useful every day after the workshop.

**What to build:**
- Categorized prompt cards (Coding, Debugging, Learning)
- One-click copy button on each card
- Keyword search
- `[PLACEHOLDER]` text highlighted in a different color

**Stretch goals:** add custom prompts via a form (localStorage), export as markdown

---

## Project 4: JavaScript Task Tracker ✅
**Difficulty:** Intermediate | **Tools:** GitHub Copilot (autocomplete), CodeRabbit (PR review)

Build a working task app with Copilot writing most of the JavaScript. Then open a PR and let CodeRabbit review your code.

**What to build:**
- Add/complete/delete tasks
- Filter: All / Active / Completed
- Task count display
- Persist in localStorage

**Stretch goals:** drag-to-reorder, priority levels, CodeRabbit finding to fix before merging

---

## Project 5: Workshop Portfolio Page 🎓
**Difficulty:** Intermediate | **Tools:** All tools from the class

Document what you built today. Use Claude Code from the terminal to generate the initial files, then deploy with GitHub Pages.

**Claude Code session:**
```bash
mkdir my-workshop-portfolio && cd my-workshop-portfolio
git init
claude

# In the session:
/init
Build a workshop portfolio site. Name: [Your Name].
Content: what I learned, tools I used, what I built, next steps.
Dark theme, purple accents, responsive. Three separate files: index.html, style.css, script.js.
After generating: git add . && git commit -m "feat: initial workshop portfolio"
```

**Stretch goals:** EN/ID bilingual toggle, CodeRabbit review on the final PR, custom domain
