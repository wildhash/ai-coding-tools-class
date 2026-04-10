# Security and AI Code Review
**Padang AI Coding Tools Class**

A practical security guide for developers using AI coding tools. Learn how to catch vulnerabilities before they become incidents, use AI-powered code review tools, and build secure habits from day one.

---

## Why Security Matters in AI-Assisted Development

### The AI Security Paradox

AI coding tools are extraordinarily productive — but they can also introduce security vulnerabilities at machine speed. When an AI writes 200 lines of code in seconds, you may commit those 200 lines without reading them carefully. This is how security issues enter production.

**Key risks unique to AI-assisted development:**
1. **Confident hallucination of secure APIs** — Claude or ChatGPT may use an API incorrectly in a way that looks correct
2. **Copy-paste contamination** — Insecure patterns from training data appear in AI suggestions
3. **Context blindness** — AI doesn't know that your app handles health data or financial transactions
4. **Speed over safety** — AI makes it easy to generate and deploy code without security review
5. **Secret leakage** — Students may paste real credentials into AI chat windows

### Secrets Accidentally Committed

Every week, thousands of API keys, passwords, and tokens are accidentally committed to GitHub repositories. Common scenarios:

- Hard-coding a database password while testing, forgetting to remove it
- Committing `.env` file that wasn't in `.gitignore`
- Pasting API key directly into a configuration file
- Logging credentials that appear in git history

**The consequences are real**: GitHub's secret scanning team finds and reports compromised AWS keys that have already been used to spin up $10,000+ worth of cloud resources by automated bots that scan GitHub in real time.

### Statistics on Developer Security Mistakes
- **68%** of developers have accidentally committed secrets at least once (GitGuardian survey)
- **84%** of vulnerabilities come from the application layer, not the infrastructure layer
- **60 seconds** — average time for a bots to find and exploit a committed API key on GitHub
- **OWASP Top 10** — the most common web vulnerabilities haven't fundamentally changed in a decade; AI generates all of them

---

## CodeRabbit — AI Code Review (Free for Public Repos)

**URL:** https://coderabbit.ai

### What CodeRabbit Does

CodeRabbit is an AI-powered code review bot that integrates directly with GitHub and GitLab. When you open a Pull Request, CodeRabbit automatically:

1. Reads the entire diff (changed code)
2. Understands the context of the change
3. Identifies potential bugs, security issues, and code quality problems
4. Posts inline comments on specific lines
5. Writes a summary of the entire PR
6. Suggests concrete fixes

It behaves like a senior developer who reviews every PR — for free on public repositories.

---

### Setup: Install CodeRabbit on Your GitHub Repo

**Step 1:** Go to https://coderabbit.ai

**Step 2:** Click **Install** and authorize the GitHub App

**Step 3:** Select which repositories to install it on (choose your class project repos)

**Step 4:** That's it. CodeRabbit will automatically review the next PR you open.

No code changes required. No configuration needed to start.

---

### How to Read a CodeRabbit Review

When CodeRabbit reviews a PR, it posts:

**1. PR Summary (top-level comment)**
```
## Summary by CodeRabbit

### Changes
- Added user authentication with JWT tokens
- Created login and register API endpoints
- Added password hashing with bcrypt

### Security Findings
- ⚠️ JWT secret should not be hardcoded (line 15 in auth.js)
- ⚠️ Password reset token has no expiry time
```

**2. Inline Comments (on specific lines)**
```diff
+ const JWT_SECRET = "mysupersecretkey123";
```
> 🔴 **Security Issue**: JWT secret is hardcoded. This will be exposed if the
> file is committed to a public repository. Move to environment variable:
> `const JWT_SECRET = process.env.JWT_SECRET;`

**3. Overall Assessment**
```
✅ Code is generally well-structured
⚠️ 2 security issues found that should be addressed before merging
💡 3 style suggestions that are optional but recommended
```

**Reading Priority:**
- 🔴 Red / Error — Must fix before merging
- 🟡 Yellow / Warning — Should fix, explains why
- 💡 Blue / Suggestion — Optional improvement

---

### CodeRabbit Comment Commands

You can interact with CodeRabbit by replying to its comments in the PR:

