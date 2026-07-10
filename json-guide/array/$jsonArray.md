# $jsonArray

`$jsonArray` marks a key in the current JSON object as an empty array. Use it when you want to start building an array at a key that does not already hold one.

---

## Syntax

```
$jsonArray[Key;...]
```

- `Key`: one or more keys forming the path to the key to mark as an array.

---

## What happens

1. `$jsonParse` loads the JSON object.
2. `$jsonArray` converts the value at the given key into an empty array `[]`.
3. You can then use `$jsonArrayAppend` or other array functions to populate it.

---

## Example 1: Convert a key to an array

```
$nomention
$disableInnerSpaceRemoval
$jsonParse[{"games":""}]
$jsonArray[games]
$jsonPretty[2]
```

What happens:

1. `$jsonParse` loads an object where `games` holds an empty string.
2. `$jsonArray[games]` converts `games` into an empty array.
3. `$jsonPretty[2]` shows the result.

Output:
```
{
  "games": []
}
```

---

## Example 2: Create an array then append to it

```
$nomention
$jsonParse[{}]
$jsonArray[items]
$jsonArrayAppend[items;sword]
$jsonArrayAppend[items;shield]
$jsonJoinArray[items;, ]
```

What happens:

1. `$jsonParse` creates an empty object.
2. `$jsonArray[items]` creates `items` as an empty array.
3. Two `$jsonArrayAppend` calls add values to it.
4. `$jsonJoinArray` displays the result.

Output:
```
sword, shield
```

---

## Common uses

- **Initialising an array key**: create an empty array at a key before appending to it
- **Resetting an array**: convert a key back to an empty array to clear its contents

---

## See also

- [$jsonArrayAppend](./$jsonArrayAppend.md): to add values to the array after creating it
- [$jsonArrayCount](./$jsonArrayCount.md): to count how many elements are in the array
- [$jsonParse](../core/$jsonParse.md): must be called first to load the JSON object
