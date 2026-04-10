# AI Coding Tools Overview
**Padang AI Coding Tools Class**

A comprehensive reference for every tool covered in this workshop. Each entry includes what it is, best use cases, strengths, limitations, free tier details, a beginner tip, and a sample prompt.

---

## 1. ChatGPT
**URL:** https://chatgpt.com

### What It Is
ChatGPT is OpenAI's conversational AI assistant powered by GPT-4o. It handles a wide range of tasks from answering questions, writing code, debugging, explaining concepts, drafting documents, and much more. It is one of the most widely used AI tools in the world and is a great starting point for students new to AI-assisted development.

### Best Use Cases
- Quick code generation and debugging
- Explaining programming concepts in plain language
- Writing boilerplate code and documentation
- Brainstorming project ideas
- Translating code between languages (e.g., Python to JavaScript)

### Strengths
- Extremely versatile — handles code, writing, math, and general questions
- Strong at explaining concepts to beginners
- GPT-4o is fast and capable on the free tier
- Large community with many shared prompts and guides
- Supports image uploads (vision) for analyzing screenshots, diagrams, and UI mockups

### Limitations
- Context window is smaller than Claude's (128k vs 200k tokens)
- Free tier has daily message limits on GPT-4o
- May "hallucinate" (invent) library names or API signatures
- Does not have internet access by default (unless using Browse with Bing plugin)
- Code interpreter available but sandboxed

### Free Tier Details
- **GPT-4o**: Available on free tier with daily usage limits
- **GPT-4o mini**: Unlimited on free tier, faster and lighter
- **No credit card required** to sign up

### Beginner Tip
Always tell ChatGPT the language and framework you're using, your experience level, and what you've already tried. The more context you give, the more targeted and useful the response will be.

### Sample Prompt
```
I'm a beginner Python developer. I have a list of student names and scores:
students = [("Budi", 85), ("Siti", 92), ("Adi", 78)]
How do I sort this list by score from highest to lowest and print each student's rank?
Please explain each line of code.
```

---

## 2. Claude Web
**URL:** https://claude.ai

### What It Is
Claude Web is Anthropic's conversational AI interface accessible directly in your browser. It uses Claude models (Sonnet, Haiku, Opus) and is particularly well-suited for long-context work, nuanced writing, and complex reasoning. The Projects feature allows you to create persistent AI workspaces with custom instructions and shared context.

### Best Use Cases
- Long document analysis (up to 200,000 tokens — roughly 150,000 words)
- Complex reasoning tasks requiring extended thinking
- Building AI projects with persistent memory via Projects
- Code review and refactoring
- Writing technical documentation

### Strengths
- **200k context window** — the largest available on free/paid tiers
- Projects feature maintains context across conversations
- Artifacts: renders live code (React), SVG, documents in-panel
- Extended thinking mode for hard problems
- Excellent at following nuanced instructions

### Limitations
- Free tier has daily message limits (~30 messages/day on Sonnet)
- No internet browsing on free tier
- Claude Opus (most powerful) requires Pro subscription
- Slower than some competitors on complex tasks

### Free Tier Details
- **Claude 3.5 Sonnet**: Available free with daily limits
- **Claude 3 Haiku**: Faster, available free
- **Projects**: Available on free tier (limited)
- No credit card required to sign up

### Beginner Tip
Use the Projects feature to set up a persistent coding assistant. Add your project's tech stack, coding style preferences, and any relevant context once — Claude will remember it for every conversation in that project.

### Sample Prompt
```
I have a Django REST API project. Please review this view function and:
1. Identify any security vulnerabilities
2. Suggest performance improvements
3. Rewrite it following Django best practices

[paste your code here]
```

---

## 3. Claude Desktop
**URL:** https://claude.ai/download

### What It Is
Claude Desktop is a native application for Windows and Mac that brings Claude to your local machine. Its key feature is MCP (Model Context Protocol) integration, which allows Claude to interact directly with your local file system, development tools, browsers, and third-party services — effectively giving Claude "hands" on your computer.

