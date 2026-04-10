# 📋 Padang AI Coding Tools Class — Cheat Sheet

> Quick reference for Git, VS Code, Cursor, Claude, and CodeRabbit

---

## 🔀 Most Useful Git Commands

| Command | What it does |
|---------|-------------|
| `git init` | Initialise a new local Git repository |
| `git clone <url>` | Clone a remote repository to your machine |
| `git status` | Show changed files and staging status |
| `git add .` | Stage all changed files for commit |
| `git add <file>` | Stage a specific file |
| `git commit -m "message"` | Commit staged changes with a message |
| `git push` | Push local commits to remote (origin) |
| `git pull` | Fetch and merge remote changes |
| `git checkout -b <branch>` | Create and switch to a new branch |
| `git checkout <branch>` | Switch to an existing branch |
| `git merge <branch>` | Merge a branch into the current branch |
| `git log --oneline` | Compact view of recent commit history |
| `git diff` | Show unstaged changes line-by-line |
| `git stash` | Temporarily save uncommitted changes |
| `git stash pop` | Restore the most recently stashed changes |
| `git remote -v` | Show configured remote URLs |
| `git reset --soft HEAD~1` | Undo last commit, keep changes staged |

---

## 💻 VS Code Keyboard Shortcuts

| Shortcut (Win/Linux) | Shortcut (Mac) | What it does |
|----------------------|----------------|-------------|
| `Ctrl+P` | `Cmd+P` | Quick open — fuzzy-find any file |
| `Ctrl+Shift+P` | `Cmd+Shift+P` | Command palette — run any VS Code command |
| `Ctrl+`` ` | `Ctrl+`` ` | Toggle integrated terminal |
| `Ctrl+/` | `Cmd+/` | Toggle line comment |
| `Ctrl+D` | `Cmd+D` | Select next occurrence of current selection |
| `Alt+Up/Down` | `Option+Up/Down` | Move line up or down |
| `Shift+Alt+Down` | `Shift+Option+Down` | Duplicate current line downward |
| `Ctrl+B` | `Cmd+B` | Toggle sidebar visibility |
| `Ctrl+Shift+E` | `Cmd+Shift+E` | Open Explorer panel |
| `Ctrl+Shift+G` | `Ctrl+Shift+G` | Open Source Control (Git) panel |
| `Ctrl+Shift+X` | `Cmd+Shift+X` | Open Extensions panel |
| `F2` | `F2` | Rename symbol (refactor rename) |
| `Ctrl+Space` | `Ctrl+Space` | Trigger IntelliSense / autocomplete |
| `Ctrl+Z` | `Cmd+Z` | Undo |
| `Ctrl+Shift+Z` | `Cmd+Shift+Z` | Redo |

---

## 🤖 Cursor AI Shortcuts

| Shortcut (Win/Linux) | Shortcut (Mac) | What it does |
|----------------------|----------------|-------------|
| `Ctrl+K` | `Cmd+K` | Inline AI edit — describe a change to selected code |
| `Ctrl+L` | `Cmd+L` | Open AI chat panel (sidebar) |
| `Ctrl+Shift+L` | `Cmd+Shift+L` | Add selected code to chat context |
| `Tab` | `Tab` | Accept AI inline suggestion (Copilot-style) |
| `Ctrl+I` | `Cmd+I` | Open Composer — multi-file AI editing agent |
| `Escape` | `Escape` | Dismiss / reject current AI suggestion |
| `Ctrl+Enter` | `Cmd+Enter` | Submit prompt in chat or Composer |

---

## ✍️ Claude Prompt Structures

### Best Practice Template

```
[ROLE] You are a senior [language/framework] developer.

[CONTEXT] I am building [brief description of project].
The current file is [filename] and it does [what it currently does].

[TASK] Please [specific action — write / refactor / explain / debug].

[CONSTRAINTS]
- Keep it under [N] lines
- Use [ES6 / Python 3.11 / vanilla JS / etc.]
- Do not use any external libraries

[OUTPUT FORMAT] Return only the code, no explanation needed.
```

### Role Prompting

```
You are a [senior engineer / security auditor / code reviewer / tech writer].
Review the following code and [find bugs / check for security issues / 
simplify the logic / write documentation].
```

### Chain-of-Thought Prompting

```
Think step by step before answering.

1. First, explain what the current code does.
2. Then, identify potential problems.
3. Finally, suggest an improved version with your reasoning.
```

### Debugging Prompt

```
Here is my [language] code:

[paste code]

It produces this error:
[paste error message]

Expected behaviour: [describe what should happen]
Actual behaviour: [describe what is happening]

Please identify the root cause and provide a fix.
```

### Few-Shot Prompting (examples in the prompt)

```
Convert these function names from snake_case to camelCase:

Input: get_user_by_id → Output: getUserById
Input: send_email_notification → Output: sendEmailNotification
Input: calculate_total_price → Output: [your turn]
```

---

## 🐇 CodeRabbit PR Commands

Use these commands in PR comments to interact with CodeRabbit:

| Command | What it does |
|---------|-------------|
| `@coderabbitai review` | Trigger a fresh full review of the PR |
| `@coderabbitai summary` | Generate or refresh the PR summary |
| `@coderabbitai help` | Show available commands |
| `@coderabbitai ignore` | Suppress review for the current PR |
| `@coderabbitai pause` | Pause CodeRabbit on this PR temporarily |
| `@coderabbitai resume` | Resume CodeRabbit after a pause |
| `@coderabbitai resolve` | Mark all current comments as resolved |
| `@coderabbitai full review` | Deep-dive review including summary, walkthrough, and all changed files |

---

## ⌨️ Claude Code Slash Commands

Run these inside a `claude` CLI session:

| Command | What it does |
|---------|-------------|
| `/init` | Analyse the current project and create a `CLAUDE.md` context file |
| `/help` | Show all available slash commands and usage |
| `/status` | Show current session state, context size, and loaded files |
| `/review` | Ask Claude to review recent changes or the full project |
| `/compact` | Summarise the conversation to free up context window space |
| `/clear` | Clear the current session history and start fresh |

---

*Padang AI Coding Tools Class · Telkom AI Space / IndigoSpace Padang · MIT License*
