# Prompts for Research — Padang AI Coding Tools Class

A practical guide to using AI tools for technical research, learning, and decision-making as a developer.

---

## Introduction

AI tools like Claude are powerful research assistants — but they require different habits than a Google search. A search engine gives you links; an AI gives you synthesized answers. That synthesis can be brilliant or completely wrong, depending on the quality of your question and how carefully you verify the answer.

This guide teaches you to use AI for technical research effectively: how to ask questions that produce useful, nuanced responses, and how to verify and apply what you learn without blindly trusting outputs that could be outdated or incorrect.

**The core principle:** Use AI to understand. Use primary sources to verify.

---

## 15+ Research Prompt Examples

### Comparing Technologies

**1. Framework comparison**
```
Compare Flask and FastAPI for building a REST API in Python. For each, cover:
- Learning curve for beginners
- Performance characteristics
- Built-in features (validation, async support, documentation)
- Community size and ecosystem
- Best use cases

Format your answer as a comparison table, then give a recommendation for a beginner
building their first API who wants to learn industry-relevant skills.
```

**2. Database comparison**
```
I need to choose a database for a small web app that tracks student attendance.
Compare SQLite, PostgreSQL, and MySQL for this use case:
- Ease of setup for a beginner
- Suitability for ~500 users
- Free hosting options
- Python library support

Which would you recommend and why?
```

**3. Comparing cloud hosting options**
```
Compare GitHub Pages, Netlify, Vercel, and Render for hosting a static website
(HTML, CSS, JavaScript only). For each:
- Free tier limits
- Custom domain support
- Deployment workflow (how you push updates)
- Any limitations I should know

I'm a student building a portfolio site with no budget.
```

---

### Learning a New Concept

**4. Explain a concept with an analogy**
```
Explain what a REST API is to someone who knows basic HTML but has never
built a backend. Use a real-world analogy, then show a concrete example
with Python and Flask.
```

**5. Break down unfamiliar terminology**
```
I'm reading about containerization and keep seeing terms I don't understand:
Docker, image, container, Dockerfile, docker-compose, registry, orchestration, Kubernetes.

Explain each term in plain language. Use a food-service analogy if it helps.
Then tell me which concepts a beginner should learn first and in what order.
```

**6. Understand a programming paradigm**
```
Explain object-oriented programming (OOP) to a Python beginner.
Cover: what a class is, what an object is, inheritance, and encapsulation.
Use a single consistent real-world example (like modeling a university)
throughout the entire explanation. Then show how it looks in Python code.
```

---

### Finding Best Practices

**7. Project structure best practices**
```
What is the recommended project structure for a production-ready Python web
application using FastAPI? Include:
- Where to put route handlers, models, configuration, tests
- How to handle environment variables
- How to structure for multiple developers working together
- What to include in .gitignore

Reference current (2024) community conventions.
```

**8. Security best practices for a beginner**
```
What are the top 10 security mistakes beginner web developers make?
For each mistake:
- Describe the vulnerability in plain language
- Show a bad code example and a fixed code example
- Rate severity (low/medium/high)
- Explain what an attacker could do if it's exploited

Focus on Python web applications. Prioritize the most common issues.
```

**9. Git workflow best practices**
```
What is the recommended Git branching and commit workflow for a solo developer
and for a small team (3-5 developers)? Cover:
- When to create branches
- How to name branches and commits
- When to use merge vs. rebase
- How to handle hotfixes

Keep the advice practical for someone just starting with Git.
```

---

### Understanding Error Messages

**10. Decode a confusing error**
```
I'm getting this error in Python:

TypeError: unsupported operand type(s) for +: 'int' and 'str'

Explain: (1) what this means in plain language, (2) the most common causes,
(3) how to find the exact line causing it, and (4) how to fix it.
Show a code example of each common cause and its fix.
```

**11. HTTP status codes**
```
Explain the most important HTTP status codes that a web developer needs to know.
Group them by category (2xx success, 3xx redirect, 4xx client error, 5xx server error).
For each code, give: what it means, when a server should return it, and what a
client/developer should do when they see it.
```

---

### Exploring Career Paths

**12. Career path overview**
```
I'm a university student in Indonesia interested in becoming a software developer.
What are the main career paths in software development? For each path:
- What is the day-to-day work like?
- What skills and tools are most important?
- What is the typical salary range in Indonesia vs. internationally?
- What should I build in my portfolio to get a first job in this path?

Paths to cover: frontend, backend, full-stack, DevOps, data engineering, ML engineering.
```

**13. Learning path for a specific role**
```
Create a 6-month self-study learning plan for someone who wants to become a
junior backend developer in Python. I can commit 2 hours per day.

Include:
- Month-by-month topics
- Specific free resources for each topic (courses, books, docs)
- A project to build each month
- How to know when I'm ready for my first job application
```

---

### Planning a Project