### Best Use Cases
- Reading and writing local files via natural language
- Connecting to local databases and services
- Automating repetitive development tasks
- Running local MCP servers for custom integrations
- Working with large local codebases

### Strengths
- MCP integration enables real local file access
- Works offline for supported workflows
- Can connect to GitHub, browsers, databases via MCP servers
- No need to copy-paste files — Claude reads them directly
- Extensible via community MCP servers

### Limitations
- Requires desktop installation (not purely browser-based)
- MCP servers require configuration (JSON config files)
- Some MCP servers require Node.js or Python
- Same message limits as Claude Web free tier

### Free Tier Details
- Free to download and use
- Same model access as Claude Web (Sonnet, Haiku on free)
- MCP features available on all tiers

### Beginner Tip
Start with the filesystem MCP server. Configure it to point at your projects folder and you can say "Read my index.html and suggest improvements" — Claude will read the file directly without any copy-pasting.

### Sample Prompt
```
Read the file at ~/projects/my-app/src/App.js and identify any React hooks
that are not following the rules of hooks. Show me the specific lines.
```

---

## 4. Claude Code
**URL:** https://docs.anthropic.com/claude-code

### What It Is
Claude Code is a terminal-based AI coding agent by Anthropic. You install it as an npm package and run it inside any project directory. It can read your entire codebase, write and edit files, run commands, and complete multi-step development tasks autonomously — all from the command line.

### Best Use Cases
- Implementing features end-to-end in existing projects
- Debugging complex multi-file issues
- Refactoring large codebases
- Writing tests for existing code
- CI/CD automation scripting

### Strengths
- Understands your entire codebase in context
- Can run commands (tests, builds, linters) and iterate
- Works in any language or framework
- Terminal-native — perfect for developers who live in the CLI
- Supports custom slash commands

### Limitations
- Requires Node.js and npm
- Uses Anthropic API credits (not free for heavy use)
- Should always review changes before committing
- Learning curve for slash commands and workflow

### Free Tier Details
- Installation is free: `npm install -g @anthropic-ai/claude-code`
- Requires Anthropic API key (pay-per-use)
- Some free credits available with new Anthropic accounts

### Beginner Tip
Run `/init` first in every new project. This tells Claude Code to explore and understand your codebase structure before you give it tasks — dramatically improving the quality of its responses.

### Sample Prompt
```
/init
Add user authentication to this Express app. Use JWT tokens, add
a /login and /register route, protect all /api/* routes with auth
middleware, and write tests for the auth functions.
```

---

## 5. Cursor
**URL:** https://cursor.sh

### What It Is
Cursor is an AI-first code editor built on VS Code. It includes deep AI integration throughout the editing experience — inline completions, multi-file edits, an AI chat panel that understands your codebase, and an "Agent" mode that can autonomously complete tasks across your project.

### Best Use Cases
- Daily coding with AI inline suggestions
- Refactoring code across multiple files simultaneously
- Explaining and debugging code in context
- Generating boilerplate with full project awareness
- Pair programming with AI

### Strengths
- Built on VS Code — same extensions and keyboard shortcuts work
- Codebase-aware AI (not just the current file)
- Composer/Agent mode for multi-file task completion
- Cmd+K for inline edits in any file
- Works with any language and framework

### Limitations
- Free hobby plan has limits (2000 completions/month)
- Some advanced features require Pro ($20/month)
- Larger projects may hit context limits
- Requires internet connection for AI features

### Free Tier Details
- **Hobby plan**: 2000 code completions/month, limited chat uses
- **Pro**: $20/month for unlimited (student discount available)
- VS Code extensions are free

### Beginner Tip
Use `Cmd+K` (Mac) or `Ctrl+K` (Windows) to trigger inline AI edits. Select a block of code, press the shortcut, and type your instruction. It's faster than switching to the chat panel for simple edits.

