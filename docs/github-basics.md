# GitHub Basics
**Padang AI Coding Tools Class**

A complete beginner's guide to GitHub — from creating your first repository to collaborating with Pull Requests and hosting your projects online.

---

## What Is GitHub and Why Does It Matter?

GitHub is a cloud-based platform for hosting, sharing, and collaborating on code. It's built on top of **Git**, a version control system that tracks every change you make to your code. Think of it as Google Drive for code, but with superpowers: it remembers every version of every file, lets multiple people work on the same project without conflicts, and automates testing and deployment.

### Why GitHub Matters
- **Industry standard**: Nearly every software company uses GitHub or a similar platform (GitLab, Bitbucket)
- **Portfolio**: Your GitHub profile is your coding resume. Employers look at it
- **Collaboration**: Open-source projects on GitHub power the entire tech industry
- **Free hosting**: GitHub Pages hosts websites for free
- **Free automation**: GitHub Actions runs tests and deployments automatically
- **Student Pack**: Verified students get free access to tools worth thousands of dollars

### GitHub in Numbers
- 100+ million developers use GitHub
- 420+ million repositories exist on GitHub
- Most popular open-source projects (Linux, VS Code, React) are hosted on GitHub

---

## Key Concepts

### Repository (Repo)
A repository is a folder that contains your project files and the entire history of changes made to those files. Think of it as a folder with a time machine built in.

```
my-project/           ← This entire folder is a "repository"
├── index.html
├── style.css
├── script.js
└── README.md
```

### Branch
A branch is a parallel version of your repository. The main branch (called `main` or `master`) is your official, stable code. You create new branches to work on features without affecting the main code.

```
main ─────────────────────────────●
           └── feature/login ──●──┘  ← merged back
```

### Commit
A commit is a saved snapshot of your changes at a specific moment. Every commit has a unique ID (SHA hash), a message describing what changed, and records who made the change and when.

```bash
git commit -m "Add user login functionality"
# Creates a permanent snapshot with this description
```

### Pull Request (PR)
A Pull Request is a request to merge changes from one branch into another. It creates a discussion thread where teammates (or AI tools like CodeRabbit) can review and comment on the changes before they're merged.

### Fork
Forking creates your own copy of someone else's repository. You can make changes to your fork without affecting the original. This is how open-source contributions work.

### Clone
Cloning downloads a copy of a repository from GitHub to your local computer, including all branches, commits, and history.

```bash
git clone https://github.com/username/repository.git
```

---

## Creating Your First Repository (Step by Step)

### Step 1: Sign Up
Go to https://github.com and create a free account. Use your university email — you'll need it for the Student Developer Pack.

### Step 2: Create a New Repository
1. Click the **+** icon in the top right corner
2. Select **New repository**
3. Fill in:
   - **Repository name**: Use lowercase with hyphens (e.g., `my-first-project`)
   - **Description**: A short sentence about your project
   - **Visibility**: Public (recommended for students building a portfolio)
   - ✅ Check **Add a README file**
   - ✅ Add **.gitignore** — choose your language (Python, Node, etc.)
4. Click **Create repository**

### Step 3: Explore Your New Repo
You now have a repository with:
- `README.md` — displayed on the repo homepage
- `.gitignore` — tells Git which files to ignore
- A `main` branch — your default branch

---

## Basic Git Workflow: Clone → Edit → Stage → Commit → Push

This is the fundamental cycle you'll use every day as a developer.

```bash
# Step 1: Clone — download the repo to your computer
git clone https://github.com/yourusername/my-first-project.git
cd my-first-project

# Step 2: Edit — make changes to files using your code editor
# (open VS Code, Cursor, or any editor and edit files)

# Step 3: Check what changed
git status
# Shows modified, new, and deleted files

# Step 4: Stage — select which changes to include in the next commit
git add index.html          # Add a specific file
git add .                   # Add ALL changed files

# Step 5: Commit — save a snapshot with a description
git commit -m "Add navigation menu to homepage"

# Step 6: Push — upload your commits to GitHub
git push origin main
```

### The Golden Rule
**Commit often. Push regularly.** Small, frequent commits are easier to understand and easier to reverse if something goes wrong.

---

## GitHub Interface Tour

### Issues
Issues are GitHub's task tracker. Use them to:
- Report bugs
- Request features
- Track work items
- Discuss ideas

Every issue has a number (`#1`, `#2`, etc.) you can reference in commits: `git commit -m "Fix login bug (#42)"` — GitHub will link the commit to the issue.

### Actions
GitHub Actions is an automation platform. Create workflows in `.github/workflows/` to:
- Run tests automatically on every push
- Deploy to Vercel or other platforms
- Check code style (linting)
- Send notifications

