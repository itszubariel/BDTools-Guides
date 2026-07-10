# $jsonUnset

`$jsonUnset` removes a key and its value from the current JSON object. It is the opposite of `$jsonSet`.

---

## Syntax

```
$jsonUnset[Key;...]
```

- `Key`: one or more keys forming the path to the key to remove.

---

## What happens

1. `$jsonParse` loads the JSON object into memory.
2. `$jsonUnset` finds the key at the given path and removes it entirely.
3. Nothing is returned. After this, calling `$json` on that key returns an empty string.

---

## Example 1: Remove a top-level key

```
$nomention
$jsonParse[{"username":"Zubariel","tag":"0001"}]
Before: $json[username]
$jsonUnset[username]
After: $json[username]
```

What happens:

1. `$jsonParse` loads the object.
2. `$json[username]` reads `Zubariel`.
3. `$jsonUnset[username]` removes the key.
4. `$json[username]` now returns empty.

Output:
```
Before: Zubariel
After: 
```

---

## Example 2: Remove a nested key

```
$nomention
$disableInnerSpaceRemoval
$jsonParse[{"user":{"name":"Zubariel","score":100}}]
$jsonUnset[user;score]
$jsonPretty[2]
```

What happens:

1. `$jsonParse` loads the object.
2. `$jsonUnset[user;score]` removes `score` from inside `user`.
3. `$jsonPretty[2]` shows the updated object.

Output:
```
{
  "user": {
    "name": "Zubariel"
  }
}
```

---

## Common uses

- **Cleaning up objects**: remove fields before saving or sending a JSON object
- **Resetting a key**: remove a key so it can be recreated fresh with `$jsonSet`

---

## See also

- [$jsonSet](./$jsonSet.md): to set or update a value instead of removing it
- [$jsonClear](./$jsonClear.md): to remove the entire object instead of just one key
- [$jsonExists](./$jsonExists.md): to check if a key exists before unsetting it