| Command | What It Does |
|---------|-------------|
| `@coderabbitai review` | Trigger a full review of the PR |
| `@coderabbitai summary` | Get a plain-English summary of all issues |
| `@coderabbitai help` | Show all available commands |
| `@coderabbitai resolve` | Mark a finding as resolved |
| `@coderabbitai ignore` | Ask CodeRabbit to ignore a specific issue |
| `@coderabbitai explain` | Get a detailed explanation of a finding |
| `@coderabbitai fix` | Ask for a suggested fix for a specific issue |

**Example usage in PR comment:**
```
@coderabbitai review
Please focus on SQL injection vulnerabilities and authentication bypass risks.
Ignore any style suggestions.
```

---

### .coderabbit.yaml Configuration

Customize CodeRabbit behavior by adding `.coderabbit.yaml` to your repository root:

```yaml
# .coderabbit.yaml
language: "en-US"

reviews:
  # How thorough the review should be
  profile: "assertive"  # options: chill, assertive

  # What to review
  request_changes_workflow: true
  high_level_summary: true
  poem: false  # disable the fun poem in summaries

  # Focus areas
  review_status: true

  # Auto-review settings
  auto_review:
    enabled: true
    drafts: false  # don't review draft PRs
    base_branches:
      - "main"
      - "develop"

# Path-specific settings
path_filters:
  ignore:
    - "**/*.test.js"    # Don't review test files
    - "**/*.min.js"     # Don't review minified files
    - "node_modules/**" # Never review dependencies

# Custom instructions
instructions:
  - "This is a student project for a university class in Indonesia."
  - "Focus on teaching moments — explain why something is wrong, not just that it is."
  - "Flag any hardcoded credentials or API keys as critical."
  - "Check for missing input validation on all user inputs."
```

---

### Example CodeRabbit Review Output

**Scenario:** Student submits a PR adding a user login feature.

```
## 🤖 CodeRabbit Review

### PR Summary
This PR adds user authentication to the Flask application, including
login and registration endpoints. While the overall structure is good,
there are several security issues that need to be addressed.

---

**File: src/auth.py, Line 12**
```python
DB_PASSWORD = "student123"
```
🔴 **Critical: Hardcoded Credential**
Database password is hardcoded directly in source code. If this repository
is public, this credential is now compromised.
**Fix:** Use environment variable: `DB_PASSWORD = os.environ.get('DB_PASSWORD')`

---

**File: src/auth.py, Line 45**
```python
query = f"SELECT * FROM users WHERE username = '{username}'"
```
🔴 **Critical: SQL Injection Vulnerability**
User input is directly interpolated into SQL query. An attacker can
bypass authentication with username: `admin' OR '1'='1`
**Fix:** Use parameterized query:
```python
query = "SELECT * FROM users WHERE username = ?"
cursor.execute(query, (username,))
```

---

**File: src/auth.py, Line 78**
```python
if user['password'] == password:
```
🔴 **Critical: Plaintext Password Comparison**
Passwords must never be stored or compared in plaintext. Use bcrypt.
**Fix:**
```python
if bcrypt.checkpw(password.encode(), user['password_hash']):
```

---
**Overall: 3 critical issues. Recommend not merging until fixed.**
```

---

### Best Practices for Class Use

1. **Install CodeRabbit on your class project repository on Day 1** — it catches issues before the instructor sees them
2. **Read every CodeRabbit comment** — don't just dismiss them
3. **Ask for explanations**: `@coderabbitai explain` when you don't understand why something is flagged
4. **Fix critical issues before requesting instructor review** — it's a professional habit
5. **Use CodeRabbit feedback as learning material** — each finding is a mini security lesson

---

## GitHub Copilot Code Review

GitHub Copilot Chat (in VS Code) has slash commands specifically for code review:

### Slash Commands Reference

| Command | What It Does | Example |
|---------|-------------|---------|
| `/explain` | Explain selected code in plain English | Select function → `/explain` |
| `/fix` | Suggest a fix for selected problematic code | Select buggy code → `/fix` |
| `/review` | Full code review of selected code | Select file/function → `/review` |
| `/tests` | Generate unit tests for selected code | Select function → `/tests` |
| `/doc` | Generate documentation/comments | Select function → `/doc` |

### How to Trigger a Security Review

