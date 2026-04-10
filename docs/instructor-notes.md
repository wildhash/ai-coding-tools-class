# Instructor / Facilitator Notes — Padang AI Coding Tools Class

> **Confidential:** These notes are for facilitators. Do not distribute to students before the workshop.

---

## Pre-Workshop Checklist

### 1 Week Before
- [ ] Confirm venue booking at IndigoSpace Padang — check A/C, projector, power strips
- [ ] Send students the `installation-checklist.md` and ask them to complete Tier 1 before arrival
- [ ] Create a dedicated GitHub organization or repo for the workshop (e.g., `padang-ai-workshop-YYYY-MM`)
- [ ] Set up a CodeRabbit-monitored repo with a pre-staged pull request (see demo steps below)
- [ ] Test Claude Web, Claude Code, and Claude Desktop on your own laptop
- [ ] Download offline installers: Git, VS Code, Node.js — put on USB drive
- [ ] Prepare fallback screenshots / screen recordings for all live demos
- [ ] Review `troubleshooting.md` — anticipate the top 5 blockers

### 1 Day Before
- [ ] Test Wi-Fi at the venue (upload AND download — GitHub pushes and CodeRabbit both need upload)
- [ ] Load all browser tabs you'll need: claude.ai, github.com, the workshop repo, CodeRabbit dashboard
- [ ] Run through the full live demo flow (steps 1–10 below) without shortcuts
- [ ] Prepare a QR code linking to the workshop repo URL
- [ ] Print or digitally share `installation-checklist.md`
- [ ] Charge laptop, bring power adapter and adapters (HDMI, USB-C)

### Day Of (1 Hour Before)
- [ ] Arrive early, connect to projector, test display resolution
- [ ] Post Wi-Fi password and repo URL on the whiteboard
- [ ] Open all demo tabs; disable notifications on presenter laptop
- [ ] Do a final live test of Claude Web and Claude Code
- [ ] Have `troubleshooting.md` open in a side tab

---

## Common Student Confusion Points

### 1. "Is this just ChatGPT?"
**Suggested Response:** "ChatGPT is one product from OpenAI. Claude is made by Anthropic — a different company. They both use large language models, but they have different strengths, training approaches, and policies. Today we're focusing on Claude because it has a particularly powerful CLI tool called Claude Code, and because its context window handles large codebases well. The skills you learn transfer to any LLM."

### 2. "Will AI replace programmers?"
**Suggested Response:** "AI tools change what programmers do — they handle more boilerplate and repetitive tasks. But someone still needs to understand the problem, design the architecture, decide what to build, review what the AI generates, and take responsibility for the result. That's you. The developers who learn to work *with* AI tools effectively will be more productive than those who don't — not replaced."

### 3. "The AI gave me wrong code. Does it always lie?"
**Suggested Response:** "AI tools sometimes produce incorrect, outdated, or insecure code — we call this a 'hallucination.' It's not lying intentionally; it's pattern-matching on training data. That's why you always need to read and test what it produces. Think of it like getting advice from a very knowledgeable but sometimes overconfident colleague — useful, but always verify."

### 4. "I don't understand what the code does, so how do I use it?"
**Suggested Response:** "Great instinct! Ask Claude to explain it. Write: 'Explain this code line by line in simple terms.' Understanding what you're using is always more valuable than just copying it. Over time, reading AI-generated code will teach you patterns faster than only writing from scratch."

### 5. "My Claude Code says 'command not found' after npm install"
**Suggested Response:** "This usually means Node.js isn't in your PATH, or the install was done in the wrong shell. See the troubleshooting guide: run `node --version` and `npm --version` first. If those work but `claude` doesn't, try closing and reopening the terminal, or run `npx @anthropic-ai/claude-code` as a workaround."

### 6. "GitHub Pages says '404 Not Found' on my site"
**Suggested Response:** "Usually one of three things: (1) the file is named something other than `index.html`, (2) Pages is set to deploy from the wrong branch or folder, (3) the deployment hasn't finished yet — it can take 1–3 minutes. Check Settings → Pages and confirm the source branch and folder."

### 7. "CodeRabbit commented on my code but I don't understand the issue"
**Suggested Response:** "Hover over the comment for a full explanation, or copy the comment text into Claude Web and ask: 'Explain this code review comment and how to fix it.' This is a great use of AI — using one AI tool to understand feedback from another."