**Example workflow file** (`.github/workflows/test.yml`):
```yaml
name: Run Tests
on: [push, pull_request]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
      - run: npm install
      - run: npm test
```

### Pages
GitHub Pages hosts static websites (HTML/CSS/JS) for free directly from your repository.

### Settings
Repository settings control:
- Branch protection rules
- Collaborator access
- GitHub Pages configuration
- Secrets (for API keys in Actions)
- Webhooks

---

## GitHub Pages: How to Enable and Deploy

GitHub Pages turns your repository into a live website — completely free.

### For Simple HTML Sites
1. Go to your repository on GitHub
2. Click **Settings** → **Pages** (in the left sidebar)
3. Under **Source**, select:
   - Branch: `main`
   - Folder: `/ (root)` or `/docs`
4. Click **Save**
5. Wait 1-2 minutes, then visit `https://yourusername.github.io/repository-name`

### For React/Vue/Next.js Apps
Use a GitHub Actions workflow to build and deploy:

```yaml
# .github/workflows/deploy.yml
name: Deploy to GitHub Pages
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
      - run: npm install && npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

### Tips for GitHub Pages
- Your `index.html` must be in the root or `/docs` folder
- Custom domains: add a `CNAME` file with your domain
- HTTPS is free and automatic
- Updates take 1-5 minutes to go live

---

## Pull Request Workflow

Pull Requests are the heart of collaborative development. Here's the complete workflow:

### Step 1: Create a Feature Branch
```bash
git checkout -b feature/add-contact-form
# Creates and switches to a new branch
```

### Step 2: Make Your Changes
```bash
# Edit files...
git add .
git commit -m "Add contact form with email validation"
git push origin feature/add-contact-form
```

### Step 3: Open a Pull Request on GitHub
1. Go to your repository on GitHub
2. GitHub will show a yellow banner: "Your branch was recently pushed. **Compare & pull request**"
3. Click **Compare & pull request**
4. Write a description explaining:
   - What you changed
   - Why you changed it
   - How to test the change
5. Click **Create pull request**

### Step 4: Review and Merge
- Teammates (or AI tools) leave review comments
- You respond to comments and push fixes
- Once approved, click **Merge pull request**
- Delete the feature branch (GitHub offers this button automatically)

### Step 5: Update Local Main Branch
```bash
git checkout main
git pull origin main  # Download the merged changes
```

---

## Git Commands Reference

### Setup and Configuration
```bash
git config --global user.name "Your Name"         # Set your name
git config --global user.email "you@email.com"    # Set your email
git config --global init.defaultBranch main        # Set default branch name
git config --list                                  # View all settings
```

### Repository Operations
```bash
git init                     # Initialize a new Git repo in current folder
git clone <url>              # Clone a remote repository
git remote -v                # Show remote repository URLs
git remote add origin <url>  # Connect local repo to GitHub
```

### Staging and Committing
```bash
git status                   # Show changed/staged/untracked files
git add <file>               # Stage a specific file
git add .                    # Stage ALL changes in current directory
git add -p                   # Interactively stage chunks (advanced)
git commit -m "message"      # Commit staged changes with message
git commit --amend           # Edit the last commit message
git reset HEAD <file>        # Unstage a file (keep changes)
```

### Branching
```bash
git branch                   # List all local branches
git branch -a                # List all branches including remote
git branch feature/name      # Create a new branch
git checkout main            # Switch to main branch
git checkout -b feature/name # Create and switch to new branch
git merge feature/name       # Merge a branch into current branch
git branch -d feature/name   # Delete a branch (safe — only if merged)
git branch -D feature/name   # Force delete a branch
```

### History and Inspection
```bash
git log                      # Show commit history
git log --oneline            # Show compact commit history
git log --oneline --graph    # Show branch graph
git diff                     # Show unstaged changes
git diff --staged            # Show staged changes
git show <commit-sha>        # Show changes in a specific commit
git blame <file>             # Show who changed each line
```

### Remote Synchronization
```bash
git fetch                    # Download changes (don't merge)
git pull                     # Fetch and merge changes from remote
git pull --rebase            # Fetch and rebase instead of merge
git push origin main         # Push to main branch on GitHub
git push -u origin feature   # Push new branch and track it
git push --force-with-lease  # Force push safely (use with caution)
```

### Undoing Changes
```bash
git restore <file>           # Discard changes in working directory
git restore --staged <file>  # Unstage a file
git revert <commit-sha>      # Create new commit that undoes a commit
git reset --hard HEAD~1      # Delete last commit (DANGEROUS — loses work)
git stash                    # Temporarily save changes
git stash pop                # Restore stashed changes
```

### Tags
```bash
git tag v1.0.0               # Create a lightweight tag
git tag -a v1.0.0 -m "..."  # Create an annotated tag
git push origin --tags       # Push tags to GitHub
```

---

## Common Git Mistakes and How to Fix Them

### "I committed to main instead of a branch"
```bash
# Create the branch retroactively
git branch feature/my-feature
git reset HEAD~1              # Remove commit from main (keeps changes)
git checkout feature/my-feature
git add .
git commit -m "Move to correct branch"
```

### "I accidentally deleted a file and committed"
```bash
git log --oneline             # Find the commit before deletion
git checkout <good-commit-sha> -- path/to/deleted-file.txt
git commit -m "Restore accidentally deleted file"
```

### "I committed my API key / password!"
```bash
# Immediately rotate the key at the service provider!
# Then remove it from history:
git filter-branch --force --index-filter \
  'git rm --cached --ignore-unmatch config.js' \
  --prune-empty --tag-name-filter cat -- --all