In VS Code with Copilot Chat open:

1. **Select the code** you want to review (or select all with `Ctrl+A`)
2. Open Copilot Chat (`Ctrl+Shift+I`)
3. Use the command:

```
/review
Focus on security vulnerabilities:
- SQL injection
- Authentication/authorization bypasses
- Input validation gaps
- Hardcoded credentials
- Insecure data handling
```

### Understanding Copilot Suggestions

Copilot suggestions (inline completions as you type) can contain:
- ✅ Correct, secure implementations of common patterns
- ⚠️ Outdated approaches that were valid years ago
- ❌ Insecure patterns copied from training data
- ❌ API usage that looks plausible but is wrong

**Rule:** Never accept a Copilot suggestion for security-sensitive code without reading it carefully and understanding it fully.

---

## Macroscope — Codebase Intelligence

**URL:** https://macroscope.io

### What Macroscope Does

Macroscope analyzes your entire codebase to provide high-level intelligence about code structure, complexity, and quality. While CodeRabbit reviews individual PRs, Macroscope looks at the whole picture.

### Best Use Cases

- **Onboarding**: Understanding a new or inherited codebase
- **Technical debt**: Identifying the most complex and risky files
- **Architecture review**: Visualizing how modules depend on each other
- **Hotspot detection**: Finding files that change frequently and have high complexity (high risk)
- **Team insights**: Understanding where work is concentrated

### How to Analyze a Repo

1. Go to https://macroscope.io
2. Connect your GitHub account
3. Select a repository to analyze
4. Macroscope will generate:
   - **Complexity heatmap**: Color-coded view of complex files
   - **Dependency graph**: How modules import each other
   - **Change frequency**: Files that change most often
   - **Risk score**: Combination of complexity + change frequency

### Interpreting Results

**High risk files** = high complexity + frequently changed
These are where bugs most likely hide. Prioritize code review and testing here.

**Circular dependencies** = Module A imports B imports A
These indicate architectural problems that make code hard to test and change.

**Isolated modules** = No dependencies or dependents
These might be dead code that can be safely removed.

---

## Additional Free Security Tools

### Semgrep — Static Analysis
**URL:** https://semgrep.dev

Semgrep scans code for security patterns without running it. It has hundreds of rules for detecting OWASP Top 10 vulnerabilities in Python, JavaScript, Java, and more.

```bash
# Install
pip install semgrep

# Scan your project for common vulnerabilities
semgrep --config=auto src/

# Scan for specific rule sets
semgrep --config=p/security-audit src/
semgrep --config=p/python src/
semgrep --config=p/javascript src/
```

**Free tier:** Free for open source. Community rules are free to use.

**Add to GitHub Actions:**
```yaml
- name: Semgrep Security Scan
  uses: semgrep/semgrep-action@v1
  with:
    config: p/security-audit
```

---

### GitGuardian — Secret Detection
**URL:** https://gitguardian.com

GitGuardian monitors your GitHub repositories in real time for accidentally committed secrets (API keys, passwords, tokens).

**Setup:**
1. Go to https://gitguardian.com
2. Connect your GitHub account
3. GitGuardian will notify you immediately when a secret is detected

**Also install the pre-commit hook** (`ggshield`) to catch secrets BEFORE they're committed:
```bash
pip install ggshield
ggshield secret scan pre-commit
```

**Free tier:** Free for up to 5 developers / unlimited public repos

---

### GitHub Secret Scanning — Built-In
GitHub automatically scans all public repositories for known secret patterns (AWS keys, GitHub tokens, Stripe keys, etc.).

**Enable on private repos:**
1. Repository Settings → Security → Code security and analysis
2. Enable "Secret scanning"
3. Enable "Push protection" — blocks pushes that contain secrets

**GitHub will notify you if:**
- A secret is pushed to your repo
- A previously committed secret is found by the scanner

**This is automatic and free** for all public repositories.

---

### GitHub Dependabot — Dependency Alerts
Dependabot watches your `package.json`, `requirements.txt`, `Gemfile`, etc. and alerts you when a dependency has a known vulnerability.

**Enable:**
1. Repository Settings → Security → Code security and analysis
2. Enable "Dependabot alerts"
3. Enable "Dependabot security updates" — auto-creates PRs to fix vulnerabilities

