# Example Pull Request Description Template

> Copy this template when opening a PR. Fill in the blanks. A good PR description makes CodeRabbit's review more targeted and makes human review faster.

---

## PR Title Format
```
type(scope): short description

Examples:
feat(auth): add JWT login endpoint
fix(api): handle missing email field gracefully
docs(readme): update installation steps
style(css): improve mobile navigation layout
test(auth): add unit tests for password hashing
```

---

## PR Description Template

```markdown
## Summary
<!-- 2–3 sentences: what does this PR do and why? -->
This PR adds user authentication to the Flask API. It implements JWT-based
login and registration endpoints with bcrypt password hashing.

## Changes
<!-- Bullet list of specific changes made -->
- Added `POST /api/auth/login` endpoint
- Added `POST /api/auth/register` endpoint
- Added `auth_middleware.py` for JWT verification
- Added `User` model with hashed password field
- Added unit tests in `tests/test_auth.py`

## How to Test
<!-- Steps a reviewer can follow to verify this works -->
1. Clone branch and run `pip install -r requirements.txt`
2. Start server: `python app.py`
3. Register: `curl -X POST http://localhost:5000/api/auth/register -d '{"email":"test@test.com","password":"Test1234!"}'`
4. Login: `curl -X POST http://localhost:5000/api/auth/login -d '{"email":"test@test.com","password":"Test1234!"}'`
5. Verify JWT token is returned on successful login

## Security Notes
<!-- Anything reviewers should pay attention to from a security angle -->
- Passwords are hashed with bcrypt (cost factor 12)
- JWT secrets are loaded from environment variable `JWT_SECRET`
- Tokens expire after 24 hours

## AI Assistance Disclosure
<!-- Good practice: disclose AI tool usage -->
Initial boilerplate generated with Claude Web. All code reviewed line-by-line
before committing. Tests written manually to verify behaviour.

## Related Issues
Closes #12 — Implement user authentication
Related to #8 — API security review
```

---

## What CodeRabbit Will Check

When you open this PR, CodeRabbit will automatically:

1. Post a summary of all changes with a plain-English walkthrough
2. Flag any hardcoded credentials (e.g. `JWT_SECRET = "hardcoded"`)
3. Check SQL queries for injection vulnerabilities
4. Review input validation on all endpoints
5. Suggest improvements to error handling
6. Check that password hashing is used correctly

## Responding to CodeRabbit

| Scenario | What to do |
|----------|-----------|
| You agree with the finding | Fix the code, push, reply "Fixed in latest commit" |
| You disagree | Reply with your reasoning: `@coderabbitai This is intentional because...` |
| You don't understand the finding | Reply: `@coderabbitai explain` |
| You want to suppress it | Reply: `@coderabbitai ignore` with a reason |
| You want a fresh review | Comment: `@coderabbitai review` |
