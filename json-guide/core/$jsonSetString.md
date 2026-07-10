# $jsonSetString

`$jsonSetString` sets or replaces a value at a specified key, always storing it as a string. Use this instead of `$jsonSet` when working with large numbers to avoid precision loss.

---

## Syntax

```
$jsonSetString[Key;...;Value]
```

- `Key`: one or more keys forming the path to the target location.
- `Value`: the value to set, stored as a string.

---

## What happens

1. `$jsonParse` loads the JSON object into memory.
2. `$jsonSetString` sets the value at the given key, wrapped in quotes so it is stored as a string type in the JSON.
3. Nothing is returned. Use `$json` to read it back.

---

## Example 1: Store a large number safely

```
$nomention
$jsonParse[{}]
$jsonSetString[balance;788895455566645444567]
Balance: $json[balance]
```

What happens:

1. `$jsonParse` creates an empty object.
2. `$jsonSetString` stores the number as a string, preserving every digit.
3. `$json[balance]` reads it back correctly.

Output:
```
Balance: 788895455566645444567
```

If `$jsonSet` were used instead, the number would lose precision because JSON's native number type cannot handle integers that large accurately.

---

## Example 2: Store user input

```
$nomention
$jsonParse[{}]
$jsonSetString[coins;$message]
Coins set to: $json[coins]
```

What happens:

1. `$jsonParse` creates an empty object.
2. `$jsonSetString` stores whatever the user typed as a string.
3. `$json[coins]` reads it back.

If the user runs `!example 500`:
```
Coins set to: 500
```

---

## Common uses

- **Economy commands**: always store coin balances and large numbers as strings to avoid precision issues
- **User input**: store values from `$message` that may be numeric but need to stay accurate

---

## See also

- [$jsonSet](./$jsonSet.md): use this for booleans, small numbers, or non-numeric values
- [$json](./$json.md): to read the value after setting it
