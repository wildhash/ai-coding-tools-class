# Prompts for Debugging — Padang AI Coding Tools Class

A practical guide to using AI tools to find and fix bugs faster — and to become a better debugger in the process.

---

## Introduction to AI-Assisted Debugging

Debugging is one of the highest-value skills a developer can have — and one where AI tools genuinely accelerate your work. Instead of spending 30 minutes staring at an error, you can paste the context into Claude and often have a diagnosis in 30 seconds.

But AI-assisted debugging works best when you give the AI the right inputs. An incomplete prompt ("my code doesn't work") produces a generic response. A complete prompt (error message + relevant code + what you expected + what actually happened) produces a surgical fix.

This guide teaches you:
- The debugging prompt formula
- 15+ real prompt templates for common bug types
- How to share code context effectively
- When to use Claude Web vs. Claude Code for debugging

---

## The Debugging Prompt Formula

Use this structure every time:

```
CONTEXT:    [What are you building? What language/framework?]
CODE:       [Paste the relevant code — not your entire project]
ERROR:      [Paste the full error message verbatim]
EXPECTED:   [What did you expect to happen?]
ACTUAL:     [What actually happened instead?]
TRIED:      [What have you already attempted?]
ASK:        [What specifically do you want? Fix? Explanation? Both?]
```

You don't always need every section, but the more you include, the better the diagnosis.

**Minimal working example:**
```
This Python function throws a TypeError when I pass a float. Here's the code and the full error.
Explain why it fails and show the fix.

Code: [paste]
Error: [paste]
```

---

## 15+ Debugging Prompt Examples

### Python Errors

**1. TypeError — wrong types**
```
I'm getting this error in Python 3.11:

TypeError: can only concatenate str (not "int") to str

Here's my code:
[paste]

I expected it to print a formatted sentence. Explain why this fails and show
the correct way to combine strings and integers in Python.
```

**2. KeyError — missing dictionary key**
```
My Python script crashes with:

KeyError: 'email'

The code is parsing a JSON response from an API. Not every response includes
the 'email' field. Here's the relevant code:
[paste]

How do I safely access dictionary keys that may or may not be present?
Show multiple approaches and tell me when to use each.
```

**3. IndentationError**
```
Python gives me:

IndentationError: unexpected indent

I copied this code from a tutorial and it won't run. Here it is:
[paste]

What exactly is wrong and how do I fix it? Also explain Python's indentation
rules so I understand why this matters.
```

**4. Infinite loop / script hangs**
```
This Python while loop never finishes. The script just hangs and I have to
force-quit it. I don't see any error message:

[paste code]

I expected it to stop when `count` reaches 10. What's wrong and how do I fix it?
Also show me how to add a safety limit to prevent this in the future.
```

**5. FileNotFoundError**
```
My Python script crashes with:

FileNotFoundError: [Errno 2] No such file or directory: 'data/input.csv'

Here's the code:
[paste]

The file definitely exists on my computer. What could cause this and how do I fix it?
I'm running the script from VS Code on Windows.
```

---

### JavaScript Errors

**6. Undefined is not a function**
```
I'm getting this error in the browser console:

TypeError: undefined is not a function

Here's the JavaScript that triggers it:
[paste]

I'm trying to call a method on an object I fetched from an API. The object
exists (I can console.log it) but the method doesn't work. Diagnose the problem.
```

**7. Uncaught ReferenceError**
```
Browser console shows:

Uncaught ReferenceError: myFunction is not defined

But I defined the function in a separate JavaScript file. Both files are loaded
in the HTML. Here's my HTML:
[paste]
And my JavaScript files:
[paste]

Why can't the second file see the function from the first file?
```

**8. Promise / async-await confusion**
```
This async JavaScript function returns undefined instead of the data I expect:

[paste async function]

I'm calling it like this:
[paste calling code]

I'm new to async/await. Explain what's going wrong and show the correct way
to call an async function and use its return value.
```

**9. Event listener not firing**
```
I added a click event listener to a button but nothing happens when I click it:

[paste code]

The button exists in the HTML. No errors in the console. What are the common
reasons an event listener would silently fail, and which one applies here?
```

---

### HTML / CSS Layout Bugs

**10. Element not centering**
```
I'm trying to center a div both horizontally and vertically on the page
but it keeps aligning to the top-left. Here's my HTML and CSS:

[paste]

I've tried margin: auto and text-align: center but neither worked.
Show me the correct modern CSS approach and explain why my attempts didn't work.
```

**11. Flexbox items not wrapping**
```
My flexbox container has 6 items. On small screens, they overflow off the right
side of the page instead of wrapping to a new line. Here's my CSS:

[paste]

What's missing? Show the fix and explain the flexbox property that controls wrapping.
```

**12. Overlapping elements / z-index confusion**
```
My dropdown menu appears behind another element on the page even though it
should be in front. Here's the relevant CSS:

[paste]

I tried adding z-index: 999 but it didn't help. Explain how z-index stacking
contexts work and what I need to change.
```

---

### API Call Failures

**13. 401 Unauthorized**
```
My Python script is getting a 401 error when calling this API:

[paste request code]

Full error response:
[paste response body]

I have an API key but I'm not sure I'm passing it correctly. Show the correct
way to send an Authorization header with the requests library, and explain
the difference between Bearer tokens and API key headers.
```