### Sample Prompt
```
Composer: Create a full CRUD API for a "products" resource using Express and
Mongoose. Include routes, controller, model, validation middleware, and error
handling. Follow the existing project structure.
```

---

## 6. VS Code
**URL:** https://code.visualstudio.com

### What It Is
Visual Studio Code is a free, open-source code editor by Microsoft. It supports virtually every programming language through extensions, has built-in Git integration, a rich debugger, and an enormous marketplace of plugins — including GitHub Copilot, Continue.dev, and many other AI tools.

### Best Use Cases
- Writing code in any language
- Debugging applications
- Managing Git repositories
- Connecting to remote servers (SSH extension)
- Working inside containers (Dev Containers extension)

### Strengths
- Completely free and open source
- Runs on Windows, Mac, Linux, and even in browsers (github.dev)
- Massive extension marketplace (50,000+ extensions)
- Excellent built-in terminal
- Lightweight compared to full IDEs like IntelliJ

### Limitations
- Not AI-native out of the box (requires extensions)
- Can become slow with too many extensions
- Some advanced refactoring features require paid tools

### Free Tier Details
- **100% free**, no limits
- All core features are free
- Most extensions are free
- GitHub Copilot requires separate subscription (free for students)

### Beginner Tip
Install the "GitLens" extension to see inline Git blame, history, and comparisons. It makes understanding code history much easier, especially when working in a team.

### Sample Prompt (in Copilot Chat)
```
/explain
Select a complex function and ask:
"Explain this function step by step. What does it do, what are its inputs
and outputs, and what could go wrong?"
```

---

## 7. GitHub
**URL:** https://github.com

### What It Is
GitHub is the world's largest code hosting platform, built on Git. It provides repositories for storing code, Actions for CI/CD automation, Pages for hosting static websites, Issues and Projects for project management, and Copilot for AI-assisted development. It is the professional standard for software development collaboration.

### Best Use Cases
- Storing and versioning code (public or private)
- Collaborating with teammates via Pull Requests
- Automating tests and deployments with GitHub Actions
- Hosting portfolio websites with GitHub Pages
- Showcasing your work to employers and clients

### Strengths
- Free unlimited public and private repositories
- GitHub Actions CI/CD (2000 minutes/month free)
- GitHub Pages for free static site hosting
- Pull Request workflow is industry standard
- GitHub Student Developer Pack with huge free resources

### Limitations
- Git has a learning curve for beginners
- Private repo collaboration requires careful permission management
- GitHub Actions can be complex to configure
- Large file storage (LFS) has costs

### Free Tier Details
- **Unlimited public and private repos** (free)
- **GitHub Actions**: 2000 minutes/month free
- **GitHub Pages**: Free for public repos
- **GitHub Copilot**: Free for verified students and educators

### Beginner Tip
Add a good `README.md` to every repository. This is what people (and potential employers) see first. Use Markdown to add screenshots, installation instructions, and a project description.

### Sample Prompt
```
Help me write a professional README.md for my Python web scraper project.
It should include: project description, installation steps, usage examples,
requirements, and a contributing section. The project uses BeautifulSoup
and requests.
```

---

## 8. GitHub Copilot
**URL:** https://github.com/features/copilot

### What It Is
GitHub Copilot is an AI pair programmer developed by GitHub and OpenAI. It integrates into VS Code, JetBrains IDEs, and other editors to provide real-time code completions, a chat interface, slash commands, and code review capabilities. It understands your codebase context to generate relevant suggestions.

### Best Use Cases
- Autocompleting code as you type
- Generating functions from natural language comments
- Getting code reviews with `/review`
- Writing tests with `/tests`
- Explaining code with `/explain`

### Strengths
- Deep IDE integration — feels native in VS Code
- Chat panel understands your open files and workspace
- Slash commands for common tasks (/fix, /explain, /tests)
- Free for verified students and educators
- Supports 30+ programming languages

