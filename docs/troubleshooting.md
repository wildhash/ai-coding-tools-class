# Troubleshooting Guide — Padang AI Coding Tools Class

Use this guide when something isn't working. Issues are grouped by tool. If a fix isn't listed here, paste the full error message into Claude Web at [claude.ai](https://claude.ai) and ask for help.

---

## Git Issues

### Error: `git: command not found`
Git is not installed or not in your PATH.
- **Fix:** Install Git from [https://git-scm.com/downloads](https://git-scm.com/downloads).
- **Windows:** Re-run the Git installer and check "Add Git to PATH."
- **macOS:** Run `xcode-select --install` in Terminal.

### Error: `Permission denied (publickey)`
Your SSH key is not set up or not added to GitHub.
- **Fix option 1 (HTTPS):** Switch to HTTPS instead of SSH:
  ```bash
  git remote set-url origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
  ```
- **Fix option 2 (SSH):** Generate and add an SSH key:
  ```bash
  ssh-keygen -t ed25519 -C "your@email.com"
  cat ~/.ssh/id_ed25519.pub
  # Copy output → GitHub → Settings → SSH Keys → New SSH Key → Paste
  ```

### Error: `failed to push some refs` / `rejected`
Your local branch is behind the remote.
- **Fix:**
  ```bash
  git pull --rebase origin main
  # Resolve any conflicts, then:
  git push origin main
  ```

### Merge conflict markers in files (`<<<<<<<`, `=======`, `>>>>>>>`)
- **Fix:**
  1. Open the conflicted file in VS Code.
  2. VS Code highlights conflict zones with "Accept Current Change / Accept Incoming Change" buttons — use those.
  3. Or manually edit the file to keep the code you want, then delete the conflict markers.
  4. After resolving: `git add <file>` then `git commit`.

### `git push` asks for username/password repeatedly
GitHub no longer accepts passwords for git operations. Use a Personal Access Token (PAT) or SSH.
- **Fix (PAT):**
  1. GitHub → Settings → Developer Settings → Personal Access Tokens → Generate new token (classic).
  2. Select `repo` scope. Copy the token.
  3. Use the token as your password when git prompts.
  4. To cache it: `git config --global credential.helper store`

### `git config` — who am I?
If git asks for your identity before a commit:
```bash
git config --global user.email "you@example.com"
git config --global user.name "Your Name"
```

---

## VS Code Issues

### Extensions not loading / VS Code extensions panel is blank
- **Fix:** Restart VS Code. If that doesn't work: `Ctrl+Shift+P` → "Developer: Reload Window".
- If still broken, check your internet connection — extensions download from the Marketplace.

### Terminal not opening in VS Code
- **Fix:** `` Ctrl+` `` (backtick) to toggle terminal. If nothing happens: View → Terminal.
- **Windows:** If PowerShell is blocked, change the default shell: `Ctrl+Shift+P` → "Terminal: Select Default Profile" → choose Git Bash or Command Prompt.

### `code .` command not recognized in terminal
- **macOS fix:** Open VS Code Command Palette (`Cmd+Shift+P`) → type "Shell Command: Install 'code' command in PATH" → run it.
- **Windows fix:** Reinstall VS Code and check "Add to PATH" during installation.

### VS Code is extremely slow
- Disable unused extensions: Extensions panel → right-click → Disable.
- Close large files or folders with many files.
- Increase memory: Help → Open Process Explorer to see what's consuming resources.

---

## Claude Code Issues

### `claude: command not found` after `npm install -g`
- **Check Node is installed:** `node --version` — if not found, install Node.js first.
- **Check npm global path is in PATH:**
  ```bash
  npm config get prefix
  # Add the bin folder from this path to your PATH
  ```
- **Quick workaround:** Use `npx @anthropic-ai/claude-code` instead of `claude`.

### `npm install -g @anthropic-ai/claude-code` fails with permission error
- **Linux/macOS fix:** Don't use `sudo` with npm. Instead, fix npm's global directory:
  ```bash
  mkdir ~/.npm-global
  npm config set prefix '~/.npm-global'
  echo 'export PATH=~/.npm-global/bin:$PATH' >> ~/.bashrc
  source ~/.bashrc
  npm install -g @anthropic-ai/claude-code
  ```
- **Windows fix:** Run Command Prompt as Administrator.

### Claude Code authentication error / login loop
- **Fix:** Run `claude logout` then `claude login` again.
- Check that your Claude account is active at [claude.ai](https://claude.ai).
- If behind a proxy: set `HTTPS_PROXY` environment variable.

### Claude Code stops mid-task / times out
- Large operations (editing many files) can time out. Break the task into smaller steps.
- Check your internet connection — Claude Code streams responses from Anthropic's servers.

---

## Cursor Issues

### AI completions not appearing
- Check that you're signed in: Cursor → Account → Sign In.
- Check your internet connection — Cursor's AI requires network access.
- Try toggling Copilot mode off and on: Cursor Settings → Features → Copilot.
- Restart Cursor.

### Cursor AI is very slow (>10 second completions)
- This usually means congestion on Cursor's API servers. Try again later.
- Switch to a faster model in Cursor Settings → Models (GPT-3.5 is faster than GPT-4).
- Reduce context: close unneeded files.

### Cursor says "out of fast requests"
Your free tier has run out of fast (GPT-4) requests for the month.
- **Fix:** Switch to slow mode (free, unlimited) or upgrade your Cursor plan.
- For this workshop, the Cursor demo is observational — you don't need your own fast requests.

### Can't import VS Code extensions into Cursor
- Cursor supports most VS Code extensions but not all.
- Manually install: Cursor Extensions panel → search by name.

---

## GitHub Pages Issues

### GitHub Pages shows "404 Not Found"

**Common causes and fixes:**

1. **Wrong file name:** Your page must be named `index.html` (lowercase, exact spelling).
   - Fix: Rename your file to `index.html` and push again.

2. **Wrong branch or folder:**
   - Go to repo → Settings → Pages.
   - Confirm "Source" is set to the branch containing your `index.html` (usually `main`).
   - Confirm "folder" is set to `/ (root)` unless your `index.html` is in a `docs/` subfolder.

3. **Build not finished yet:**
   - GitHub Pages deployments take 1–3 minutes. Wait, then hard-refresh (`Ctrl+Shift+R`).

4. **Repository is private:**
   - GitHub Pages for private repos requires a paid plan (GitHub Pro or Teams).
   - Fix: Make the repo public → Settings → Danger Zone → Change visibility → Public.

### GitHub Pages URL is working but shows old content
- GitHub CDN caches pages. Hard-refresh: `Ctrl+Shift+R` (Windows/Linux) or `Cmd+Shift+R` (macOS).
- Wait up to 5 minutes for CDN propagation.

### GitHub Actions deploy workflow failing
- Click on the failing workflow in the Actions tab to read the error log.
- Common issue: missing `index.html` in the expected location.

---

## CodeRabbit Issues

### CodeRabbit is not reviewing my PR

**Check these in order:**
1. **Is the repo public?** CodeRabbit's free tier only reviews public repositories.
2. **Is CodeRabbit installed?** Go to [coderabbit.ai](https://coderabbit.ai) → check your connected repos. If not installed, click "Add Repository."
3. **Did you open a Pull Request?** CodeRabbit reviews PRs, not direct pushes to main.
4. **Wait 1–2 minutes** — CodeRabbit reviews asynchronously. Check the PR for new comments.

### CodeRabbit review says "no significant changes"
- This is normal for very small PRs (e.g., fixing a typo). Add more changes and update the PR.

### Can't find CodeRabbit's comments
- Check the PR's "Conversation" tab, not just "Files Changed."
- CodeRabbit posts a summary comment as well as inline comments.

---

## General: "AI Says It Can't Help"

If Claude or Copilot refuses to answer or says it can't help with something coding-related, try these approaches:

1. **Rephrase the request:** Instead of "write me a hacker script," try "explain how input validation works."
2. **Add more context:** AI tools produce better results with more detail. Describe your goal, your tech stack, and what you've already tried.
3. **Break it into smaller steps:** Instead of asking for an entire app at once, ask for one function at a time.
4. **Use a different tool:** Some tools are more restrictive than others. Claude is generally good for coding questions; Cursor and Copilot focus on completions.
5. **Check your input:** Some tools stop responding if you paste very long inputs or binary data. Keep prompts focused.

---

## Windows-Specific Issues

### Git Bash vs. PowerShell vs. Command Prompt
- **Recommendation:** Use Git Bash for all terminal commands in this workshop — it behaves like a Linux terminal.
- To open Git Bash: right-click on any folder → "Open Git Bash here."

### `npm` or `node` not recognized after installation
- Close and reopen all terminal windows after installing Node.js.
- If still not found: Search "Environment Variables" in Windows Settings → Edit System Environment Variables → Path → Add the Node.js install directory (usually `C:\Program Files\nodejs\`).

### Line endings (CRLF vs LF) causing issues
- Run: `git config --global core.autocrlf true` — this converts line endings automatically on Windows.

### VS Code terminal shows `[×]` or blocked execution
- PowerShell may have execution policy restrictions.
- Fix: Open PowerShell as Administrator: `Set-ExecutionPolicy -ExecutionPolicy RemoteSigned`

---

## Mac-Specific Issues

### `xcrun: error: invalid active developer path`
- Xcode Command Line Tools need reinstalling.
- Fix: `xcode-select --install`

### `zsh: command not found: npm` after installation
- Node.js wasn't added to your shell's PATH.
- Fix: Add to `~/.zshrc`:
  ```bash
  export PATH="/usr/local/bin:$PATH"
  ```
  Then: `source ~/.zshrc`

### Permission denied when installing npm packages globally
- Never use `sudo npm install -g`. Instead, fix npm's prefix directory (see Claude Code section above).

### Cursor or Claude Desktop won't open — "unidentified developer"
- Right-click the app → Open → Open anyway (macOS Gatekeeper prompt).
- Or: System Settings → Privacy & Security → Open Anyway.

---

## Slow Internet / Offline Mode Tips

### Working with limited bandwidth
1. **Avoid large file transfers during demos** — pre-download any files you need.
2. **Use Claude mobile app** on cellular data if venue Wi-Fi is slow.
3. **Cache GitHub repos locally** before the workshop: `git clone` the workshop repo at home.
4. **Use VS Code offline** — most features work without internet; only extensions and sync need connectivity.

### Tools that work fully offline
- Git (local operations: commit, branch, merge — push/pull need network)
- VS Code (editor features; extensions need internet to install)
- Cursor (basic editing; AI completions need internet)

### Tools that require internet
- Claude Web, Claude Code, Claude Desktop (all require Anthropic API access)
- GitHub (push, pull, Pages, PR reviews)
- CodeRabbit (always requires GitHub connection)
- GitHub Copilot (requires GitHub API)

### Running a local LLM as offline fallback
If internet is completely unavailable, [Ollama](https://ollama.ai) + a local model (e.g., `llama3`) can substitute for Claude for basic code generation. This requires a capable laptop and ~4–8 GB of disk space for the model. Set this up before the workshop if you expect connectivity issues.
```bash
# Install Ollama (macOS/Linux)
curl -fsSL https://ollama.ai/install.sh | sh
ollama pull llama3
ollama run llama3
```