### 8. "Do I need to pay for any of these tools?"
**Suggested Response:** "No. Everything in this workshop uses free tiers. Claude has a free plan at claude.ai. Claude Code has a free tier. GitHub is free. GitHub Pages is free. CodeRabbit is free for public repos. Cursor has a free trial. The only optional paid upgrade is GitHub Copilot, which has a free tier for students through the GitHub Student Developer Pack."

### 9. "Can I use this for my school assignments?"
**Suggested Response:** "That depends entirely on your school's policy. Some schools allow AI assistance with attribution; others prohibit it. Always check with your instructor first. What you can always do: use AI to *learn* — ask it to explain concepts, debug your thinking, or give you feedback — without submitting AI-generated work as your own."

### 10. "Cursor vs. GitHub Copilot — which should I use?"
**Suggested Response:** "Both are inline AI completers. Cursor is a standalone editor built on VS Code; Copilot is an extension you add to VS Code or other editors. Cursor has a more aggressive multi-line completion and a built-in chat panel. Copilot integrates tightly with GitHub. Try both — your preference often depends on your workflow. Both have free tiers."

---

## Offline Fallbacks

### Claude (claude.ai or Claude Code)
- **Primary fallback:** Pre-record a 5-minute screen capture of a Claude Web session that demonstrates the key interactions (code generation, explanation, refactoring).
- **Secondary fallback:** Use static screenshots embedded in a slide deck.
- **Student fallback:** Ask students to use the Claude mobile app if the venue's internet is slow — it runs on cellular data.

### GitHub
- **Primary fallback:** Pre-clone the workshop repo and demonstrate git operations locally without pushing.
- **Secondary fallback:** Show the expected GitHub UI using screenshots in slides.
- **Student fallback:** Students can complete the hands-on exercise locally and push later when connected.

### Cursor
- **Primary fallback:** Show Cursor's inline completion using the static "ghost text" demo mode (Cursor works offline for completion if a model is cached).
- **Secondary fallback:** Demo GitHub Copilot in VS Code instead — same concept.

### CodeRabbit
- **Primary fallback:** Pre-capture a full-page screenshot of a CodeRabbit review on the workshop PR. Walk through it as a slide.
- **Secondary fallback:** Copy a CodeRabbit review comment into a document and discuss it manually.
- **Note:** CodeRabbit requires an active GitHub connection and a public repo — always pre-stage this demo.

---

## How to Demo Claude Desktop MCP Live (Step-by-Step)

> Prerequisites: Claude Desktop installed, MCP filesystem server configured, a project folder ready.

1. Open **Claude Desktop** on your presenter laptop.
2. In the Claude Desktop chat, type: `"What files are in my workshop project folder?"`
3. Claude will use the MCP filesystem tool to list the directory contents. Point out that Claude is *reading your local disk*, not the internet.
4. Follow up: `"Read the contents of index.html and suggest three improvements."`
5. Claude will read the file and respond with context-aware suggestions. Highlight that it's working with your actual code.
6. Optional: `"Add a footer element to index.html with the text 'Built at IndigoSpace Padang'."` — Claude will propose the edit. Show students the diff before accepting.
7. Emphasize: **this is why MCP is powerful** — Claude can read, edit, and reason about your entire project, not just a pasted snippet.

**Timing:** This demo takes ~5 minutes. Have all steps pre-prepared in case of typing errors.
**Fallback:** If MCP fails to load, show a screenshot sequence. The filesystem MCP server sometimes fails to start — restart Claude Desktop once and try again.

---

## How to Show CodeRabbit on a Real PR (Step-by-Step)

> Prerequisites: Workshop GitHub repo exists, CodeRabbit is installed on it, a PR with review comments is pre-staged.

1. Open the workshop GitHub repo in the browser (have it pre-loaded in a tab).
2. Navigate to the **Pull Requests** tab.
3. Open the pre-staged PR (e.g., "Add student demo page").
4. Scroll to the **Files Changed** tab and show the diff.
5. Scroll down to the **Review Comments** section — point out CodeRabbit's bot avatar.
6. Click on a specific comment to expand it. Read it aloud.
7. Explain each comment category: `security`, `style`, `logic`, `documentation`.
8. Show how to reply to a comment: click **Reply**, type a response or `"Acknowledged"`.
9. Show how to resolve a comment after fixing the issue.
10. Optional: Make a small live edit (fix a typo), push it, and watch CodeRabbit re-review within ~30 seconds.