### Limitations
- Suggestions can be confidently wrong
- May suggest code with security vulnerabilities
- Context window has limits
- Quality varies significantly by language popularity

### Free Tier Details
- **Free for students**: Via GitHub Student Developer Pack
- **Free for educators**: Apply at github.com/education
- **Free tier**: Also available with limits (2000 completions/month as of 2024)

### Beginner Tip
Use natural language comments to guide Copilot. Write `# Function to validate email addresses using regex` on a new line and Copilot will generate the complete implementation. The more specific your comment, the better the output.

### Sample Prompt
```
/tests
Generate comprehensive unit tests for the UserService class. Include:
- Tests for successful cases
- Edge cases (empty input, invalid format)
- Error cases (database failures)
Use pytest with fixtures.
```

---

## 9. GitHub Codespaces
**URL:** https://github.com/features/codespaces

### What It Is
GitHub Codespaces is a cloud-based development environment that spins up a full VS Code instance in the browser (or connects to local VS Code via SSH). Each Codespace is a Docker container running on GitHub's servers, giving you a consistent development environment anywhere with a browser.

### Best Use Cases
- Working on projects from any device (including low-end laptops)
- Onboarding to a new project quickly (no local setup needed)
- Pair programming and live collaboration
- Running computationally expensive tasks in the cloud
- Demo environments for workshops and classes

### Strengths
- Full Linux development environment in the cloud
- Persistent storage — your environment survives browser closes
- Pre-built images for popular frameworks (Node, Python, Java, etc.)
- Devcontainer.json for reproducible environments
- Integrated with GitHub repos — one click to open any repo

### Limitations
- 60 hours/month free (2-core machine)
- Requires internet connection
- Slower than local development for some workflows
- Stops automatically after inactivity

### Free Tier Details
- **60 hours/month** on 2-core machines
- **15 GB storage** free
- Student Pack includes additional Codespaces hours

### Beginner Tip
Use Codespaces for workshop exercises where everyone needs the same environment. Create a `.devcontainer/devcontainer.json` in your repo to define exact versions of Node, Python, or other tools.

### Sample Prompt
```
Create a devcontainer.json configuration for a Node.js 20 + Python 3.11
project that automatically installs project dependencies, sets up ESLint,
and runs npm install on container creation.
```

---

## 10. Lovable
**URL:** https://lovable.dev

### What It Is
Lovable is an AI-powered full-stack application builder. You describe what you want to build in natural language and Lovable generates a complete React application with backend integration, database setup, and deployment — no coding required. It's designed to take a product idea from description to deployed application in minutes.

### Best Use Cases
- Building web app prototypes quickly
- Student projects and hackathons
- MVP (Minimum Viable Product) for startup ideas
- Learning React by seeing generated code
- Non-technical founders building their first product

### Strengths
- Full-stack generation (React + Supabase backend)
- Live preview as it builds
- One-click deployment
- Edit with natural language — "Make the button blue" works
- Generates readable, clean React code you can take elsewhere

### Limitations
- Complex custom logic may require manual coding
- Free tier has message limits
- Less control than building from scratch
- Generated code quality varies for complex features

### Free Tier Details
- **Free messages** to start (limited per month)
- Generated projects can be exported
- Deployment requires connecting your own hosting

### Beginner Tip
Start with a very specific description: "Build a task manager app with a list view, ability to add/complete/delete tasks, and local storage persistence using React and Tailwind CSS." Vague prompts produce vague apps.

### Sample Prompt
```
Build a student grade tracker web app. Students can be added with their name,
and grades can be entered for multiple subjects. Show an average grade per
student, color-coded (green ≥80, yellow ≥60, red <60). Include a summary
dashboard showing class average.
```

---

## 11. CodeRabbit
**URL:** https://coderabbit.ai

