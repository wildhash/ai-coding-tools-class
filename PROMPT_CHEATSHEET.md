# 🧠 Padang AI Coding Tools Class — Prompt Cheat Sheet

> Ready-to-use prompt templates. Fill in the `[___]` blanks for your use case.

---

## 🔨 Section 1: Coding Prompts

Use these when you want AI to write or generate code for you.

---

> **Build a component from scratch**
> ```
> You are an experienced [React / Vue / vanilla JS] developer.
> 
> Build a [component name, e.g. "responsive navigation bar"] that:
> - Has [feature 1, e.g. "a hamburger menu on mobile"]
> - Has [feature 2, e.g. "dropdown sub-menus on desktop"]
> - Uses [CSS framework or plain CSS]
> - Does NOT use any external JavaScript libraries
> 
> Return only the complete code. Add brief inline comments for clarity.
> ```

---

> **Convert code from one language to another**
> ```
> Convert the following [source language] code to [target language].
> Preserve the same logic and variable names where possible.
> Explain any significant differences in behaviour between the two versions.
> 
> [paste your code here]
> ```

---

> **Add a feature to existing code**
> ```
> Here is my existing [language] code for [what it currently does]:
> 
> [paste your code]
> 
> Please add [new feature description] to this code.
> Requirements:
> - [requirement 1]
> - [requirement 2]
> - Do not break existing functionality
> 
> Return the complete updated file.
> ```

---

> **Write a function with tests**
> ```
> Write a [language] function called [function name] that:
> - Takes [input parameters and types] as input
> - Returns [output type and description]
> - Handles edge cases: [list edge cases, e.g. empty input, null values]
> 
> Also write [N] unit tests using [testing framework, e.g. Jest / pytest / Vitest].
> ```

---

> **Refactor for readability**
> ```
> Refactor the following [language] code to improve readability and maintainability.
> - Use descriptive variable names
> - Extract repeated logic into helper functions
> - Add JSDoc / docstring comments to public functions
> - Do NOT change the external behaviour
> 
> [paste your code]
> ```

---

> **Create a complete HTML page from a description**
> ```
> Create a single complete HTML file for [page description, e.g. "a personal portfolio page"].
> 
> Requirements:
> - Responsive design (mobile-first)
> - Semantic HTML5 elements
> - CSS using [Tailwind CDN / plain CSS / CSS variables for theming]
> - Sections: [e.g. header, about, projects, contact]
> - A sticky navigation bar
> - No JavaScript frameworks — vanilla JS only
> 
> Return the complete file starting with <!DOCTYPE html>.
> ```

---

## 🐛 Section 2: Debugging Prompts

Use these when something is broken and you need help fixing it.

---

> **Fix a specific error message**
> ```
> I am getting this error in my [language/framework] project:
> 
> ERROR:
> [paste exact error message and stack trace]
> 
> Relevant code:
> [paste the relevant code section]
> 
> What is the root cause of this error? 
> Please provide a corrected version of the code and explain what was wrong.
> ```

---

> **Debug unexpected behaviour (no error message)**
> ```
> My [language] code is not behaving as expected. There is no error — it just produces wrong output.
> 
> Code:
> [paste your code]
> 
> Expected output: [describe what should happen]
> Actual output:   [describe what is happening instead]
> 
> Please walk through the code step by step, identify the logical error, 
> and provide a fix.
> ```

---

> **Debug a CSS layout problem**
> ```
> I have a CSS layout issue. My [element description] is [describe the problem, 
> e.g. "not centering vertically" / "overflowing its container" / "not responding on mobile"].
> 
> Here is my HTML:
> [paste HTML snippet]
> 
> Here is my CSS:
> [paste CSS snippet]
> 
> What is causing this layout issue? Provide the corrected CSS with an explanation.
> ```

---

> **Debug an async / Promise issue**
> ```
> My [JavaScript / TypeScript] async function is behaving unexpectedly:
> 
> [paste code with the async/await or Promise chain]
> 
> Problem: [describe — e.g. "it returns undefined", "it fires before the data loads"]
> 
> Please identify the async issue and rewrite the function correctly, 
> including proper error handling with try/catch.
> ```

---

> **Review code for hidden bugs**
> ```
> Please review this [language] code for potential bugs, edge cases, 
> and logic errors I may have missed:
> 
> [paste your code]
> 
> For each issue you find:
> 1. Describe the problem
> 2. Show the line(s) affected
> 3. Provide a corrected version
> ```

---

> **Explain a confusing error**
> ```
> I do not understand this error message. Please explain it in simple terms 
> and tell me the most common causes:
> 
> [paste error message]
> 
> I am using: [language + version, e.g. "Python 3.11" or "Node.js 20"]
> ```

---

## 🖥️ Section 3: Claude Code Session Prompts

Use these inside a `claude` CLI session (after running `/init`).

---

> **Initialise a new project**
> ```
> /init
> 
> After initialising, please:
> 1. Summarise what this project does
> 2. List the most important files I should be aware of
> 3. Identify any obvious issues or improvements I should address first
> ```

---

