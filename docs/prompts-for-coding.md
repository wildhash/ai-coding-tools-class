# Prompts for Coding — Padang AI Coding Tools Class

A practical guide to writing effective prompts when using Claude, Copilot, Cursor, or any AI coding tool.

---

## Introduction: Why Prompt Engineering Matters for Coding

AI coding tools are only as useful as the instructions you give them. A vague prompt produces vague code. A precise, context-rich prompt produces production-quality results that you can understand, test, and build on.

Prompt engineering for coding is not a mystic art — it's a habit. The more context you provide (language, framework, goal, constraints), the better the output. Think of it like briefing a very knowledgeable colleague who knows nothing about *your specific situation* — the more you tell them, the better they can help.

This guide gives you 15+ ready-to-use prompt templates across common coding scenarios, plus the patterns and habits that make them work.

---

## 15+ Categorized Coding Prompts

### Starting a Project

**1. Scaffold a new project**
```
Create a starter project structure for a Python Flask API with the following:
- A main app.py entry point
- A /routes folder for route handlers
- A /models folder for data models
- A requirements.txt
- A .gitignore that excludes .env and __pycache__
- A README.md with setup instructions

Use Flask-RESTful and SQLAlchemy. Keep the code clean and well-commented.
```

**2. Generate a project README**
```
Write a README.md for a GitHub repository called "padang-weather-tracker".
It is a Python script that fetches weather data from the OpenWeatherMap API
and displays the current temperature and conditions for Padang, Indonesia.

Include: project description, prerequisites, installation steps, usage example,
and a "Contributing" section.
```

**3. Plan a project before coding**
```
I want to build a personal portfolio website using only HTML, CSS, and JavaScript
(no frameworks). It should have: a home page, an about page, a projects page, and
a contact form.

Before writing any code, give me:
1. A recommended folder structure
2. A list of files I'll need
3. Any potential challenges I should plan for
```

---

### Adding Features

**4. Add a feature to existing code**
```
Here is my existing Python function that reads a CSV file:

[paste your code here]

Add a feature that:
- Skips rows where the "status" column is "inactive"
- Logs a warning when a row is skipped
- Returns the count of skipped rows alongside the data

Keep the existing function signature compatible.
```

**5. Add form validation**
```
I have this HTML contact form:

[paste your HTML here]

Add JavaScript validation that:
- Checks the email field has a valid email format
- Checks the message field is at least 20 characters
- Shows a red error message below each invalid field
- Prevents form submission if any field is invalid
- Clears error messages when the user starts typing

Use vanilla JavaScript only. No jQuery or external libraries.
```

**6. Add dark mode to a website**
```
I have a basic HTML/CSS website. Add a dark mode toggle button that:
- Appears in the top right corner
- Switches between light and dark color schemes when clicked
- Saves the user's preference in localStorage so it persists on reload
- Uses CSS variables for the color scheme

Here is my current CSS: [paste CSS here]
```

---

### Writing Functions

**7. Write a specific function**
```
Write a Python function called `calculate_bmi` that:
- Takes weight in kilograms and height in meters as parameters
- Returns the BMI value rounded to 2 decimal places
- Also returns a string classification: "Underweight", "Normal", "Overweight", or "Obese"
- Includes a docstring explaining parameters and return values
- Raises a ValueError if either input is zero or negative

Include 3 unit tests using Python's built-in unittest module.
```

**8. Write a utility function with edge cases**
```
Write a JavaScript function called `truncateText(text, maxLength, suffix)` that:
- Shortens a string to maxLength characters
- Appends suffix (default: "...") if the string was truncated
- Does not split words in the middle — always break at a word boundary
- Returns the original string unchanged if it's already within maxLength
- Handles null/undefined input gracefully

Show me 5 example calls demonstrating different edge cases.
```

---

### Working with APIs

**9. Fetch data from an API**
```
Write a Python script that fetches the current weather for Padang, Indonesia
from the OpenWeatherMap API (https://openweathermap.org/api).

Requirements:
- Use the `requests` library
- Store the API key in a .env file using python-dotenv
- Print: city name, temperature in Celsius, weather description, and humidity
- Handle errors gracefully (API key missing, city not found, network error)
- Include a comment explaining how to get a free API key
```

**10. Handle API pagination**
```
I'm calling the GitHub API to list all issues in a repo. The API paginates
results (30 per page by default). Write a Python function that:
- Fetches ALL issues across all pages
- Uses the Link header to detect if there are more pages
- Returns a flat list of all issue objects
- Accepts the repo owner, repo name, and GitHub token as parameters
- Respects GitHub's rate limits by pausing if a 429 response is received
```

---

### Data Manipulation

**11. Process and filter a dataset**
```
I have a list of dictionaries representing student records:
[
  {"name": "Andi", "score": 85, "attendance": 90},
  {"name": "Budi", "score": 72, "attendance": 60},
  ...
]

Write Python code that:
1. Filters out students with attendance below 75%
2. Sorts the remaining students by score (highest first)
3. Assigns letter grades: A (90+), B (80-89), C (70-79), D (60-69), F (<60)
4. Returns a new list with the original fields plus a "grade" field
5. Prints a summary: total students, average score, grade distribution
```

**12. Parse and transform JSON**
```
I receive this JSON from an API:
[paste sample JSON here]

Transform it into a flat CSV format where each row represents one item.
Write Python code using the csv module. Handle nested fields by flattening
them with underscore notation (e.g., "address.city" becomes "address_city").
```