### What It Is
CodeRabbit is an AI-powered code review tool that integrates with GitHub and GitLab. When you open a Pull Request, CodeRabbit automatically reviews your code and posts detailed comments on potential bugs, security issues, performance problems, and style violations. It's like having a senior developer review every PR — for free on public repos.

### Best Use Cases
- Automated code review on every Pull Request
- Security vulnerability scanning
- Code quality enforcement in team projects
- Learning best practices from AI feedback
- Workshop projects where instructor review is limited

### Strengths
- Free for public repositories (no credit card)
- Integrates in minutes — no code changes needed
- Understands context across files
- Supports @coderabbitai commands in PR comments
- Customizable via `.coderabbit.yaml`

### Limitations
- Private repos require paid plan
- Can be verbose (many comments on large PRs)
- May flag style issues that are intentional choices
- Requires GitHub/GitLab integration

### Free Tier Details
- **100% free for public repositories**
- Private repos: Paid plan required
- Install directly from https://coderabbit.ai

### Beginner Tip
After CodeRabbit posts its review, reply `@coderabbitai help` to see what commands are available. Use `@coderabbitai summary` to get a quick plain-English summary of all issues found.

### Sample Prompt
```
@coderabbitai review
Please focus on security vulnerabilities and SQL injection risks in this
pull request. Also check if we're properly handling authentication errors.
```

---

## 12. Macroscope
**URL:** https://macroscope.io

### What It Is
Macroscope is a codebase intelligence tool that analyzes your entire repository to provide insights about code structure, dependencies, complexity hotspots, and architectural patterns. It helps developers understand large codebases quickly and identify areas that need attention.

### Best Use Cases
- Onboarding to a new (large) codebase
- Identifying complex or risky areas of a codebase
- Understanding dependency graphs
- Technical debt analysis
- Code quality reporting for teams

### Strengths
- Whole-codebase analysis vs. single-file tools
- Visual dependency graphs
- Complexity metrics that surface problematic areas
- Useful for both solo developers and teams

### Limitations
- Newer tool with evolving feature set
- Large codebases may take time to analyze
- Best for established projects rather than early prototypes

### Free Tier Details
- Check https://macroscope.io for current free tier details
- Public repository analysis may be available

### Beginner Tip
Use Macroscope when you join an existing project or inherit legacy code. Run an analysis first to understand which files are most complex and where changes are most likely to have wide impact.

### Sample Prompt
```
Analyze this repository and identify:
1. The top 5 most complex files
2. Files with the most dependencies (high coupling)
3. Any circular dependencies
4. Recommended refactoring priorities
```

---

## 13. Google AI Studio / Gemini
**URL:** https://aistudio.google.com

### What It Is
Google AI Studio is a free browser-based tool for working with Google's Gemini AI models. It allows you to experiment with Gemini 1.5 Pro (1M token context window), generate API keys for your own applications, run structured prompts, and build AI-powered apps — all with a generous free tier.

### Best Use Cases
- Getting a free Gemini API key for your projects
- Testing prompts before building applications
- Processing very long documents (up to 1M tokens)
- Video and audio analysis with Gemini Pro Vision
- Building AI-powered Python/JavaScript apps

### Strengths
- **Generous free API tier** (no credit card for development)
- 1 million token context window on Gemini 1.5 Pro
- Multimodal: handles text, images, video, audio, and code
- Great for building AI apps in Python and JavaScript
- Structured output (JSON mode) for API integrations

### Limitations
- Rate limits on free tier (requests per minute)
- Not as conversational as ChatGPT or Claude for chat use
- Gemini 1.5 Ultra requires billing setup

### Free Tier Details
- **Free API key** with 60 requests/minute on Gemini 1.5 Flash
- **15 requests/minute** on Gemini 1.5 Pro (free)
- No credit card required for development tier

### Beginner Tip
Use Google AI Studio to prototype your AI-powered app idea first. The Prompt Gallery has ready-made examples for summarization, code review, data extraction, and more that you can adapt for your project.

