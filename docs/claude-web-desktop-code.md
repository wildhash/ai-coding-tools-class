# Claude Web, Desktop, and Code — Complete Guide
**Padang AI Coding Tools Class**

Anthropic's Claude is available in three distinct forms, each with different capabilities and use cases. This guide covers all three in depth, plus the MCP Dispatch system that connects them.

**Hotlink:** https://claude.ai

---

# Part 1: Claude Web (claude.ai)

## Overview
Claude Web is the browser-based interface for Claude at https://claude.ai. It's the easiest way to start using Claude with no installation required. The free tier provides access to powerful Claude models with generous daily usage.

---

## Free Tier Details

| Feature | Free Tier | Pro ($20/month) |
|---------|-----------|-----------------|
| Claude 3.5 Sonnet | ✅ ~30 messages/day | ✅ Unlimited |
| Claude 3 Haiku | ✅ Faster, more available | ✅ Unlimited |
| Claude 3 Opus | ❌ Not available | ✅ Available |
| Context window | 200,000 tokens | 200,000 tokens |
| Projects | ✅ Limited | ✅ Full access |
| Artifacts | ✅ Available | ✅ Available |
| Extended Thinking | ✅ Limited | ✅ Full access |
| File uploads | ✅ Available | ✅ Available |
| Priority access | ❌ | ✅ |

### Models Available
- **Claude 3.5 Sonnet** — Best balance of speed and intelligence. Default model. Excellent for coding, analysis, and writing.
- **Claude 3 Haiku** — Faster and lighter. Great for quick questions and when Sonnet is at daily limit.
- **Claude 3 Opus** — Most powerful (Pro only). Best for complex reasoning, research, and the hardest coding challenges.

> **Daily Limit Note**: The free tier limit (~30 messages/day on Sonnet) resets every 24 hours. When you hit the limit, Haiku remains available, or you can return the next day.

---

## Chat Interface Basics

### Starting a Conversation
1. Go to https://claude.ai
2. Sign in (Google, email, or Apple)
3. Click **New Chat** or start typing in the input box
4. Press Enter or click the send button

### Interface Elements
- **Chat panel (left)**: History of all your conversations
- **Projects (left sidebar)**: Organized workspaces with persistent context
- **Message input (bottom)**: Where you type. Supports Markdown formatting
- **Artifacts panel (right)**: Where Claude renders code, documents, and components
- **Model selector**: Choose between Sonnet, Haiku, and (Pro) Opus
- **File upload button** (paperclip): Attach PDFs, images, code files

### Keyboard Shortcuts
- `Enter` — Send message
- `Shift+Enter` — New line in message
- `Ctrl+K` (or `Cmd+K`) — Search conversations
- `Esc` — Stop generation

---

## Projects Feature

Projects are persistent AI workspaces that maintain context across multiple conversations. Think of a Project as a specialized assistant you've trained for a specific purpose.

### Creating a Project
1. Click **Projects** in the left sidebar
2. Click **Create project**
3. Give it a name (e.g., "Python Homework Helper" or "My Web App")
4. Add a **Project description** — this is key context Claude always sees
5. Upload relevant files (code, documentation, requirements)
6. Start a conversation within the project

### What to Put in Project Instructions
```markdown
## Project: E-Commerce Website
**Stack**: React 18, TypeScript, Tailwind CSS, Node.js, PostgreSQL
**Code style**: Functional components only, no class components
**Naming**: camelCase for variables, PascalCase for components
**Always**: Include TypeScript types, write JSDoc comments for functions
**Never**: Use `any` type, use inline styles

The project is an online store for Indonesian batik products.
Target users are Indonesian consumers aged 20-40.
```

### Project Use Cases for Students
- **Subject-specific helper**: Create one project per course
- **Codebase assistant**: Upload your project files and get context-aware help
- **Study companion**: Upload textbooks/notes for Q&A
- **Coding style enforcer**: Tell Claude your team's style guide

---

## Artifacts

Artifacts are Claude's way of rendering content in a separate panel instead of inline in the chat. This allows you to interact with the content without it getting buried in the conversation.

