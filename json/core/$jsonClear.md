# $jsonClear

`$jsonClear` clears the entire current JSON object from memory. After calling it, all JSON functions return empty until `$jsonParse` or `$jsonSet` is called again.

---

## Syntax

```
$jsonClear
```

No parameters.

---

## What happens

1. `$jsonParse` loads a JSON object into memory.
2. `$jsonClear` wipes the entire object.
3. Any `$json`, `$jsonExists`, `$jsonStringify`, or similar call after this returns empty.

---

## Example 1: Clear and confirm

```
$nomention
$jsonParse[{"username":"Zubariel"}]
Before: $json[username]
$jsonClear
After: $json[username]
```

What happens:

1. `$jsonParse` loads the object.
2. `$json[username]` returns `Zubariel`.
3. `$jsonClear` wipes the object from memory.
4. `$json[username]` now returns empty.

Output:
```
Before: Zubariel
After: 
```

---

## Example 2: Reset between two separate objects

```
$nomention
$jsonParse[{"name":"Zubariel"}]
Name: $json[name]
$jsonClear
$jsonParse[{"name":"Speshy"}]
Name: $json[name]
```

What happens:

1. The first `$jsonParse` loads the first object.
2. `$jsonClear` removes it so there is no overlap.
3. The second `$jsonParse` loads a fresh object.
4. `$json[name]` returns the new value.

Output:
```
Name: Zubariel
Name: Speshy
```

---

## Common uses

- **Working with multiple JSON objects** in one command: clear before parsing the next one
- **Resetting state**: ensure no leftover data from a previous parse affects the current one

---

## See also

- [$jsonParse](./$jsonParse.md): to load a new object after clearing
- [$jsonUnset](./$jsonUnset.md): to remove a single key instead of the whole object