### Sample Prompt
```python
# Python example using the free Gemini API
import google.generativeai as genai

genai.configure(api_key="YOUR_API_KEY")
model = genai.GenerativeModel("gemini-1.5-flash")

response = model.generate_content(
    "Explain recursion to a 15-year-old using a real-world analogy"
)
print(response.text)
```

---

## 14. Aider
**URL:** https://aider.chat

### What It Is
Aider is an open-source AI coding assistant that runs in your terminal. It connects to AI models (OpenAI, Anthropic, Google, or local Ollama models) and can read, write, and edit files in your project while tracking all changes with Git. It's a community favorite for terminal-native developers.

### Best Use Cases
- Making code changes from the terminal
- Working with existing Git repositories
- Using with your own API key (cost-controlled)
- Running with local models (Ollama) for privacy
- Scripting repetitive code changes across files

### Strengths
- Open source — fully auditable
- Automatic Git commits for every change
- Supports many models (OpenAI, Claude, Gemini, local)
- `/add` files to include specific context
- Works great with `--model gpt-4o` or `--model claude-3-5-sonnet`

### Limitations
- Requires your own API key (you pay per token)
- Command-line only — no GUI
- Learning curve for flags and commands
- Setup more complex than browser tools

### Free Tier Details
- **Aider itself is free** (open source, pip install)
- API costs depend on the model you use
- Use with Gemini free API or local Ollama for zero cost

### Installation
```bash
pip install aider-chat
aider --model gemini/gemini-1.5-pro  # free with Google AI Studio key
```

### Beginner Tip
Start with `aider --model gemini/gemini-1.5-flash` using your free Google AI Studio API key — this gives you a powerful AI coding assistant at zero cost. Add files with `/add filename.py` before giving instructions.

### Sample Prompt
```
/add src/auth.py src/models/user.py
Add password hashing to the User model using bcrypt. Update the register
function to hash passwords before saving, and add a verify_password method.
```

---

## 15. Continue.dev
**URL:** https://continue.dev

### What It Is
Continue.dev is a free, open-source AI code assistant that works as a VS Code (and JetBrains) extension. Unlike GitHub Copilot, Continue is model-agnostic — you can connect it to any AI model including OpenAI, Anthropic, Google Gemini, or a local Ollama model. It's the best free alternative to Copilot for students.

### Best Use Cases
- Daily code completions (like Copilot but free)
- Using free/local models to keep costs at zero
- Chat interface inside VS Code
- Custom context inclusion from your codebase
- Privacy-conscious development (use local Ollama)

### Strengths
- **Completely free and open source**
- Connect to any model — including free tiers and local models
- Chat, completions, and inline edits
- Codebase context via `@codebase` command
- Active community and regular updates

### Limitations
- Model quality depends on what you connect it to
- Configuration required (connecting your API key)
- Not as polished as Copilot in some areas

### Free Tier Details
- **100% free** — open source
- Use with free Gemini API, Claude free tier, or local Ollama
- No subscription required

### Beginner Tip
Connect Continue.dev to the free Google Gemini API for zero-cost code completions. In Continue's config, set the model to `gemini-1.5-flash` and add your Google AI Studio API key. You get near-Copilot quality for free.

### Sample Prompt
```
@codebase
Find all functions in this project that make HTTP requests but don't
have error handling. List them by file and line number, then show me
how to add try/catch to the most critical one.
```

---

## 16. Windsurf
**URL:** https://codeium.com/windsurf

### What It Is
Windsurf is an AI-first IDE developed by Codeium. Like Cursor, it's built on VS Code and adds deep AI integration including "Cascade" — an AI agent that can execute multi-step coding tasks autonomously. Windsurf also includes Codeium's free unlimited code completions.

### Best Use Cases
- AI-assisted coding with free unlimited completions
- Using Cascade agent for complex multi-step tasks
- Students who want a Cursor alternative
- Teams wanting an AI IDE without per-seat costs

