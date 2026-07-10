# $jsonExists

`$jsonExists` checks if a key exists in the current JSON object. Returns `true` if it does, `false` if it does not.

---

## Syntax

```
$jsonExists[Key;...]
```

- `Key`: one or more keys forming the path to check.

Returns empty if no `$jsonParse` or `$jsonSet` was called, or `$jsonClear` was called.

---

## What happens

1. `$jsonParse` loads the JSON object into memory.
2. `$jsonExists` checks whether the key at the given path exists.
3. Returns `true` or `false`.

---

## Example 1: Check a key

```
$nomention
$jsonParse[{"username":"Zubariel"}]
$jsonExists[username]
$jsonExists[tag]
```

What happens:

1. `$jsonParse` loads the object which has `username` but no `tag`.
2. `$jsonExists[username]` returns `true`.
3. `$jsonExists[tag]` returns `false`.

Output:
```
true
false
```

---

## Example 2: Use inside a condition

```
$nomention
$jsonParse[{"role":"admin"}]
$if[$jsonExists[role]==true]
Role: $json[role]
$else
No role set.
$endif
```

What happens:

1. `$jsonParse` loads the object.
2. `$jsonExists[role]` returns `true`, so the `$if` block runs.
3. `$json[role]` returns `admin`.

Output:
```
Role: admin
```

---

## Common uses

- **Validating before reading**: confirm a key exists before calling `$json` on it
- **Conditional logic**: branch behaviour based on whether a field is present
- **Array checks**: verify a nested key exists before appending to it

---

## See also

- [$json](./$json.md): to read the value once confirmed it exists
- [$jsonUnset](./$jsonUnset.md): to remove a key after checking it exists
