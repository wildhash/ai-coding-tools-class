# Workshop Agenda — Padang AI Coding Tools Class

**Location:** Telkom AI Space / IndigoSpace Padang, Indonesia
**Audience:** Students and new developers
**Facilitator:** _(your name here)_

---

## 90-Minute Version

| Time  | Duration | Section                                          | Notes                                                                 |
|-------|----------|--------------------------------------------------|-----------------------------------------------------------------------|
| 0:00  | 5 min    | Welcome & Introductions                          | Icebreaker: "What tool do you use most when you're stuck on code?"    |
| 0:05  | 10 min   | What Are AI Coding Tools? Overview               | Slide deck: landscape of tools, how they differ, safety overview      |
| 0:15  | 20 min   | Claude Deep Dive Demo — Web, Desktop & Code      | Live demo; have fallback screenshots ready                            |
| 0:35  | 15 min   | Security & Code Review Demo — CodeRabbit on a PR | Open a real PR in the workshop repo; walk through review comments     |
| 0:50  | 15 min   | GitHub Repo Creation + GitHub Pages Setup        | Students follow along; instructor shares screen                       |
| 1:05  | 15 min   | Student Hands-On: Build Your First Page          | Students create index.html with AI assistance                         |
| 1:20  | 10 min   | Show & Tell + Q&A                                | Volunteers share their page; open floor for questions                 |
| 1:30  | —        | **End**                                          |                                                                       |

### Facilitator Notes — 90-Minute Version

- **Welcome (0:00–0:05):** Keep energy high. Ask the icebreaker question and take 2–3 answers aloud. Don't spend more than 5 minutes here.
- **Overview (0:05–0:15):** Show the tools comparison table from `TOOLS_COMPARISON_TABLE.md`. Emphasize: these are assistants, not replacements.
- **Claude Demo (0:15–0:35):** Demonstrate Claude Web first (no install needed), then briefly show Claude Code in the terminal. End with one Desktop MCP example if wifi allows.
- **CodeRabbit (0:35–0:50):** Pre-stage a pull request with intentional minor issues. Walk through how CodeRabbit comments appear. Explain what it found and why it matters.
- **GitHub Pages (0:50–1:05):** Pre-create an empty repo and demonstrate the Settings → Pages flow. Students should have their GitHub account ready.
- **Hands-On (1:05–1:20):** Circulate the room. Common blockers: git not installed, no SSH key. See `troubleshooting.md`.
- **Show & Tell (1:20–1:30):** Ask for 2–3 volunteers. Celebrate any working result. Close with next steps / resources.

---

## 2-Hour Version

| Time  | Duration | Section                                          | Notes                                                                 |
|-------|----------|--------------------------------------------------|-----------------------------------------------------------------------|
| 0:00  | 10 min   | Welcome & Introductions                          | Longer icebreaker; brief round-robin introductions from students      |
| 0:10  | 15 min   | What Are AI Coding Tools? Overview               | Extended slide deck; include responsible use and ethics               |
| 0:25  | 30 min   | Claude Deep Dive Demo — Web, Desktop & Code      | Full demo of all three surfaces; include MCP filesystem demo          |
| 0:55  | 20 min   | Security & Code Review Demo — CodeRabbit on a PR | Deeper walkthrough; explain each comment category; Q&A after          |
| 1:15  | 10 min   | ☕ Break                                          | Stretch, refill water, check installations                            |
| 1:25  | 10 min   | Cursor Deep Dive Demo                            | Show tab completion, inline chat, and multi-file context              |
| 1:35  | 15 min   | GitHub Repo Creation + GitHub Pages Setup        | Students follow along; instructor shares screen                       |
| 1:50  | 20 min   | Student Hands-On: Build Your First Page          | More time for experimentation; encourage using Cursor or Claude Code  |
| 2:10  | 10 min   | Show & Tell + Q&A                                | Volunteers share; open Q&A; share resource links                      |
| 2:20  | —        | **End**                                          |                                                                       |

### Facilitator Notes — 2-Hour Version

- **Welcome (0:00–0:10):** Go around the room if the group is ≤15 people. Ask each person their name and what they hope to build someday.
- **Overview (0:10–0:25):** Add a slide on responsible AI use. Discuss: hallucinations, over-reliance, privacy. Keep it practical, not scary.
- **Claude Demo (0:25–0:55):** Show all three surfaces in order — Claude Web → Claude Code (terminal) → Claude Desktop with MCP. Allow a few live questions during the demo.
- **CodeRabbit (0:55–1:15):** Walk through multiple review comment types: security, style, logic. Show how to respond to or dismiss a comment. Explain the difference between automated review and human review.
- **Break (1:15–1:25):** Encourage students to verify their Tier 1 tools are installed. Circulate and help with blockers.
- **Cursor Demo (1:25–1:35):** Open a real file in Cursor. Show ghost text / tab completion. Use Ctrl+K for inline generation. Use Ctrl+L for chat sidebar. Highlight how it differs from Copilot.
- **GitHub Pages (1:35–1:50):** Same as 90-min version but allow more student questions.
- **Hands-On (1:50–2:10):** Encourage more ambitious students to try multi-page sites or add a CSS framework with AI help.
- **Show & Tell (2:10–2:20):** Allow 3–4 volunteers. Share the workshop repo link and `prompts-for-coding.md` as a takeaway.

---

## Materials Needed

- [ ] Projector or large display with screen mirroring
- [ ] HDMI and USB-C adapters for presenter laptop
- [ ] Stable Wi-Fi (test upload/download before class — CodeRabbit and GitHub Pages need it)
- [ ] Whiteboard or flip chart for Q&A notes
- [ ] Printed or digital copy of `installation-checklist.md` for students
- [ ] QR code linking to the workshop GitHub repo
- [ ] Backup: screenshots and screen recordings of all live demos in case of internet outage
- [ ] USB drive with offline installers (Git, VS Code, Node.js) for students without reliable internet
- [ ] Water and snacks if running the 2-hour version

---

## Room Setup Notes

- Arrange seating so students can see the presenter's screen AND their own laptop simultaneously (classroom or U-shape style works well).
- Ensure power strips are available — every seat should have an outlet.
- Test the projector display resolution before students arrive. Target 1080p minimum.
- Have a helper / TA if the group is larger than 15 students.
- Post the workshop repo URL and Wi-Fi password visibly on the board before students enter.
- If using IndigoSpace Padang's co-working area, confirm A/C is on — laptops and people together generate heat.
