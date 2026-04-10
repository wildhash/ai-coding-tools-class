#!/usr/bin/env python3
"""
hello.py - A simple Python script example from the Padang AI Coding Tools Class.

This script demonstrates:
- Basic Python syntax
- Functions
- User input
- String formatting
- A simple loop

Created with assistance from Claude AI.
"""


def greet(name: str, language: str = "en") -> str:
    """Return a greeting message in the specified language."""
    greetings = {
        "en": f"Hello, {name}! Welcome to the AI Coding Tools Class.",
        "id": f"Halo, {name}! Selamat datang di AI Coding Tools Class.",
    }
    return greetings.get(language, greetings["en"])


def list_tools() -> list[str]:
    """Return a list of AI coding tools covered in the workshop."""
    return [
        "Claude.ai",
        "Claude Code",
        "VS Code",
        "Cursor",
        "GitHub Copilot",
        "CodeRabbit",
    ]


def main():
    print("=" * 50)
    print("  Padang AI Coding Tools Class")
    print("  Telkom AI Space / IndigoSpace Padang")
    print("=" * 50)
    print()

    # Get user input
    name = input("Enter your name / Masukkan nama kamu: ").strip()
    if not name:
        name = "Developer"

    lang = input("Language (en/id) [default: en]: ").strip().lower()
    if lang not in ("en", "id"):
        lang = "en"

    print()
    print(greet(name, lang))
    print()
    print("Tools we cover in this class:")
    for i, tool in enumerate(list_tools(), 1):
        print(f"  {i}. {tool}")

    print()
    print("Happy coding! / Selamat coding! 🚀")


if __name__ == "__main__":
    main()