---

### HTML / CSS

**13. Build a responsive layout**
```
Create a responsive HTML/CSS product card component. It should:
- Show an image, product name, price, and an "Add to Cart" button
- Use CSS Grid or Flexbox (your choice — explain why)
- Be responsive: full width on mobile, 3 columns on tablet (768px+), 4 columns on desktop (1200px+)
- Have a hover effect that lifts the card slightly with a shadow
- Use CSS custom properties (variables) for colors so they're easy to change

No JavaScript needed. No external CSS frameworks.
```

**14. Fix a CSS layout bug**
```
My navigation bar has this HTML and CSS:
[paste your code]

The problem: on mobile screens, the nav items overflow and go off-screen.
Diagnose the issue and fix it. Show me the corrected CSS and explain what was wrong.
```

---

### Python Scripts

**15. Write a file processing script**
```
Write a Python script that watches a folder for new .txt files and processes each one:
- Read the file
- Count word frequency
- Write a new file called <original_name>_summary.txt with:
  - Total word count
  - Top 10 most frequent words and their counts
  - Sentences containing the top word

Use the `watchdog` library for folder watching. Handle file encoding errors gracefully.
```

**16. Automate a repetitive task**
```
Write a Python script that renames all image files in a folder:
- Input folder: specified as a command-line argument
- New naming pattern: YYYY-MM-DD_001.jpg, YYYY-MM-DD_002.jpg, etc.
- Use the file's creation date for the date prefix
- Sort by creation date before numbering
- Show a preview of the renames and ask for confirmation before applying
- Keep the original file extension (jpg, png, webp, etc.)
```

---

## Prompt Patterns

### Role Prompting
Tell the AI to take on a specific expert persona for more targeted responses.

```
You are a senior Python developer with 10 years of experience writing clean,
testable code. Review the following function and suggest improvements with
explanations for each change:

[paste your code]
```

```
Act as a front-end developer who specializes in accessibility. Review this HTML
form and identify any accessibility issues (missing labels, ARIA attributes,
keyboard navigation problems):

[paste your HTML]
```

### Chain of Thought
Ask the AI to reason step by step before writing code. This produces more reliable, logical output.

```
Before writing any code, think step by step about how to solve this problem:

I need to validate that a user's password meets these requirements:
- At least 8 characters
- Contains at least one uppercase letter
- Contains at least one number
- Contains at least one special character

First, explain your approach. Then write the Python function.
```

### Few-Shot Examples
Show the AI what you want by providing 1–3 examples before asking for more.

```
I need you to write docstrings for my functions. Here is the format I want:

Example 1:
Function: def add(a, b)
Docstring:
"""
Add two numbers together.

Args:
    a (int or float): First number.
    b (int or float): Second number.

Returns:
    int or float: The sum of a and b.
"""

Now write docstrings in the same format for these functions:
[paste your functions]
```

---

## What Makes a Good Coding Prompt — Checklist

Before sending a prompt, check:

- [ ] **Language and framework specified** — "Python 3.11", "vanilla JavaScript", "React 18"
- [ ] **Goal is clear** — what should the code do? What is the expected input and output?
- [ ] **Constraints included** — "no external libraries", "must run on Windows", "< 50 lines"
- [ ] **Existing code pasted** — when modifying code, always include what you already have
- [ ] **Error message included** — when debugging, paste the full error message verbatim
- [ ] **Format requested** — "explain before you write", "add comments", "include unit tests"
- [ ] **Edge cases mentioned** — what happens with empty input, very large input, invalid types?

---

## Common Mistakes to Avoid

**❌ Too vague:**
> "Write a login system."

**✅ Better:**
> "Write a Python Flask endpoint that accepts a POST request with JSON body `{email, password}`, checks credentials against a SQLite database, and returns a JWT token on success or a 401 error on failure. Use bcrypt for password hashing."

---

**❌ No context:**
> "Fix this code."

**✅ Better:**
> "This Python function throws a `KeyError` when the input dictionary doesn't have an 'age' key. Fix it to return `None` for missing keys instead of crashing: [paste code]"

---

**❌ Asking for too much at once:**
> "Build me a full e-commerce website."

**✅ Better:**
> Start with: "Create a product listing page in HTML/CSS with mock data" — then build feature by feature.

---

**❌ Not testing the output:**
Always run AI-generated code. It may compile but behave incorrectly. Ask: "What test cases should I run to verify this works?"

---

## Student Exercises

### Exercise 1 — Start from scratch
Using prompt #1 (scaffold a project), generate a starter structure for your own project idea. What did Claude include that you didn't think of?

### Exercise 2 — Improve a prompt
Take this weak prompt and rewrite it using the checklist above:
> "Write a function that handles user data."

### Exercise 3 — Role + chain of thought
Write a prompt using both the role pattern and the chain-of-thought pattern to generate a function that validates an Indonesian phone number format.

### Exercise 4 — Debug with AI
Write a Python function that has one deliberate bug. Swap your code with a classmate. Use Claude to find and fix the bug — but first explain the bug to Claude using the error message and context.

### Exercise 5 — Build your portfolio page
Use prompts #13 and #3 together to plan and build a single-page personal portfolio. Deploy it with GitHub Pages. Share the live URL.