### Types of Artifacts
| Type | What It Renders | Example Use |
|------|----------------|-------------|
| **Code** | Syntax-highlighted code block | Any code snippet |
| **Markdown** | Formatted document | README, reports |
| **HTML** | Rendered webpage | UI mockups |
| **SVG** | Vector graphics | Diagrams, icons |
| **React** | Live React component | Interactive UIs |
| **Mermaid** | Diagrams and flowcharts | Architecture diagrams |

### Working with Artifacts
- **Edit** — You can edit the artifact directly and ask Claude to update it
- **Copy** — Copy the raw content to clipboard
- **Download** — Save as a file
- **Iterate** — Say "Update the artifact to..." and Claude modifies it in place

### React Artifacts — The Most Powerful Feature
Claude can render fully interactive React components live in the browser. Try this:

```
Create a React component that is an interactive quiz. It should have:
- 5 questions about Python basics
- Multiple choice answers
- Show correct/wrong feedback
- Display final score at the end
Use Tailwind CSS for styling with an Indonesian student-friendly design.
```

---

## Extended Thinking Mode

Extended thinking allows Claude to "think out loud" — working through a problem step by step before giving its final answer. This significantly improves performance on hard problems.

### When to Use Extended Thinking
- Complex algorithms or data structures problems
- Multi-step math proofs
- Hard debugging scenarios where the bug is non-obvious
- Architecture decisions with multiple trade-offs
- Any problem where you've tried normal prompting and gotten mediocre results

### How to Enable
Click the **thinking** or **extended thinking** toggle (if available in the interface) before sending your message, or include in your prompt:

```
Think through this carefully before answering. Use extended reasoning.

[Your complex question here]
```

### Extended Thinking vs Normal Mode
- Normal: Claude responds directly, quickly
- Extended thinking: Claude shows its reasoning chain (in grey/italic) before the final answer
- The reasoning process itself is often valuable to read

---

## File Uploads and Document Analysis

Claude can read and analyze uploaded files in the conversation.

### Supported File Types
- **PDFs**: Academic papers, textbooks, reports
- **Images**: Screenshots, UI mockups, diagrams (vision)
- **Code files**: .py, .js, .ts, .html, .css, etc.
- **Text files**: .txt, .md, .csv
- **Word documents**: .docx

### Practical Uses
```
[Upload: assignment.pdf]
I've uploaded my programming assignment. Please:
1. Summarize what I need to build
2. List the technical requirements
3. Suggest an architecture for the solution
4. Give me a starting code template
```

```
[Upload: screenshot.png of broken UI]
This is a screenshot of my React app. The layout looks broken on mobile.
Can you identify what CSS issues might cause this and suggest fixes?
```

---

## Best Prompting Patterns for Claude

### 1. The Context-First Pattern
Give Claude your role, context, and constraints before the task:
```
I am a second-year computer science student in Indonesia learning Django.
I'm building a final project: a library management system.
I'm comfortable with Python basics but new to web frameworks.

Please explain how Django's ORM works, using the concept of a library book
as the example. Keep the explanation at beginner level.
```

### 2. The Step-by-Step Pattern
Ask Claude to break down complex tasks:
```
Help me implement user authentication in my Flask app.
Walk me through it step by step:
1. First explain the architecture
2. Then give me each file to create in order
3. After each file, explain what it does
4. End with how to test it
```

### 3. The Critique Pattern
Ask Claude to critique before creating:
```
Before writing code for my API, critique this design:
- GET /api/users returns all users with passwords in the response
- POST /api/login accepts username/password as URL parameters
- User IDs are sequential integers starting from 1

What are the problems with this design? Then suggest a better design.
```

### 4. The Persona Pattern
Give Claude a specific role:
```
Act as a senior Python developer doing a code review. Be direct and
critical — don't soften feedback. Review this code and tell me exactly
what is wrong and how to fix it: [paste code]
```

### 5. The Iteration Pattern
Build complex outputs incrementally:
```
Turn 1: "Design the database schema for a student grade tracking app"
Turn 2: "Now create the Django models for this schema"
Turn 3: "Add the serializers for the REST API"
Turn 4: "Add validation to ensure grades are between 0-100"
Turn 5: "Write unit tests for the validation"
```

---

