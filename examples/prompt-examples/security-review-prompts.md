# Claude Code Session Prompts

Use these inside a `claude` CLI session.

```
/init
After initialising:
1. Summarise what this project does in 3 sentences
2. List the 5 most important files
3. Identify any obvious issues I should fix first
```

```
/review "focus on security"
Check specifically for:
- Hardcoded credentials or API keys
- Missing input validation
- Functions with no error handling
- Inconsistent style vs rest of project
```

```
Add [feature description] to this project.
1. First identify which files need to be created or modified
2. Implement across all relevant files
3. Ensure existing tests still pass
4. Add a brief usage example
```

```
/compact

Continuing: we are adding [feature name].
Current status: [brief status].
Next step: [what to do next].
```

---

# Security Review Prompts

```
You are a senior application security engineer.

Review this [language] code for vulnerabilities. Check for:
- Injection attacks (SQL, XSS, command injection)
- Missing authentication or authorisation
- Hardcoded secrets
- Insecure dependencies
- Missing input validation

[paste code]

Rate each finding: Critical / High / Medium / Low.
Provide a fix for each.
```

```
Scan this code for hardcoded secrets, API keys, or credentials
that should be in environment variables.

[paste code]

List every instance: line number, what it is, how to remediate.
```

```
Review this HTML and JavaScript for XSS vulnerabilities.
Pay special attention to:
- innerHTML assignments
- User input inserted into the DOM
- eval() or Function() calls
- URL parameters in HTML

[paste code]
```

---

# Research Prompts

```
Compare [Tool A] vs [Tool B] for [use case].

Structure your answer as:
1. Brief summary of each
2. Comparison table (pros/cons)
3. Recommendation for a beginner student project
4. Any important caveats
```

```
Explain [technical concept] to an Indonesian university student
who knows basic [HTML/Python/etc] but no [backend/databases/etc].

Use a real-world analogy, then show a minimal code example.
```

```
I want to build [project description].

Constraints:
- Skill level: [beginner/intermediate]
- Budget: free tier only
- Timeline: [weekend project / 3 weeks]
- Must work on: [web / mobile / desktop]

Suggest the best tech stack and explain why each piece fits.
```