**14. Technical planning help**
```
I want to build a web app where students at my university can post and find
study group listings. Help me plan the technical architecture:

1. What kind of application is this? (static site, SPA, server-rendered?)
2. What tech stack would you recommend for a 2-person beginner team?
3. What features should be in version 1 vs. later versions?
4. What are the main technical risks I should plan for?
5. How long would a basic version take to build?
```

**15. API design planning**
```
I'm designing a REST API for a simple task manager app. Users can create
accounts, create projects, and add tasks to projects.

Before I write any code, help me design the API:
1. What resources (endpoints) do I need?
2. What HTTP methods should each endpoint use?
3. What should the request and response bodies look like?
4. How should I handle authentication?
5. What are common mistakes in API design I should avoid?

Show this as a structured API specification.
```

---

## How to Verify AI Research Answers

AI tools can produce confident-sounding answers that are outdated, partially wrong, or completely fabricated (hallucinations). Always verify before acting on important information.

### Verification Checklist

**For technical facts and code:**
- [ ] Run any code examples — if they don't work, the answer may have errors
- [ ] Check the official documentation for the library/framework mentioned
- [ ] Search for the specific version — AI training data has a cutoff date; APIs change
- [ ] Look for the same information in 2+ independent sources

**For comparisons and recommendations:**
- [ ] Check recent community discussions (Stack Overflow, Reddit r/webdev, Hacker News)
- [ ] Look at GitHub stars, recent commit dates, and open issues for libraries recommended
- [ ] Search for "[library name] alternatives 2024" to see if recommendations are current

**For career and industry information:**
- [ ] Cross-reference with job postings on LinkedIn, Glints, or JobStreet
- [ ] Look at recent developer surveys (Stack Overflow Annual Survey, JetBrains Survey)
- [ ] Talk to actual developers in the field

**Red flags in AI research answers:**
- Very specific statistics or numbers without a source
- "As of [year]" language — check if that year is still current
- Descriptions of library APIs that don't match the actual documentation
- Confident claims about things the AI "cannot know" (current prices, live status, recent events)

---

## Citation and Attribution Notes

When using AI-assisted research in academic or professional contexts:

1. **AI responses are not citable sources.** You cannot cite "Claude said..." in a paper or report. Find the primary source and cite that.
2. **Treat AI as a starting point.** Use it to find the right direction, then verify with primary sources (official docs, academic papers, reputable publications).
3. **Disclose AI assistance** when required. Many institutions now require disclosure when AI tools were used in research or writing.
4. **The ideas you generate with AI are yours** — but facts, statistics, and code snippets should be verified and attributed.

---

## When NOT to Rely on AI for Research

Be especially careful (or avoid entirely) for these topics:

### ❌ Latest News and Current Events
AI models have a training data cutoff. They don't know what happened last week, last month, or sometimes last year. For current information, use:
- Official news sources, government websites, company announcements

### ❌ Medical Information
AI can describe medical concepts but should never be used for diagnosis or treatment decisions. Always consult a licensed medical professional.

### ❌ Legal Advice
Laws vary by country, region, and change over time. AI legal information is often generic and can be dangerously wrong for specific situations. Consult a licensed attorney.

### ❌ Financial and Investment Decisions
AI can explain financial concepts but should not advise on specific investments or tax situations. Consult a qualified financial advisor.

### ❌ Real-Time Data
Current stock prices, live API status, real-time weather, and any "right now" data are beyond AI capabilities. Use APIs and live data sources.

### ⚠️ Version-Specific Technical Information
AI may describe an older version of a library or framework. Always check the official documentation for the version you are actually using.

### ⚠️ Indonesian-Specific Context
Global AI models are trained primarily on English-language data. Information specific to Indonesia — local laws, local companies, local tech ecosystems — may be incomplete or wrong. Verify with local sources, local communities, and government websites.

---

## Student Exercises

### Exercise 1 — Technology Decision
Your team needs to build a simple attendance tracking system. Use prompt #2 (database comparison) adapted for this use case. After reading Claude's answer, find one primary source that confirms or contradicts the recommendation.

### Exercise 2 — Career Exploration
Use prompt #12 (career path overview) to research one specific path that interests you. Then find 3 actual job postings in Indonesia that match that path. Compare what Claude said with what employers are actually asking for.

### Exercise 3 — Verify a Claim
Ask Claude: "What is the most popular web framework for Python as of [current year]?" Then check the latest Stack Overflow Developer Survey to verify. Write a one-paragraph reflection on whether the AI was accurate.

### Exercise 4 — Learning Plan
Use prompt #13 to generate a 3-month learning plan for a skill you want to develop. Share it with a classmate — do their AI-generated plan and your plan agree on the best resources? Which resources can you actually find and access from Indonesia?

### Exercise 5 — Plan Your Workshop Project
Use prompt #14 to help plan the technical architecture for the project you're building during the workshop. After the session, annotate the plan: which parts did Claude get right? What did you have to change?