**Dependabot automatically creates pull requests like:**
```
Bump lodash from 4.17.15 to 4.17.21
Bumps lodash from 4.17.15 to 4.17.21.
CVE-2021-23337: Prototype Pollution in lodash
Severity: High
```

**Free for all repositories.**

---

### Snyk — Dependency and Code Security
**URL:** https://snyk.io

Snyk scans your code and dependencies for vulnerabilities, provides detailed remediation advice, and integrates with GitHub for automated PR checks.

```bash
# Install
npm install -g snyk

# Authenticate
snyk auth

# Test current project
snyk test

# Test continuously during development
snyk monitor
```

**Free tier:** Free for open source / up to 200 tests/month on free plan

---

## Security Best Practices for AI Coding Students

### Practice 1: Never Paste Real API Keys Into AI Models

When working with AI tools, use placeholder values:
```python
# ❌ NEVER do this in any AI chat window:
STRIPE_KEY = "sk_live_51ABC123realkey..."

# ✅ Use placeholders:
STRIPE_KEY = "sk_live_YOUR_KEY_HERE"
# Then explain: "replace sk_live_YOUR_KEY_HERE with a Stripe secret key"
```

**Why:** AI conversations may be used for training. Even if they aren't, leaking keys in demos or screenshots is a real risk.

---

### Practice 2: Always Use .env Files for Secrets

Create a `.env` file for environment-specific configuration:
```bash
# .env (NEVER commit this file)
DATABASE_URL=postgresql://user:password@localhost/mydb
JWT_SECRET=your-super-secret-key-here
STRIPE_KEY=sk_test_...
SENDGRID_API_KEY=SG....
```

Load it in Python:
```python
from dotenv import load_dotenv
import os

load_dotenv()
db_url = os.getenv('DATABASE_URL')
```

Load it in Node.js:
```javascript
require('dotenv').config();
const dbUrl = process.env.DATABASE_URL;
```

---

### Practice 3: Add .env to .gitignore BEFORE Creating .env

This order matters:

```bash
# Step 1: Create .gitignore FIRST and add .env to it
echo ".env" >> .gitignore
echo ".env.local" >> .gitignore
echo ".env.*.local" >> .gitignore
git add .gitignore
git commit -m "Add .gitignore with .env exclusions"

# Step 2: NOW create your .env file (it's already protected)
touch .env
echo "DATABASE_URL=postgresql://..." >> .env

# Step 3: Create .env.example as documentation (safe to commit)
touch .env.example
echo "DATABASE_URL=postgresql://user:password@host/dbname" >> .env.example
git add .env.example
git commit -m "Add .env.example with required variable names"
```

---

### Practice 4: Read Every Line of AI-Generated Code Before Committing

Establish a personal code review habit:
```bash
# Before every commit, review what you're about to commit:
git diff --staged

# For AI-generated files, review the entire file:
cat src/auth.py | less

# Use interactive staging to review chunk by chunk:
git add -p

# Ask yourself for each AI-generated block:
# 1. Do I understand what this code does?
# 2. Are user inputs validated?
# 3. Are there any hardcoded values that should be env vars?
# 4. Is this using the most current/secure API?
# 5. Could this code affect more than it's supposed to?
```

---

### Practice 5: Enable GitHub Secret Scanning on All Repos

```bash
# For new repos, do this immediately after creating:
# 1. Go to Settings → Security → Code security and analysis
# 2. Enable: Dependency graph
# 3. Enable: Dependabot alerts
# 4. Enable: Dependabot security updates
# 5. Enable: Secret scanning
# 6. Enable: Push protection (blocks secrets before they're committed)
```

---

### Practice 6: Use CodeRabbit on Every PR

Make it a team rule:
```markdown
# In your CONTRIBUTING.md:
## Code Review Requirements
1. All PRs must have CodeRabbit review before human review
2. All CodeRabbit "Critical" findings must be resolved before merge
3. CodeRabbit "Warning" findings must be acknowledged (resolved or explicitly dismissed)
```

---

### Practice 7: Check Dependencies Before Installing

Before `npm install <package>` or `pip install <package>`:

