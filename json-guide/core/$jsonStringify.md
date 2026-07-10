# $jsonStringify

`$jsonStringify` converts the current JSON object back into a compact single-line string. Use it when saving the object to a variable or sending it as an HTTP request body.

---

## Syntax

```
$jsonStringify
```

No parameters.

Returns empty if no `$jsonParse` or `$jsonSet` was called, or `$jsonClear` was called.

---

## What happens

1. `$jsonParse` loads the JSON object into memory.
2. Any edits via `$jsonSet` or `$jsonUnset` are applied.
3. `$jsonStringify` converts the entire current object into a single-line JSON string and returns it.

---

## Example 1: Stringify a simple object

```
$nomention
$jsonParse[{"username":"Zubariel","level":10}]
$jsonStringify
```

What happens:

1. `$jsonParse` loads the object.
2. `$jsonStringify` outputs it as a compact string.

Output:
```
{"username":"Zubariel","level":10}
```

---

## Example 2: Modify then stringify

```
$nomention
$jsonParse[{"coins":100,"level":1}]
$jsonSet[coins;250]
$jsonStringify
```

What happens:

1. `$jsonParse` loads the object.
2. `$jsonSet[coins;250]` updates the coins value.
3. `$jsonStringify` outputs the updated object as a compact string.

Output:
```
{"coins":250,"level":1}
```

---

## Common uses

- **Saving to a variable**: always stringify before passing to `$setVar`
- **Sending to an API**: convert the object to a string for an HTTP request body
- **Debugging**: quickly inspect the full object after a series of edits

---

## See also

- [$jsonPretty](./$jsonPretty.md): for a human-readable formatted version instead
- [$jsonParse](./$jsonParse.md): to reload the stringified output later
