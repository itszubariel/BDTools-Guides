# $jsonSet

`$jsonSet` sets or replaces a value at a specified key in the current JSON object. The last argument is always the value, everything before it is the key path.

---

## Syntax

```
$jsonSet[Key;...;Value]
```

- `Key`: one or more keys forming the path to the target location.
- `Value`: the value to set. Can be a string, integer, float, or boolean.

---

## What happens

1. `$jsonParse` loads the JSON object into memory.
2. `$jsonSet` navigates to the key path and sets the value there.
3. If the key already exists its value is replaced. If it does not exist it is created.
4. Nothing is returned. Use `$json` to read the updated value.

---

## Example 1: Update an existing key

```
$nomention
$jsonParse[{"username":"Zubariel","level":5}]
$jsonSet[level;10]
Level: $json[level]
```

What happens:

1. `$jsonParse` loads the object.
2. `$jsonSet[level;10]` replaces the value at `level` with `10`.
3. `$json[level]` reads the updated value.

Output:
```
Level: 10
```

---

## Example 2: Set a value inside a nested object

```
$nomention
$jsonParse[{"user":{"name":"Zubariel","score":0}}]
$jsonSet[user;score;150]
Score: $json[user;score]
```

What happens:

1. `$jsonParse` loads the object.
2. `$jsonSet[user;score;150]` navigates into `user` and sets `score` to `150`.
3. `$json[user;score]` reads it back.

Output:
```
Score: 150
```

---

## Common uses

- **Updating a field**: change a value before saving the object back to a variable
- **Building from scratch**: start with `$jsonParse[{}]` then add fields with `$jsonSet`
- **Writing to nested keys**: set values deep inside an object using multiple key segments

---

## See also

- [$jsonSetString](./$jsonSetString.md): use this instead when setting large numbers
- [$jsonUnset](./$jsonUnset.md): to remove a key instead of updating it
- [$json](./$json.md): to read the value after setting it
