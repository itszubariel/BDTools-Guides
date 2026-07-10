# $jsonPretty

`$jsonPretty` converts the current JSON object into a formatted, indented string. Useful for displaying JSON in a readable way inside a Discord message.

---

## Syntax

```
$jsonPretty[Indent length]
```

- `Indent length`: the number of spaces per indentation level. Usually `2` or `4`.

Returns empty if no `$jsonParse` or `$jsonSet` was called, or `$jsonClear` was called.

> Use `$disableInnerSpaceRemoval` at the top of your command to preserve the indentation in Discord messages.

---

## What happens

1. `$jsonParse` loads the JSON object into memory.
2. `$jsonPretty` converts it into a multi-line string with each level indented by the specified number of spaces.

---

## Example 1: Pretty print with 2-space indent

```
$nomention
$disableInnerSpaceRemoval
$jsonParse[{"username":"Zubariel","level":10}]
$jsonPretty[2]
```

What happens:

1. `$jsonParse` loads the object.
2. `$jsonPretty[2]` formats it with 2-space indentation.

Output:
```
{
  "level": 10,
  "username": "Zubariel"
}
```

---

## Example 2: Pretty print a nested object

```
$nomention
$disableInnerSpaceRemoval
$jsonParse[{"user":{"name":"Zubariel","score":150}}]
$jsonPretty[4]
```

What happens:

1. `$jsonParse` loads the nested object.
2. `$jsonPretty[4]` formats it with 4-space indentation.

Output:
```
{
    "user": {
        "name": "Zubariel",
        "score": 150
    }
}
```

---

## Common uses

- **Debugging**: inspect the full structure of a JSON object visually
- **Displaying data**: show formatted JSON in a bot response for readability
- **Confirming edits**: check the object after a series of `$jsonSet` calls

---

## See also

- [$jsonStringify](./$jsonStringify.md): for a compact single-line string instead
- [$jsonParse](./$jsonParse.md): must be called first to load the JSON object