> **Review recent changes before committing**
> ```
> /review
> 
> Focus on:
> - Any security issues in the changed code
> - Functions that lack error handling
> - Inconsistent code style compared to the rest of the project
> - Missing or outdated comments
> ```

---

> **Multi-file feature implementation**
> ```
> I want to add [feature description] to this project.
> 
> Please:
> 1. Identify which files need to be created or modified
> 2. Implement the changes across all relevant files
> 3. Make sure nothing is broken in existing functionality
> 4. Add a brief test or usage example
> ```

---

> **Improve a specific file**
> ```
> Please read [filename] and improve it by:
> - [improvement 1, e.g. "adding input validation to all functions"]
> - [improvement 2, e.g. "extracting magic numbers into named constants"]
> - [improvement 3, e.g. "adding JSDoc comments to exported functions"]
> 
> Keep the same public API — do not change function signatures.
> ```

---

> **Compact and continue session**
> ```
> /compact
> 
> After compacting, let's continue working on [task description].
> Here is the current status: [brief status update]
> ```

---

> **Generate project documentation**
> ```
> Based on the current project files, generate a comprehensive README.md that includes:
> - Project name and description
> - Installation instructions
> - Usage examples with code snippets
> - Configuration options
> - Contributing guide link
> - License
> 
> Write it in a friendly, approachable tone suitable for beginners.
> ```

---

## 🔐 Section 4: Security Review Prompts

Use these to check your code for security vulnerabilities.

---

> **General security audit**
> ```
> You are a senior application security engineer.
> 
> Review the following [language] code for security vulnerabilities.
> Check specifically for:
> - Injection attacks (SQL, command, XSS, SSTI)
> - Insecure direct object references
> - Missing authentication or authorisation checks
> - Sensitive data exposure (hardcoded secrets, logging of PII)
> - Insecure dependencies or imports
> 
> [paste your code]
> 
> For each issue found, rate it as Critical / High / Medium / Low and suggest a fix.
> ```

---

> **Check for hardcoded secrets**
> ```
> Scan the following code for any hardcoded secrets, credentials, or sensitive values 
> that should instead be stored in environment variables.
> 
> [paste your code]
> 
> List every instance found, including the line, what it is, 
> and how to remediate it using environment variables.
> ```

---

> **Review HTML/JS for XSS**
> ```
> Review this HTML and JavaScript for Cross-Site Scripting (XSS) vulnerabilities.
> 
> Pay special attention to:
> - innerHTML assignments
> - User input that flows into the DOM without sanitisation
> - eval() or Function() calls
> - URL parameters inserted into HTML
> 
> [paste your HTML/JS code]
> ```

---

> **Review API endpoint for security**
> ```
> You are a security engineer reviewing a REST API.
> 
> Review this [framework, e.g. Express / FastAPI / Flask] endpoint for security issues:
> 
> [paste your endpoint code]
> 
> Check for: missing input validation, missing rate limiting, improper error messages 
> that leak stack traces, missing authentication middleware, and CORS misconfiguration.
> ```

---

> **Dependency vulnerability check prompt**
> ```
> Here is my [package.json / requirements.txt / go.mod]:
> 
> [paste dependency file]
> 
> Based on your knowledge, are any of these packages known to have 
> security vulnerabilities? List any concerns and recommend safe alternatives or 
> version upgrades where applicable.
> ```

---

## 🔬 Section 5: Research & Learning Prompts

Use these to learn about tools, concepts, or make decisions.

---

> **Explain a concept simply**
> ```
> Explain [technical concept, e.g. "JWT authentication"] to me as if I am a 
> complete beginner who knows basic HTML and CSS but no backend experience.
> 
> Use a simple real-world analogy and a short code example.
> ```

---

> **Compare two tools or approaches**
> ```
> Compare [Tool A / Approach A] vs [Tool B / Approach B] for [use case].
> 
> Please structure your answer as:
> 1. A brief summary of each
> 2. A comparison table (pros/cons)
> 3. Your recommendation for a beginner/student project
> 4. Any important caveats or gotchas
> ```

---

> **Summarise a documentation page**
> ```
> Here is the documentation for [library / API / tool]:
> 
> [paste documentation text]
> 
> Please give me:
> 1. A 3-sentence summary of what this does
> 2. The 5 most important things to know
> 3. A minimal working code example
> ```

---

> **Suggest a tech stack for a project**
> ```
> I want to build [project description].
> 
> My constraints:
> - Skill level: [beginner / intermediate]
> - Budget: [free tier only / small budget]
> - Timeline: [e.g. weekend project / 3-week sprint]
> - Must work on: [web / mobile / desktop / all]
> 
> Suggest the best tech stack and explain why each piece fits my requirements.
> ```

---

> **Help me choose between approaches**
> ```
> I am deciding how to implement [feature] in my [type of project].
> 
> Option A: [describe first approach]
> Option B: [describe second approach]
> Option C: [describe third approach, if applicable]
> 
> Factors I care about most: [e.g. simplicity, performance, maintainability, free tier]
> 
> Help me make the decision with reasoning. Be direct — give me a clear recommendation.
> ```

---

*Padang AI Coding Tools Class · Telkom AI Space / IndigoSpace Padang · MIT License*