**14. CORS error in the browser**
```
My JavaScript fetch call works fine in Postman but in the browser I get:

Access to fetch at 'https://api.example.com/data' from origin 'http://localhost:3000'
has been blocked by CORS policy

Here's my fetch code:
[paste]

Explain what CORS is, why this happens, and what my options are to fix it.
I control the frontend but NOT the backend API.
```

**15. API returns 200 but data is wrong**
```
This API request returns status 200 (success) but the response body is empty
or doesn't contain what I expect:

Request: [paste]
Response I got: [paste]
Response I expected: [paste]

My Python code for handling the response:
[paste]

What should I check to diagnose why the data is wrong despite a 200 status?
```

---

### Git Conflicts

**16. Merge conflict — how to resolve**
```
I ran `git pull` and now my file has these conflict markers:

<<<<<<< HEAD
[your version of the code]
=======
[incoming version of the code]
>>>>>>> origin/main

I don't understand what to keep. Here's the full conflicted file:
[paste]

Explain what each section means, which version I should keep, and the exact
git commands to mark this conflict as resolved after I edit the file.
```

**17. Accidentally committed to wrong branch**
```
I just committed my changes to `main` but I should have committed to a new
feature branch. I haven't pushed yet.

What git commands do I run to:
1. Move my commit to a new branch called "feature/my-change"
2. Restore main to its previous state
Without losing any of my work?

Show the commands in order with a brief explanation of what each one does.
```

---

### Logic Errors

**18. Function returns wrong value**
```
This Python function is supposed to calculate the average of a list of numbers,
but it always returns the wrong result:

[paste function]

When I call it with [1, 2, 3, 4, 5] I expect 3.0 but I get [unexpected output].
There's no error — just a wrong answer. Walk through the logic step by step and
find the bug.
```

**19. Loop runs one time too many or too few**
```
My loop processes items from a list but it's consistently processing one item
fewer than it should:

[paste loop code]

The list has 10 items but only 9 get processed. What is an "off by one error"
and what's causing it in my code?
```

---

## How to Share Code Context Effectively

### Do's
- **Paste the minimum code needed** — not your entire file. Find the function or block that's relevant.
- **Include the full error message** — copy from the terminal, not a paraphrase. Include the stack trace.
- **Show the line number** or describe exactly where the error occurs.
- **Include sample input** — tell the AI what data you're passing to the function.
- **Mention your environment** — Python version, OS, library versions when relevant.

### Don'ts
- **Don't paste 500 lines** expecting the AI to find a bug anywhere in them. Narrow it down first.
- **Don't paraphrase error messages** — "it says something about a key" is far less useful than the actual message.
- **Don't leave out imports** — many bugs are caused by missing or wrong imports.
- **Don't paste credentials** — remove any API keys, passwords, or personal data before pasting.

### The minimum viable debug prompt
```
[Language/framework]
[Paste the function or block — 5-50 lines ideal]
[Paste the exact error message]
[One sentence: what did you expect?]
```

---

## When to Use Claude Web vs. Claude Code for Debugging

### Use Claude Web (claude.ai in browser) when:
- You want to paste a snippet and get a quick explanation
- You're asking a conceptual question ("what does this error mean?")
- You don't have Claude Code set up yet
- You want to compare multiple approaches without running code

### Use Claude Code (terminal) when:
- You want Claude to read your actual project files in context
- The bug involves how multiple files interact
- You want Claude to apply a fix directly to your file
- You're doing iterative debugging ("try this, now try that")
- You want to run tests and see results immediately

### Workflow tip: start in Web, finish in Code
Use Claude Web to understand the error conceptually, then switch to Claude Code to apply and verify the fix in your actual project.

---

## Student Exercise: Fix a Broken Script Using AI

Below is a Python script with **5 intentional bugs**. Your task is to find and fix all of them using only AI assistance — no reading the code directly.

```python
# broken_student_exercise.py
# This script reads a list of names from a file and prints them in alphabetical order

import os

def read_names(filename):
    file = open(filename)
    names = file.read().split(",")
    return names

def sort_names(names):
    names.sort
    return names

def print_names(names):
    for i in range(1, len(names)):
        print(f"{i}. {names[i]}")

def main():
    filename = "names.txt"
    names = read_names(filename)
    sorted = sort_names(names)
    print_names(sorted)

main()
```

**How to do this exercise:**
1. Create a file called `names.txt` with: `Zainab,Ahmad,Budi,Siti,Rina,Didi`
2. Run the script and note the error(s).
3. For each error, write a debugging prompt using the formula from this guide.
4. Apply Claude's fix, run again, and repeat until the script works correctly.
5. After it works, ask Claude: "Are there any other improvements to this script beyond the bugs we fixed?"

**What you're looking for:** The script should print all 6 names, numbered starting at 1, in alphabetical order.

**Bonus:** Ask Claude to add error handling for missing files and empty input.

---

## Quick Reference: Debugging Prompt Templates

Copy and fill in the blanks:

```
Language: ___
Error: ___
Code:
[paste here]
Expected: ___
Actual: ___
Fix this and explain what caused it.
```

```
I have a logic bug — no error message, just wrong output.
Function: [name]
Input: ___
Expected output: ___
Actual output: ___
Code:
[paste here]
Walk through the logic and find the mistake.
```

```
This works on my machine but fails in production. 
Environment difference: my machine is [X], production is [Y].
Code: [paste]
Error: [paste]
What environment-related issues could cause this?
```
