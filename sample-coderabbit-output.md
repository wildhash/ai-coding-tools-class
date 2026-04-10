# Example PR Description Template

Use this structure when opening Pull Requests on the class repo.

---

## Summary
Brief description of what this PR does (1–2 sentences).

## Changes
- Added `[feature/file]`
- Updated `[file]` to fix `[issue]`
- Removed `[deprecated thing]`

## How to Test
1. Open `index.html` in a browser
2. Click the `[button/feature]`
3. Expected: `[describe expected behaviour]`

## Screenshots
<!-- Attach a screenshot if the change is visual -->

## Checklist
- [ ] I read every line of AI-generated code before committing
- [ ] No API keys or secrets in the diff
- [ ] `.env` is in `.gitignore`
- [ ] Tested in Chrome and/or Firefox

---

# Sample CodeRabbit Review Output

This is what a real CodeRabbit review looks like on a PR. The intentional issues in `broken-demo.html` are: (1) hardcoded fake API key, (2) SQL injection via string concatenation, (3) passwords stored as plaintext.

---

## 🤖 CodeRabbit Summary

**Pull Request:** Add user login functionality  
**Files changed:** 2  
**Lines added:** 47 | **Lines removed:** 3

### Overview
This PR adds a login form and a server-side authentication check. While the overall structure is clear, there are **3 critical security issues** that must be resolved before this PR can be merged.

---

### 📄 File: `broken-demo.html`, Line 8

```js
const API_KEY = "sk-abc123realfakekey456";
```

🔴 **Critical: Hardcoded Credential**

An API key is hardcoded directly in the source file. If this repository is or becomes public, this credential is immediately compromised. Automated bots scan GitHub for secrets within seconds of a push.

**Fix:** Move to an environment variable:
```js
const API_KEY = process.env.API_KEY;
```
Then add `API_KEY=your_key_here` to your `.env` file, and confirm `.env` is listed in `.gitignore`.

---

### 📄 File: `broken-demo.html`, Line 23

```js
const query = "SELECT * FROM users WHERE username = '" + username + "'";
```

🔴 **Critical: SQL Injection Vulnerability**

User input (`username`) is directly concatenated into a SQL query string. An attacker can bypass authentication by entering a username like `admin' OR '1'='1`.

**Fix:** Use a parameterized query:
```js
const query = "SELECT * FROM users WHERE username = ?";
db.execute(query, [username]);
```

---

### 📄 File: `broken-demo.html`, Line 31

```js
if (user.password === enteredPassword) {
```

🔴 **Critical: Plaintext Password Comparison**

Passwords must never be stored or compared in plaintext. If the database is compromised, all user passwords are immediately exposed.

**Fix:** Hash passwords with bcrypt at registration and use `bcrypt.compare()` at login:
```js
const match = await bcrypt.compare(enteredPassword, user.passwordHash);
if (match) { /* authenticated */ }
```

---

**Overall: 3 critical issues found. This PR should not be merged until all three are resolved.**

To ask CodeRabbit a follow-up question, reply in the PR with: `@coderabbitai explain [the issue you want explained]`
