# Claude Code Session Prompts
**Padang AI Coding Tools Class — examples/prompt-examples/**

Ready-to-use prompts for `claude` CLI sessions. Start every session with `/init`.

---

## Starting a Session

```
/init

After exploring the project, tell me:
1. What this application does in one paragraph
2. The 5 most important files I should understand
3. Any obvious problems I should fix before adding new features
4. Which file I should edit to change [specific behaviour]
```

---

## Implementing a Feature

```
I want to add [feature name] to this project.

Feature requirements:
- [Requirement 1]
- [Requirement 2]
- [Requirement 3]

Before coding, tell me:
1. Which existing files need to change
2. Which new files need to be created
3. Any risks or breaking changes I should know about

Then implement the changes.
```

---

## Security Audit Session

```
/review "Security audit"

Check this entire codebase for:
1. Hardcoded credentials or API keys (any file, any format)
2. SQL queries built by string concatenation
3. Missing input validation on user-facing endpoints
4. Functions that log sensitive data
5. Dependencies with known CVEs (check package.json or requirements.txt)

For each finding: file name, line number, severity (Critical/High/Medium), fix.
```

---

## Writing Tests

```
Write comprehensive tests for [ClassName or function name] in [filename].

Test requirements:
- Use [pytest / Jest / Vitest] framework
- Cover: happy path, edge cases (empty input, null, max values), error cases
- Use fixtures or mocks for [database / API / filesystem]
- Aim for 90%+ line coverage on this file
- Add a docstring to each test explaining what it verifies
```

---

## Refactoring

```
The file [filename] has grown too large ([N] lines) with mixed concerns.

Refactor it into separate modules with clear single responsibilities.
Requirements:
- Do not change any public function signatures (no breaking changes)
- Update all imports throughout the project
- Add a brief comment at the top of each new file explaining its purpose
- Show me a summary of what moved where before making changes
```

---

## Generating Documentation

```
/compact

Generate a complete README.md for this project. Include:
- Project name and one-sentence description
- Tech stack (auto-detect from files)
- Prerequisites (Node version, Python version, etc.)
- Installation steps (numbered, copy-pasteable)
- Environment variables needed (read from code, list with descriptions)
- How to run locally
- How to run tests
- API endpoint reference (if applicable)
- Contributing guide (link to CONTRIBUTING.md)
- License

Tone: clear, welcoming, suitable for a junior developer reading for the first time.
```

---

## Fixing a Failing Test

```
This test is failing:

Test name: [paste test name]
Error output:
[paste full error]

The test file is [filename]. The implementation is in [filename].
I have NOT changed the test — the implementation is supposed to make it pass.

Find the bug in the implementation and fix it without changing the test.
```

---

## Pre-commit Review

```
/diff

Before I commit these changes, review them for:
1. Any debugging code left in (console.log, print, debugger)
2. TODO comments that should be resolved before merging
3. Functions that changed signature (potential breaking changes)
4. Missing error handling in new code paths
5. Anything that looks unfinished or placeholder-ish

Be specific: file name and line number for each finding.
```
