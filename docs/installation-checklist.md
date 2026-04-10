# Installation Checklist — Padang AI Coding Tools Class

Complete this checklist **before arriving at the workshop**. If you get stuck, bring your laptop and we'll help on the day.

> **Good news:** No paid tools are required. Everything in this workshop has a free tier.

---

## Tier 1 — Minimum Required ✅
*Must have before class. Without these, you cannot follow along.*

---

### 1. Git
**URL:** [https://git-scm.com/downloads](https://git-scm.com/downloads)

**Installation:**
- **Windows:** Download the installer. During setup, choose "Git from the command line and also from 3rd-party software."
- **macOS:** Run `git --version` in Terminal. If not installed, macOS will prompt you to install Xcode Command Line Tools.
- **Linux (Ubuntu/Debian):** `sudo apt update && sudo apt install git`

**Verification:**
```bash
git --version
# Expected: git version 2.x.x or higher
```

---

### 2. VS Code (Visual Studio Code)
**URL:** [https://code.visualstudio.com](https://code.visualstudio.com)

**Installation:**
- Download the installer for your OS from the link above.
- **Windows:** Run the `.exe` installer. Check "Add to PATH" during installation.
- **macOS:** Drag VS Code to your Applications folder. Then open the Command Palette (`Cmd+Shift+P`) and run `Shell Command: Install 'code' command in PATH`.
- **Linux:** Download the `.deb` or `.rpm` package, or use: `sudo snap install code --classic`

**Verification:**
```bash
code --version
# Expected: 1.x.x or higher
```

---

### 3. GitHub Account
**URL:** [https://github.com](https://github.com)

**Setup:**
1. Click "Sign up" and create a free account.
2. Verify your email address.
3. Set a profile picture (optional but recommended).
4. Enable two-factor authentication (recommended): Settings → Password and authentication → Enable 2FA.

**Verification:** Log in to [github.com](https://github.com) and confirm you can see your dashboard.

---

### 4. Claude.ai Account
**URL:** [https://claude.ai](https://claude.ai)

**Setup:**
1. Click "Sign up" and create a free account.
2. Verify your email address.
3. Log in and confirm you can start a conversation.

**Verification:** Open a chat and type: `"Hello! What is 2 + 2?"` — if Claude responds, you're ready.

---

## Tier 2 — Recommended 🌟
*Strongly recommended. Set these up if you have time.*

---

### 5. Node.js
**URL:** [https://nodejs.org](https://nodejs.org)

Download the **LTS** (Long Term Support) version.

**Windows/macOS:** Use the installer from the link above.
**Linux:**
```bash
# Using NodeSource (recommended):
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt-get install -y nodejs
```

**Verification:**
```bash
node --version
# Expected: v18.x.x or higher

npm --version
# Expected: 9.x.x or higher
```

---

### 6. Claude Code (CLI)
**Requires:** Node.js (step 5) to be installed first.

```bash
npm install -g @anthropic-ai/claude-code
```

After installation, authenticate:
```bash
claude
# Follow the prompts to log in with your Claude account
```

**Verification:**
```bash
claude --version
# Expected: prints a version number

claude "What is 1 + 1?"
# Expected: Claude responds with "2" or similar
```

---

### 7. Cursor
**URL:** [https://cursor.sh](https://cursor.sh)

Cursor is a VS Code-based editor with built-in AI completions and chat.

**Setup:**
1. Download and install from the link above.
2. On first launch, sign up for a free Cursor account.
3. You can import your VS Code settings and extensions during setup.

**Verification:** Open Cursor, create a new file, and type a comment like `# function to add two numbers`. Press Tab — if Cursor suggests code, it's working.

---

### 8. GitHub Copilot (VS Code Extension)
**URL:** [https://marketplace.visualstudio.com/items?itemName=GitHub.copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot)

**Setup:**
1. Open VS Code.
2. Press `Ctrl+Shift+X` (Windows/Linux) or `Cmd+Shift+X` (macOS) to open Extensions.
3. Search for "GitHub Copilot" and install it.
4. Sign in with your GitHub account when prompted.

> **Students:** Apply for GitHub Copilot free access via [education.github.com/pack](https://education.github.com/pack).

**Verification:** Open a `.js` or `.py` file in VS Code, type a comment describing a function, and wait for a ghost-text suggestion.

---

## Tier 3 — Optional Advanced 🔧
*For curious learners. Not required for the workshop.*

---

### 9. Claude Desktop
**URL:** [https://claude.ai/download](https://claude.ai/download)

A native desktop application that supports MCP (Model Context Protocol) for connecting Claude to local tools.

**Verification:** Open Claude Desktop and confirm it shows your conversation history.

---

### 10. MCP Filesystem Server
**Requires:** Claude Desktop (step 9) and Node.js (step 5).

```bash
npm install -g @anthropic-ai/mcp-server-filesystem
```

Configure MCP in Claude Desktop by adding to your config file:
```json
{
  "mcpServers": {
    "filesystem": {
      "command": "mcp-server-filesystem",
      "args": ["/path/to/your/projects"]
    }
  }
}
```

Replace `/path/to/your/projects` with the folder you want Claude to access.

**Verification:** In Claude Desktop, ask: `"What files are in my projects folder?"` — Claude should list your actual files.

---

### 11. Aider
**Requires:** Python 3.8+ installed.

```bash
pip install aider-chat
```

**Usage:**
```bash
cd your-project
aider
```

**Verification:**
```bash
aider --version
# Expected: prints a version number
```

---

### 12. Continue.dev (VS Code Extension)
**URL:** [https://marketplace.visualstudio.com/items?itemName=Continue.continue](https://marketplace.visualstudio.com/items?itemName=Continue.continue)

An open-source AI coding assistant that works with multiple models including local ones.

**Setup:**
1. Install from VS Code Extensions (`Ctrl+Shift+X`).
2. On first launch, choose a model (Claude or another provider).
3. Configure your API key if required.

**Verification:** Open a file in VS Code, highlight some code, and right-click → "Ask Continue" — if a chat panel opens, it's working.

---

## Summary Table

| # | Tool             | Tier | Free? | Install Time |
|---|------------------|------|-------|--------------|
| 1 | Git              | 1    | ✅    | 5 min        |
| 2 | VS Code          | 1    | ✅    | 5 min        |
| 3 | GitHub account   | 1    | ✅    | 3 min        |
| 4 | Claude.ai account| 1    | ✅    | 2 min        |
| 5 | Node.js          | 2    | ✅    | 5 min        |
| 6 | Claude Code      | 2    | ✅    | 2 min        |
| 7 | Cursor           | 2    | ✅    | 5 min        |
| 8 | GitHub Copilot   | 2    | ✅*   | 3 min        |
| 9 | Claude Desktop   | 3    | ✅    | 5 min        |
| 10| MCP filesystem   | 3    | ✅    | 10 min       |
| 11| Aider            | 3    | ✅    | 3 min        |
| 12| Continue.dev     | 3    | ✅    | 3 min        |

*Free for students via GitHub Education Pack; otherwise free tier available.

---

## Having Trouble?

See [`troubleshooting.md`](troubleshooting.md) for common installation issues.

For help before the workshop: open an issue in the [workshop repository](https://github.com/your-org/ai-coding-tools-class) or message the facilitator directly.