git push origin --force --all
# Better yet: use BFG Repo Cleaner (faster)
```
> ⚠️ **Prevention is better than cure**: Add `.env` to `.gitignore` BEFORE creating it.

### "My push was rejected (non-fast-forward)"
```bash
git pull --rebase origin main  # Rebase your work on top of remote
git push origin main           # Now push should work
```

### "I messed up a merge and want to abort"
```bash
git merge --abort              # Stop the merge, go back to before
```

### "I need to undo my last commit but keep the changes"
```bash
git reset --soft HEAD~1        # Undo commit, keep changes staged
git reset HEAD~1               # Undo commit, keep changes unstaged
```

---

## GitHub for Students: Free Resources

### GitHub Student Developer Pack
URL: https://education.github.com/pack

The Student Developer Pack gives verified students free access to professional developer tools including:
- **GitHub Copilot** — AI code completions (normally $10/month)
- **GitHub Codespaces** — extra hours
- **Namecheap** — free domain name
- **DigitalOcean** — $200 in cloud credits
- **JetBrains IDEs** — free for 1 year
- **Heroku** — platform credit
- **MongoDB Atlas** — cloud database credit
- **and 100+ more tools**

**How to Apply:**
1. Go to https://education.github.com/pack
2. Click **Get your pack**
3. Sign in with your GitHub account
4. Verify with your university email or student ID
5. Wait for approval (usually 1-3 days)

### GitHub Campus Expert Program
Advanced students can apply to become GitHub Campus Experts — student leaders who organize tech events on campus and get additional training and resources from GitHub.

---

## Tips for Indonesian Students

### 1. Use English for Commit Messages and README
Even if you're studying in Indonesia, use English for your code, commit messages, and documentation. Most employers and open-source projects use English, and it makes your work visible to the global community.

```bash
# ❌ Don't:
git commit -m "tambah fitur login pengguna"

# ✅ Do:
git commit -m "Add user login functionality"
```

### 2. Build a Portfolio on GitHub
Your GitHub profile IS your portfolio. Pin your 6 best repositories, add descriptions and topics, and keep contributing regularly. The "contribution graph" (green squares) shows your consistency.

### 3. Register with University Email
Always sign up for GitHub with your university email (e.g., `12345@student.universitaspadang.ac.id`). This unlocks the Student Developer Pack and GitHub Copilot for free.

### 4. Internet Speed Tips
If your internet is slow:
- Use `--depth 1` for cloning: `git clone --depth 1 <url>` (downloads only latest state)
- Use GitHub Codespaces — all operations happen in the cloud
- Configure Git credential caching: `git config credential.helper store`

### 5. Contribute to Open Source
Start contributing to Indonesian open-source projects or documentation. GitHub profile contributions from Indonesian developers are highly valued by local tech companies like Gojek, Tokopedia, and Bukalapak.

### 6. Join GitHub Indonesia Community
Follow Indonesian developers on GitHub and contribute to community repositories. Many Indonesian tech communities have open-source projects on GitHub.

### 7. GitHub Copilot Is Free For You
If you're a student, GitHub Copilot is **free**. Apply for the Student Developer Pack — this alone saves $120/year and dramatically improves your coding speed.

---

## Your First Week on GitHub — Checklist

- [ ] Create GitHub account with university email
- [ ] Apply for GitHub Student Developer Pack
- [ ] Create your first repository
- [ ] Clone it to your computer
- [ ] Make a commit and push it
- [ ] Enable GitHub Pages on a project
- [ ] Install GitHub Copilot (free with Student Pack)
- [ ] Star 5 repositories that interest you
- [ ] Follow 3 developers whose work you admire
- [ ] Create a profile README (special repo named after your username)

---

*Welcome to GitHub — now your code has a home on the internet. Start committing today!*
