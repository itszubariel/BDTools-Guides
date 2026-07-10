# BDFD JSON Guide

A beginner-friendly guide to the **JSON** functions in BDFD.

> 🌐 **[View the web version](https://guides.bdtools.xyz/json)**

---

## What this is about

The **JSON** functions let your bot parse, read, modify, and build JSON objects directly inside BDFD commands. JSON is the format most APIs return data in, and it is also a powerful way to store structured data inside a single variable.

With these functions you can build:

- **API readers**: parse what `$httpGet` returns and extract specific values
- **Structured storage**: pack multiple fields into one variable using JSON instead of text splitting
- **Data editors**: update individual fields without touching the rest of the object
- **Array processors**: append, remove, sort, and join elements inside a JSON array

---

## How this guide is organized

Functions are grouped into two categories. A third section covers practical usage with variables.

**Core**: parsing, reading, writing, and inspecting a JSON object
- `$jsonParse`, `$json`, `$jsonSet`, `$jsonSetString`, `$jsonUnset`, `$jsonClear`, `$jsonExists`, `$jsonStringify`, `$jsonPretty`

**Array**: working with JSON arrays
- `$jsonArray`, `$jsonArrayCount`, `$jsonArrayIndex`, `$jsonArrayAppend`, `$jsonArrayPop`, `$jsonArrayShift`, `$jsonArrayUnshift`, `$jsonArraySort`, `$jsonArrayReverse`, `$jsonJoinArray`

**Variables**: storing JSON inside a BDFD variable and reading or updating it
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
| [$jsonParse](core/$jsonParse.md) | Parses a JSON string into an object for use by other functions |
| [$json](core/$json.md) | Retrieves a value from the current JSON object by key |
| [$jsonSet](core/$jsonSet.md) | Sets or replaces a value at the specified key |
| [$jsonSetString](core/$jsonSetString.md) | Sets or replaces a value at the specified key, always as a string |
| [$jsonUnset](core/$jsonUnset.md) | Removes a key and its value from the JSON object |
| [$jsonClear](core/$jsonClear.md) | Clears the entire current JSON object |
| [$jsonExists](core/$jsonExists.md) | Checks if a key exists in the current JSON object |
| [$jsonStringify](core/$jsonStringify.md) | Converts the current JSON object back into a string |
| [$jsonPretty](core/$jsonPretty.md) | Converts the current JSON object into a formatted, readable string |
| [$jsonArray](array/$jsonArray.md) | Marks a key as an array |
| [$jsonArrayCount](array/$jsonArrayCount.md) | Returns the number of elements in a JSON array |
| [$jsonArrayIndex](array/$jsonArrayIndex.md) | Returns the index of a value in a JSON array |
| [$jsonArrayAppend](array/$jsonArrayAppend.md) | Appends a value to the end of a JSON array |
| [$jsonArrayPop](array/$jsonArrayPop.md) | Removes and returns the last element of a JSON array |
| [$jsonArrayShift](array/$jsonArrayShift.md) | Removes and returns the first element of a JSON array |
| [$jsonArrayUnshift](array/$jsonArrayUnshift.md) | Adds a value to the front of a JSON array |
| [$jsonArraySort](array/$jsonArraySort.md) | Sorts a JSON array in ascending order |
| [$jsonArrayReverse](array/$jsonArrayReverse.md) | Reverses the order of a JSON array |
| [$jsonJoinArray](array/$jsonJoinArray.md) | Joins all elements of a JSON array into a string with a separator |

---

## Variables

| Page | What it covers |
|---|---|
| [Setup](variables/setup.md) | How to create and initialise a JSON variable in BDFD |
| [Reading](variables/reading.md) | How to load a variable and read individual fields from it |
| [Writing](variables/writing.md) | How to update fields and save the variable back to storage |

---

## Where to start

If you are **completely new** to the JSON functions, read these in order:

1. **[$jsonParse](core/$jsonParse.md)**: this always comes first, it loads the JSON into memory.
2. **[$json](core/$json.md)**: used right after to read values from it.

Once you understand those two, the rest of the functions build naturally on top of them.

---

## Source accuracy

> All syntax shown in this guide is checked against BDFD's **official wiki**.