**Timing:** 10–15 minutes depending on discussion.
**Tip:** Pre-stage a PR with 3–5 diverse comment types for maximum educational value.

---

## How to Explain AI Security Without Scaring Beginners

**Frame it as:** "There are a few simple habits that keep you and your users safe."

**The three rules to teach:**
1. **Never commit secrets.** API keys, passwords, and tokens should be in `.env` files that are in `.gitignore`. Claude Code and CodeRabbit will both warn you, but the habit matters.
2. **Test what AI generates.** AI can produce code with subtle bugs or outdated patterns. Run it. Read it. Ask Claude to explain anything confusing.
3. **Don't paste sensitive data into AI tools.** No passwords, no personal user data, no confidential business data. Treat the AI like a public forum — anything you type could be used for training.

**What NOT to do:** Don't show scary CVE databases or hacking demos. Keep it grounded in concrete student scenarios.

**Reassurance:** "Following these three habits puts you ahead of many professional developers. Most real security incidents come from forgetting the basics, not from exotic attacks."

---

## Live Demo Flow (10 Steps with Timing)

| Step | Action                                                              | Time   |
|------|---------------------------------------------------------------------|--------|
| 1    | Open claude.ai in browser; show the interface briefly               | 1 min  |
| 2    | Paste a broken Python snippet; ask Claude to fix and explain it     | 3 min  |
| 3    | Ask Claude: "Generate an HTML page with a nav and hero section"     | 3 min  |
| 4    | Copy the HTML; open VS Code; paste into `index.html`; open in browser | 2 min  |
| 5    | Switch to terminal; run `claude` (Claude Code); show the prompt     | 1 min  |
| 6    | In Claude Code: "Add a footer to index.html"                        | 2 min  |
| 7    | Show the edited file; accept the change; refresh browser            | 1 min  |
| 8    | Open GitHub; navigate to workshop repo; open pre-staged PR          | 1 min  |
| 9    | Walk through CodeRabbit review comments                             | 5 min  |
| 10   | Enable GitHub Pages on repo; share the live URL                     | 2 min  |

**Total demo time:** ~21 minutes (adjust for 90-min vs 2-hour version)

---

## Handling Q&A Tips

- **Repeat the question** before answering — the whole room should hear it.
- **Time-box deep dives:** "Great question — let's spend 2 minutes on that and then park anything more in the 'parking lot'."
- Keep a **parking lot** on the whiteboard for questions you can't fully answer during the session.
- If you don't know the answer: "I don't know off the top of my head, but let's ask Claude right now — that's actually a great demo of using it as a learning tool."
- Redirect student-to-student: "Has anyone here run into that before? What did you try?"
- End Q&A with: "Any questions about what to do after today? What's your next step?"

---

## Post-Workshop Follow-Up Suggestions

1. **Send a follow-up email** within 24 hours linking to:
   - The workshop GitHub repo
   - `prompts-for-coding.md`, `prompts-for-research.md`, `prompts-for-debugging.md`
   - Claude free tier signup: [claude.ai](https://claude.ai)
   - GitHub Student Developer Pack (free Copilot): [education.github.com/pack](https://education.github.com/pack)

2. **Create a group chat** (WhatsApp, Telegram, or Discord) for participants to share what they build next.

3. **Set a "build challenge"** — ask participants to publish a live GitHub Pages site within one week and share the link.

4. **Collect feedback** via a short Google Form (5 questions max):
   - What was most useful?
   - What was most confusing?
   - What tool will you use first after today?
   - Would you recommend this workshop?
   - What topic should we cover next?

5. **Plan a follow-up session** (4–6 weeks later) covering:
   - Building a Python script with Claude Code
   - Setting up a CI/CD pipeline with GitHub Actions
   - Contributing to an open source project

6. **Tag participants** on the workshop repo — give everyone Contributor access so they can keep using it as a learning resource.