```bash
# Check npm package stats:
npx package-name-check some-package

# Check for known vulnerabilities:
npm audit  # after installing, check the audit

# For Python packages, check:
pip install safety
safety check

# Before installing, verify:
# - Package has recent commits (not abandoned)
# - Weekly downloads are reasonable (not suspiciously high/low)
# - GitHub repo exists and matches the npm/PyPI page
# - No open security issues in the GitHub issues
```

---

## "Oops I Committed a Secret" — Recovery Guide

If you accidentally committed a secret (API key, password, token), act fast. Bots scan GitHub in real time.

### Step 1: Immediately Rotate the Secret (Most Important!)
Go to the service that issued the secret and regenerate/rotate it NOW. Do this before anything else.
- AWS: IAM → Users → Security credentials → Delete key → Create new key
- GitHub: Settings → Developer settings → Personal access tokens → Delete
- Stripe: Dashboard → Developers → API keys → Roll secret key
- Any other service: Find "rotate", "regenerate", or "revoke" in their security settings

**Assume the old key is already compromised**, even if you just committed it 30 seconds ago.

### Step 2: Remove from Latest Commit (If Not Yet Pushed)
```bash
# If you haven't pushed yet:
git reset HEAD~1           # Undo the commit, keep files
# Edit the file to remove the secret
git add .
git commit -m "Remove accidentally added config (use env vars)"
```

### Step 3: Remove from History (If Already Pushed)

**Option A: BFG Repo Cleaner (Recommended — Easier)**
```bash
# Install BFG
brew install bfg  # Mac
# or download from https://rtyley.github.io/bfg-repo-cleaner/

# Create a file with the secret text you want removed
echo "sk_live_YOUR_ACTUAL_SECRET" > secrets.txt

# Run BFG
bfg --replace-text secrets.txt my-repo.git

# Force push all branches
cd my-repo
git reflog expire --expire=now --all
git gc --prune=now --aggressive
git push --force --all
git push --force --tags
```

**Option B: git filter-branch (Built-in but slower)**
```bash
git filter-branch --force --index-filter \
  'git rm --cached --ignore-unmatch config.py' \
  --prune-empty --tag-name-filter cat -- --all

git push origin --force --all
```

### Step 4: Notify Collaborators
Anyone who has cloned the repo needs to re-clone it — their local history still contains the secret:
```
The repository history was rewritten to remove an accidentally committed secret.
Please delete your local clone and re-clone:
  rm -rf my-project
  git clone https://github.com/org/my-project.git
```

### Step 5: Audit Usage of the Rotated Key
Check your cloud provider's logs for any suspicious activity using the old key during the window it was exposed.

### Step 6: Post-Incident — Prevent Recurrence
```bash
# Install pre-commit hooks to prevent future incidents:
pip install pre-commit detect-secrets

# Create .pre-commit-config.yaml:
cat > .pre-commit-config.yaml << 'EOF'
repos:
  - repo: https://github.com/Yelp/detect-secrets
    rev: v1.4.0
    hooks:
      - id: detect-secrets
        args: ['--baseline', '.secrets.baseline']
EOF

# Initialize
detect-secrets scan > .secrets.baseline
pre-commit install
```

---

## Security Checklist for Every Project

Before making a repository public or submitting for class:

### Repository Setup
- [ ] `.env` is in `.gitignore`
- [ ] `.env.example` exists with placeholder values
- [ ] No real API keys in any committed files
- [ ] GitHub Secret Scanning enabled
- [ ] Dependabot alerts enabled
- [ ] CodeRabbit installed on the repo

### Code Quality
- [ ] All user inputs are validated
- [ ] No SQL queries with string concatenation
- [ ] Passwords are hashed (never stored plaintext)
- [ ] Authentication required on protected routes
- [ ] Error messages don't expose internal details

### Dependencies
- [ ] `npm audit` or `pip check` run — no critical vulnerabilities
- [ ] Dependencies are pinned to specific versions
- [ ] No unnecessary packages installed

### Review
- [ ] Every AI-generated file has been read line-by-line
- [ ] CodeRabbit critical findings resolved
- [ ] At least one human has reviewed the PR

---

*Security is not a feature you add at the end — it's a habit you build from the beginning. Make these practices automatic, and you'll write more secure code whether you use AI tools or not.*
