# BDFD Text Splitting Guide

A beginner-friendly guide to the **text splitting** functions in BDFD.

> 🌐 **[View the web version](https://guides.bdtools.xyz/textsplit)**

---

## What this is about

**Text splitting** lets your bot break a string into parts, then read, modify, or reassemble those parts. It works like a temporary list: you split some text by a separator, and each piece gets a numbered index you can refer to later.

With these functions you can build:

- **Argument parsers**: read individual words or values from `$message`
- **List processors**: loop through comma-separated or hyphen-separated data
- **Character counters**: split by empty separator to get each character
- **Word pickers**: grab a random or specific word from user input
- **Data editors**: remove or replace individual elements in a split

---

## How this guide is organized

Functions are grouped into two categories. A third section covers practical usage with variables.

**Core**: creating and reading a split
- `$textSplit`, `$splitText`, `$getTextSplitLength`, `$getTextSplitIndex`

**Modifiers**: changing and reassembling a split
- `$joinSplitText`, `$removeSplitTextElement`, `$editSplitText`

**Variables**: using text splitting to store multiple values in one BDFD variable
- Setup, reading, and writing

Every function page explains:

- What the function does
- The exact **syntax** (how to write it)
- **What happens** when you call it
- Two **simple examples** you can try
- **Common uses** for the function
- **Related functions** to check next

> Pick the function you need from the table below and click it.

---

## Functions

| Function | What it does |
|---|---|
| [$textSplit](core/$textSplit.md) | Splits text by a separator and stores the result |
| [$splitText](core/$splitText.md) | Returns a single element from the split by index |
| [$getTextSplitLength](core/$getTextSplitLength.md) | Returns the total number of elements in the split |
| [$getTextSplitIndex](core/$getTextSplitIndex.md) | Returns the index of a given value in the split |
| [$joinSplitText](modifiers/$joinSplitText.md) | Joins all split elements back into a single string |
| [$removeSplitTextElement](modifiers/$removeSplitTextElement.md) | Removes one element from the split by index |
| [$editSplitText](modifiers/$editSplitText.md) | Replaces one element in the split with a new value |

---

## Variables

| Page | What it covers |
|---|---|
| [Setup](variables/setup.md) | How to design a TextSplit variable and set its default value |
| [Reading](variables/reading.md) | How to split a variable and read individual slots |
| [Writing](variables/writing.md) | How to edit slots and save changes back to the variable |

---

## Where to start

If you are **completely new** to text splitting, read these in order:

1. **[$textSplit](core/$textSplit.md)**: this always comes first, it creates the split.
2. **[$splitText](core/$splitText.md)**: used right after `$textSplit` to read individual elements.

Once you understand those two, the rest of the functions build naturally on top of them.

---

## Source accuracy

> All syntax shown in this guide is checked against BDFD's **official wiki**.