### Strengths
- Free tier includes unlimited code completions (via Codeium)
- Cascade agent for agentic task completion
- Built on VS Code — familiar interface
- Supports all VS Code extensions
- Good performance on common languages

### Limitations
- Newer product — some features still maturing
- Advanced Cascade features may require paid plan
- Smaller community than VS Code or Cursor

### Free Tier Details
- **Free**: Unlimited Codeium code completions
- **Pro**: $15/month for advanced AI models in Cascade
- Free tier is generous for students

### Beginner Tip
If you want Cursor-like features without the monthly cost, try Windsurf first. The free unlimited completions via Codeium make it an excellent daily driver for students on a budget.

### Sample Prompt
```
Cascade: I need to add dark mode support to this React app.
Update the theme configuration, add a toggle button to the header,
and persist the user's preference in localStorage.
```

---

## 17. Vercel
**URL:** https://vercel.com

### What It Is
Vercel is a cloud platform for deploying frontend applications and serverless functions. It's the creator of Next.js and provides the best Next.js hosting experience, but works equally well with React, Vue, Svelte, and other frameworks. With GitHub integration, every push to main automatically deploys your app.

### Best Use Cases
- Deploying React, Next.js, Vue, or Svelte apps
- Hosting portfolio websites and class projects
- Preview deployments for every Pull Request
- Serverless API routes (Edge Functions)
- Student projects that need a live URL

### Strengths
- **Zero-config deployments** — connect GitHub and it works
- Free hobby tier: unlimited personal projects
- Automatic HTTPS and custom domain support
- Preview deployments for every branch
- Built-in analytics, Edge Network (CDN)

### Limitations
- Commercial projects require paid plan
- Serverless functions have execution time limits
- Free tier has bandwidth limits
- Not for backend/database-heavy apps (use Railway or Render for that)

### Free Tier Details
- **Hobby tier: Free forever** for personal projects
- Unlimited deployments on Hobby
- 100GB bandwidth/month
- Serverless Function execution: 100GB-hours/month

### Beginner Tip
Connect your GitHub repo to Vercel on the first day of your project. This way you always have a live URL to share — every time you push to GitHub, Vercel deploys in under 60 seconds.

### Sample Prompt
```
Help me configure my Next.js app for optimal Vercel deployment:
1. Create a vercel.json with proper routing rules
2. Set up environment variables for production vs development
3. Configure image optimization settings
4. Add a build script that runs tests before deploying
```

---

## Quick Reference Table

| Tool | Type | Free Tier | Best For |
|------|------|-----------|----------|
| ChatGPT | AI Chat | GPT-4o (limited) | General coding questions |
| Claude Web | AI Chat | Sonnet (~30/day) | Long docs, complex reasoning |
| Claude Desktop | Desktop App | Same as Web | Local file integration |
| Claude Code | Terminal Agent | Pay-per-use API | Full project automation |
| Cursor | AI IDE | 2000 completions/mo | Daily AI coding |
| VS Code | Code Editor | Free | Everything |
| GitHub | Code Hosting | Unlimited repos | Version control, CI/CD |
| GitHub Copilot | AI Coding | Free for students | Inline completions |
| GitHub Codespaces | Cloud Dev | 60 hrs/month | Anywhere coding |
| Lovable | App Builder | Limited messages | Rapid prototyping |
| CodeRabbit | Code Review | Free for public repos | AI code review |
| Macroscope | Code Intel | Check website | Codebase analysis |
| Google AI Studio | AI API | Free API key | Building AI apps |
| Aider | Terminal AI | Free (bring API key) | Git-integrated coding |
| Continue.dev | VS Code Extension | 100% free | Free Copilot alternative |
| Windsurf | AI IDE | Unlimited completions | Budget AI IDE |
| Vercel | Deployment | Free hobby tier | Frontend deployment |

---

*Last updated for Padang AI Coding Tools Class. Tools evolve rapidly — always check official websites for current pricing and features.*