## Five Sample Prompts with Expected Outputs

### Sample 1: Code Generation
**Prompt:**
```
Write a Python function that reads a CSV file of student grades,
calculates letter grades (A=90+, B=80+, C=70+, D=60+, F=below 60),
and outputs a summary showing the count of each letter grade.
Include docstring and error handling.
```
**Expected Output:** A complete Python function with `csv` module import, type hints, docstring, try/except for file errors, and a `Counter` object or dictionary for the summary.

### Sample 2: Code Review
**Prompt:**
```
Review this JavaScript function for security issues:
function getUser(userId) {
    const query = "SELECT * FROM users WHERE id = " + userId;
    return db.execute(query);
}
What are the vulnerabilities and how do I fix them?
```
**Expected Output:** Identification of SQL injection vulnerability, explanation of parameterized queries, and rewritten function using `?` placeholders or prepared statements.

### Sample 3: Debugging
**Prompt:**
```
My React app throws: "Cannot read properties of undefined (reading 'map')"
on line: {userData.posts.map(post => <PostCard key={post.id} post={post} />)}

The userData comes from an API call. What's wrong and how do I fix it?
```
**Expected Output:** Explanation of async state initialization, solution using optional chaining (`userData?.posts?.map`), conditional rendering, and loading state pattern.

### Sample 4: Architecture Design
**Prompt:**
```
I'm building a mobile app for Indonesian street food vendors to manage
their menu and receive orders. Design the backend API architecture.
Consider: offline support, low-bandwidth environments, Indonesian payment
gateways (GoPay, OVO, DANA). Give me the API endpoint design and
database schema.
```
**Expected Output:** REST API endpoint list with methods and descriptions, PostgreSQL schema with tables for vendors, menus, orders, and payments, plus considerations for offline sync.

### Sample 5: Learning
**Prompt:**
```
Explain the difference between SQL and NoSQL databases using an analogy
that would make sense to an Indonesian university student.
Then tell me: for building a simple student attendance system,
which should I use and why?
```
**Expected Output:** A clear analogy (perhaps comparing SQL to a government form/spreadsheet and NoSQL to a WhatsApp message), followed by a practical recommendation (probably SQLite/PostgreSQL for the attendance system with justification).

---

# Part 2: Claude Desktop App

## Download and Installation

### Windows
1. Go to https://claude.ai/download
2. Click **Download for Windows**
3. Run the `.exe` installer
4. Launch Claude from Start Menu or Desktop shortcut
5. Sign in with your Anthropic account

### Mac
1. Go to https://claude.ai/download
2. Click **Download for Mac** (Apple Silicon or Intel)
3. Open the `.dmg` file
4. Drag Claude to Applications folder
5. Open Claude from Applications
6. Sign in with your Anthropic account

### Linux
As of this writing, Claude Desktop has official Windows and Mac versions. Linux users can use Claude Web at https://claude.ai or explore community-maintained options.

---

## What Is MCP (Model Context Protocol)?

MCP is an open standard created by Anthropic that allows Claude to connect to external tools and data sources in a standardized way. Think of MCP as a universal adapter that lets Claude "plug in" to your local computer, your GitHub account, your browser, databases, and more.

### Why MCP Matters
Without MCP:
```
You: "Review my code in /projects/myapp/src"
Claude: "I can't read your local files. Please paste the code here."
```

With MCP (filesystem server connected):
```
You: "Review my code in /projects/myapp/src"
Claude: [reads the files directly] "I can see 12 files. Here are the issues..."
```

### MCP Architecture
```
Claude Desktop
     │
     ├── MCP Server: filesystem  ── Your local files
     ├── MCP Server: github      ── GitHub API
     ├── MCP Server: puppeteer   ── Web browser control
     ├── MCP Server: postgres    ── Database
     └── MCP Server: slack       ── Slack messages
```

---

## Connecting MCP Servers

### MCP Configuration File Location
- **Mac**: `~/Library/Application Support/Claude/claude_desktop_config.json`
- **Windows**: `%APPDATA%\Claude\claude_desktop_config.json`

### MCP Server 1: Filesystem (Read/Write Local Files)

