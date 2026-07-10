# $jsonArrayIndex

`$jsonArrayIndex` returns the index of a given value inside a JSON array. Returns `-1` if the value is not found.

---

## Syntax

```
$jsonArrayIndex[Key;...;Value]
```

- `Key`: one or more keys forming the path to the array.
- `Value`: the value to search for.

Returns empty if no `$jsonParse` or `$jsonSet` was called, or `$jsonClear` was called.

---

## What happens

1. `$jsonParse` loads the JSON object.
2. `$jsonArrayIndex` searches the array at the given key path for the value.
3. Returns the numeric index (starting at `0`) if found, or `-1` if not.

---

## Example 1: Find a value in an array

```
$nomention
$jsonParse[{"fruits":["apple","banana","orange"\]}]
$jsonArrayIndex[fruits;banana]
```

What happens:

1. `$jsonParse` loads the object.
2. `$jsonArrayIndex[fruits;banana]` finds `banana` at index `1` and returns it.

Output:
```
1
```

---

## Example 2: Search for user input

```
$nomention
$jsonParse[{"roles":["admin","mod","member"\]}]
Index: $jsonArrayIndex[roles;$message]
```

What happens:

1. `$jsonParse` loads the object.
2. `$jsonArrayIndex` searches for whatever the user typed.

If the user runs `!example mod`:
```
Index: 1
```

If the user runs `!example owner`:
```
Index: -1
```

---

## Common uses

- **Checking if a value exists**: a result of `-1` means the value is not in the array
- **Membership checks**: verify a user, role, or item is in a list
- **Find position before editing**: get the index to use in another operation

---

## See also

- [$jsonArrayCount](./$jsonArrayCount.md): to get the total number of elements
- [$jsonArrayAppend](./$jsonArrayAppend.md): to add a value to the array
- [$jsonExists](../core/$jsonExists.md): to check if a key exists before searching it
