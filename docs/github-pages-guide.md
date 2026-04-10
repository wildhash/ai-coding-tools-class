# GitHub Pages Guide — Padang AI Coding Tools Class

A step-by-step guide to hosting a live website from your GitHub repository — for free.

---

## What Is GitHub Pages?

GitHub Pages is a free static website hosting service built into every GitHub repository. Push your HTML/CSS/JS files to GitHub and they become a live website at `https://yourusername.github.io/your-repo-name` within minutes. No server, no database, no cost.

---

## Option A: Deploy via GitHub Actions (Recommended for This Repo)

This repository uses GitHub Actions to automatically deploy the `/site` folder. Every push to `main` triggers a new deployment.

### One-Time Setup
1. Go to your repo on GitHub
2. Click **Settings** → **Pages** (left sidebar)
3. Under **Source**, select **GitHub Actions**
4. The workflow at `.github/workflows/pages.yml` handles the rest

### How It Works
```
You push to main
  → GitHub Actions runs pages.yml
  → Uploads the /site folder as a Pages artifact
  → Deploys to https://yourusername.github.io/repo-name
  → New URL is live in ~60 seconds
```

---

## Option B: Deploy a Simple HTML Repo Directly

For a new project that is just an `index.html`:

### Step 1 — Create a Repository
1. Go to https://github.com/new
2. Name it `my-project` (or any name)
3. Check **Add a README file**
4. Click **Create repository**

### Step 2 — Add Your Files
```bash
git clone https://github.com/yourusername/my-project.git
cd my-project
# Copy your index.html, style.css, script.js here
git add .
git commit -m "feat: add initial site files"
git push origin main
```

### Step 3 — Enable Pages
1. Repository → **Settings** → **Pages**
2. Source: **Deploy from a branch**
3. Branch: `main`, Folder: `/ (root)`
4. Click **Save**

### Step 4 — Get Your URL
Wait 1–3 minutes, then visit:
```
https://yourusername.github.io/my-project
```

GitHub shows the live URL at the top of the Pages settings page once deployment succeeds.

---

## Updating Your Site

Every push to the configured branch triggers a new deployment:
```bash
# Edit your files
nano index.html

# Commit and push
git add .
git commit -m "fix: update hero text"
git push origin main

# Wait ~60 seconds → site is updated live
```

---

## Custom Domain (Optional — Free with Student Pack)

If you have a domain from the GitHub Student Pack (free Namecheap `.me` domain):

1. Create a file called `CNAME` in your repo root containing just your domain:
   ```
   yourname.me
   ```
2. At Namecheap: DNS → Add CNAME record pointing to `yourusername.github.io`
3. In GitHub Pages settings: add your custom domain
4. Enable **Enforce HTTPS** (GitHub provides the certificate free)

---

## Troubleshooting

| Problem | Fix |
|---------|-----|
| 404 on the live URL | Check the file is named `index.html` (exact case) |
| Old content showing | Hard refresh: `Ctrl+Shift+R` / wait 5 min for CDN |
| Workflow failing | Check the Actions tab — red ✗ — click to read the error log |
| Private repo = 404 | GitHub Pages for private repos requires GitHub Pro (free with Student Pack) |
| Custom domain not working | DNS changes take up to 24 hours to propagate |