**Install the server:**
```bash
npm install -g @modelcontextprotocol/server-filesystem
```

**Add to `claude_desktop_config.json`:**
```json
{
  "mcpServers": {
    "filesystem": {
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-filesystem",
        "/Users/yourname/projects",
        "/Users/yourname/Documents"
      ]
    }
  }
}
```

**What you can do:**
- "Read the file ~/projects/myapp/src/index.js"
- "List all Python files in my projects folder"
- "Create a new file at ~/projects/myapp/README.md with this content: ..."
- "Edit the database config in ~/projects/myapp/config.py to use port 5433"

### MCP Server 2: GitHub

**Prerequisites:** GitHub Personal Access Token with repo scope

**Add to config:**
```json
{
  "mcpServers": {
    "github": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"],
      "env": {
        "GITHUB_PERSONAL_ACCESS_TOKEN": "ghp_yourtoken..."
      }
    }
  }
}
```

**What you can do:**
- "Show me all open issues in my repository myapp"
- "Create a new issue: 'Add dark mode support'"
- "List recent pull requests and their status"
- "Show me the diff for PR #42"

### MCP Server 3: Browser/Puppeteer

**Install:**
```bash
npm install -g @modelcontextprotocol/server-puppeteer
```

**Add to config:**
```json
{
  "mcpServers": {
    "puppeteer": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-puppeteer"]
    }
  }
}
```

**What you can do:**
- "Open my app at localhost:3000 and take a screenshot"
- "Navigate to this page and extract all the product prices"
- "Test my login form by filling in username and password"

---

## Local File Operations via Natural Language

Once the filesystem MCP server is connected, you can give Claude file commands in plain English:

```
Read my package.json and tell me which dependencies might have
security vulnerabilities I should update.
```

```
Look at all .js files in my src/ folder and find any that use
console.log in production code (outside of test files).
```

```
Create a .env.example file in my project root that lists all
environment variables used in my code, with placeholder values.
```

```
Move all my TODO comments from my Python files into a single
TODO.md file, organized by filename and line number.
```

---

## Practical Demo Script: Claude Desktop + MCP (5 Steps)

This demo assumes filesystem MCP is configured pointing at a Python project.

**Step 1 — Explore the project:**
```
List all files in my project and give me a high-level summary of
what this application does based on the file structure and README.
```

**Step 2 — Code review:**
```
Read main.py and identify any functions that are longer than 30 lines.
For each one, explain what it does and suggest how to refactor it.
```

**Step 3 — Find issues:**
```
Search through all Python files for any hardcoded passwords, API keys,
or connection strings. List the file and line number for each one.
```

**Step 4 — Fix an issue:**
```
In config.py, the database password is hardcoded as "admin123".
Update the file to use an environment variable called DB_PASSWORD instead,
and add a comment explaining how to set it.
```

**Step 5 — Generate documentation:**
```
Read all Python files in this project and generate a comprehensive
DEVELOPER.md file documenting: project structure, how to run locally,
environment variables needed, API endpoints, and database schema.
Save it to the project root.
```

---

## Differences from Claude Web

| Feature | Claude Web | Claude Desktop |
|---------|-----------|----------------|
| Access | Browser | Native app |
| File access | Upload only | Direct via MCP |
| Local integration | None | Full via MCP |
| Performance | Same | Same |
| Offline use | No | Limited |
| MCP servers | No | Yes |
| Keyboard shortcuts | Browser shortcuts | System shortcuts |

---

## Real Use Cases for Claude Desktop

1. **Code Archaeology**: "Read the entire codebase I inherited and explain what it does"
2. **Automated Refactoring**: "Find all functions using deprecated API and update them"
3. **Documentation Generation**: "Read all my code and write complete API documentation"
4. **Config Management**: "Find all hardcoded values across my project and move them to .env"
5. **Database Inspection**: "Connect to my local PostgreSQL and show me the schema"

---

## Student Exercise: Claude Desktop + Filesystem

**Prerequisites**: Claude Desktop installed, filesystem MCP configured

1. Point the filesystem MCP at your homework/project folder
2. Open Claude Desktop
3. Try these commands:
   - "List all my Python files and their sizes"
   - "Find the file with the most TODO comments"
   - "Create a progress tracker: read my assignment files and list what's done vs not done"
   - "Find any functions that have no docstrings"

---

# Part 3: Claude Code (Terminal Agent)

## What Is Claude Code?

Claude Code is a terminal-based AI agent that lives inside your project directory. Unlike chat interfaces where you describe changes and copy-paste them, Claude Code directly reads your codebase, writes files, runs commands, and iterates — all autonomously from your terminal.

It's the most powerful way to use Claude for software development, designed for developers who are comfortable in the terminal.

---

## Installation

**Prerequisites:**
- Node.js 18 or higher
- npm
- Anthropic API key (get one at https://console.anthropic.com)

```bash
# Install globally
npm install -g @anthropic-ai/claude-code

# Verify installation
claude --version
```

---

## Authentication

```bash
# Log in with your Anthropic API key
claude auth login

# You'll be prompted to enter your API key
# Or set it as an environment variable:
export ANTHROPIC_API_KEY="sk-ant-..."

# Add to your shell profile for persistence:
echo 'export ANTHROPIC_API_KEY="sk-ant-..."' >> ~/.bashrc
# or for Mac zsh:
echo 'export ANTHROPIC_API_KEY="sk-ant-..."' >> ~/.zshrc
```

---

## Running Claude Code

```bash
# Navigate to your project
cd ~/projects/my-web-app

# Start Claude Code
claude

# Or give an immediate task:
claude "Add input validation to all form fields in this React app"

# Or point at a specific file:
claude --file src/auth.py "Add rate limiting to the login function"
```

---

## Core Slash Commands

### `/init` — Initialize Project Context
Tells Claude Code to explore and understand your entire codebase before you give it tasks. **Always run this first in a new project.**

```
/init
```
Claude will read your file structure, key files, README, and package.json, then summarize what it learned. This dramatically improves task quality.

### `/help` — Show Available Commands
```
/help
```
Shows all available slash commands with descriptions. Run whenever you forget a command.

### `/status` — Show Current State
```
/status
```
Shows current context usage, which files are in context, and the current conversation state.

### `/review` — Request Code Review
```
/review
# or with focus:
/review "Focus on security vulnerabilities"
/review "Check for performance issues in database queries"
```
Claude reviews the current file or codebase in context and provides feedback.

### `/compact` — Compact Conversation
```
/compact
```
When a conversation gets long, `/compact` summarizes the conversation history to free up context window space while retaining the key information. Use this on long sessions.

### `/clear` — Clear Context
```
/clear
```
Clears the entire conversation context and starts fresh. Use when switching to a completely different task.

### Other Useful Commands
```
/add path/to/file.py    # Add a specific file to context
/diff                   # Show what changes have been made
/undo                   # Undo the last file change
/commit "message"       # Commit current changes with message
```

---

## Common Tasks with Examples

### Task 1: Add a Feature
```bash
cd ~/projects/flask-api
claude
> /init
> Add user profile picture upload functionality. Accept JPG and PNG
> files up to 5MB. Store in an 'uploads' directory. Add a route
> POST /api/users/{id}/avatar. Include validation and error handling.
```

### Task 2: Fix a Bug
```bash
> I have a bug: when users register with an email that already exists,
> the app crashes with a 500 error instead of showing a friendly message.
> Find the issue and fix it.
```

### Task 3: Write Tests
```bash
> Write comprehensive pytest tests for the UserService class.
> Achieve at least 90% line coverage. Use fixtures for database setup.
> Include happy path, edge cases, and error cases.
```

### Task 4: Refactor
```bash
> The src/utils.py file has grown to 800 lines with mixed concerns.
> Refactor it into separate modules: validators.py, formatters.py,
> and helpers.py. Update all imports throughout the project.
```

### Task 5: Security Audit
```bash
> /review "Security audit"
> Check this entire codebase for:
> 1. SQL injection vulnerabilities
> 2. Hardcoded credentials
> 3. Missing input validation
> 4. Insecure direct object references
> List all findings with file and line numbers.
```

---

## Claude Code vs Cursor vs GitHub Copilot Comparison

| Feature | Claude Code | Cursor | GitHub Copilot |
|---------|------------|--------|----------------|
| Interface | Terminal | IDE (VS Code-based) | VS Code extension |
| Codebase awareness | ✅ Full project | ✅ Full project | ✅ Open files |
| Multi-file edits | ✅ Autonomous | ✅ Composer/Agent | Limited |
| Runs commands | ✅ Yes | ✅ Agent mode | ❌ |
| Inline completions | ❌ | ✅ | ✅ |
| Git integration | ✅ Auto commits | Manual | Manual |
| Free tier | Pay-per-API-use | 2000/month | Free for students |
| Best for | Complex tasks, automation | Daily coding | Real-time completions |
| Learning curve | Medium | Low | Low |

---

## Free Tier and Costs

Claude Code uses the Anthropic API on a pay-per-use basis:
- New accounts may receive free credits
- Claude 3.5 Sonnet (default): ~$3 per million input tokens / $15 per million output tokens
- A typical coding session uses 10,000-50,000 tokens
- **Budget estimate**: $1-5 for a full day of active use
- For free alternatives: use Continue.dev with free Gemini API

---

## Demo Session Walkthrough (10 Steps)

This walkthrough demonstrates a complete feature implementation session.

```bash
# Setup
mkdir demo-app && cd demo-app
git init
echo '{"name":"demo","version":"1.0.0"}' > package.json
npm install express --save

# Start Claude Code
claude
```

```
Step 1:  /init
         [Claude explores the project structure]

Step 2:  Create a simple Express REST API for a to-do list app.
         Create the main server file with routes for CRUD operations.
         Use in-memory storage (array) for now.

Step 3:  [Claude creates server.js with all routes]

Step 4:  /review "Check for any issues with the API design"

Step 5:  Add input validation — todos need a non-empty title,
         and optional description. Return proper 400 errors.

Step 6:  [Claude adds validation middleware]

Step 7:  Write Jest tests for all the API endpoints.
         Test success and error cases.

Step 8:  [Claude creates tests/api.test.js and updates package.json]

Step 9:  /compact
         [Compact conversation as it's getting long]

Step 10: Create a README.md documenting the API endpoints,
         how to run the server, and how to run the tests.
         Then /commit "Initial to-do API with tests and docs"
```

---

## Safety Rule: Always Review AI Changes Before Committing

> ⚠️ **Golden Rule of Claude Code**: Always review every change Claude makes before committing it to Git.

AI agents are powerful but not infallible. Before every commit:

```bash
# See what Claude changed:
git diff

# Review specific files:
git diff src/auth.js

# If something looks wrong, undo it:
/undo
# or:
git checkout -- src/auth.js

# Only commit when you understand every change:
git add -p  # Interactive staging — review change by change
git commit -m "Your descriptive message"
```

**Why this matters:**
- Claude may make unintended changes to unrelated files
- Generated code can have subtle bugs
- Security issues may not be obvious at a glance
- You are responsible for the code in your repository, not the AI

---

# Part 4: Claude MCP Dispatch

## What "Dispatch" Means in MCP Context

In the context of Model Context Protocol, "dispatch" refers to routing a task from Claude to a specific MCP server (tool) based on what the task requires. When you give Claude a natural language instruction, it decides which MCP server(s) to "dispatch" the work to, executes the tool calls, and integrates the results.

**Example dispatch flow:**
```
You: "Look at my GitHub repo, clone it locally, fix the failing tests,
     and create a PR with the fix"

Claude dispatches to:
  1. github MCP  → list_issues, get_repository info
  2. filesystem MCP → read local code files
  3. github MCP  → create_pull_request
```

---

## Available Dispatch Targets

### Filesystem MCP
**Package:** `@modelcontextprotocol/server-filesystem`
**Capabilities:** Read files, write files, list directories, move/copy files
```json
"filesystem": {
  "command": "npx",
  "args": ["-y", "@modelcontextprotocol/server-filesystem", "/your/path"]
}
```

### GitHub MCP
**Package:** `@modelcontextprotocol/server-github`
**Capabilities:** Repos, issues, PRs, commits, file contents via API
```json
"github": {
  "command": "npx",
  "args": ["-y", "@modelcontextprotocol/server-github"],
  "env": { "GITHUB_PERSONAL_ACCESS_TOKEN": "ghp_..." }
}
```

### Browser/Puppeteer MCP
**Package:** `@modelcontextprotocol/server-puppeteer`
**Capabilities:** Navigate URLs, click elements, screenshot, extract content
```json
"puppeteer": {
  "command": "npx",
  "args": ["-y", "@modelcontextprotocol/server-puppeteer"]
}
```

### Slack MCP
**Package:** `@modelcontextprotocol/server-slack`
**Capabilities:** Read/send messages, list channels
```json
"slack": {
  "command": "npx",
  "args": ["-y", "@modelcontextprotocol/server-slack"],
  "env": {
    "SLACK_BOT_TOKEN": "xoxb-...",
    "SLACK_TEAM_ID": "T..."
  }
}
```

### PostgreSQL MCP
**Package:** `@modelcontextprotocol/server-postgres`
**Capabilities:** Query database, list tables, describe schema
```json
"postgres": {
  "command": "npx",
  "args": ["-y", "@modelcontextprotocol/server-postgres",
           "postgresql://localhost/mydb"]
}
```

---

## Building a Dispatch Workflow Example

**Scenario:** Automated morning code review routine

**Config** (all servers connected):
```json
{
  "mcpServers": {
    "filesystem": { ... },
    "github": { ... },
    "puppeteer": { ... }
  }
}
```

**Dispatch workflow prompt:**
```
Morning routine:
1. Check my GitHub notifications for any new PR review requests
2. For each PR, read the changed files in the filesystem MCP
3. Write a brief code review summary for each PR
4. Create a daily TODO list based on open issues assigned to me
5. Save the summary as ~/daily-standup-[date].md
```

Claude will automatically dispatch to:
- GitHub MCP for notifications and issues
- Filesystem MCP to read code files
- Filesystem MCP to write the summary file

---

## Security Considerations for MCP

### Principle of Least Privilege
Only grant MCP servers access to what they need:
```json
// ❌ Too broad:
"args": ["-y", "@modelcontextprotocol/server-filesystem", "/"]

// ✅ Better:
"args": ["-y", "@modelcontextprotocol/server-filesystem",
         "/Users/yourname/projects"]
```

### GitHub Token Scopes
Use minimal GitHub token scopes:
- Read-only access: `repo:read`, `issues:read`
- Don't use full `repo` scope unless write access is needed
- Create tokens at https://github.com/settings/tokens

### Review All File Operations
Before using the filesystem MCP for write operations:
- Understand what path is being written to
- Review the content before confirming
- Keep important files in Git so changes can be reverted

### API Key Storage
Never put API keys directly in the config file if it will be committed to Git:
```json
// ❌ Don't commit this:
"env": { "GITHUB_TOKEN": "ghp_actualSecretToken..." }

// ✅ Use environment variables instead:
"env": { "GITHUB_TOKEN": "${GITHUB_TOKEN}" }
// Then set: export GITHUB_TOKEN=ghp_... in your shell profile
```

### Audit MCP Server Code
Before installing any MCP server package, check:
- Is it from a trusted source (Anthropic official or well-known maintainer)?
- Does the npm package match the claimed repository?
- Are there open issues about security concerns?

---

## Student Exercise: Multi-Server MCP Dispatch

**Goal:** Set up two MCP servers and complete a task that requires both.

**Setup:**
1. Configure filesystem MCP pointing at your projects folder
2. Configure GitHub MCP with your Personal Access Token

**Exercise Task:**
```
1. List all my GitHub repositories created in the last 6 months
2. For each repo, check if there's a README.md in the filesystem
   (assuming they're cloned locally)
3. For repos without a README.md, create a basic one and tell me
   which repos still need documentation
```

**Expected Learning Outcomes:**
- Understanding of how MCP dispatch works
- Experience with multi-server Claude Desktop setup
- Practical use of filesystem + GitHub together

---

*Claude in all its forms — Web, Desktop, Code, and MCP — represents the most capable AI toolset available to developers today. Start with Claude Web, progress to Desktop with MCP, and level up to Claude Code as your comfort with terminal tools grows.*
