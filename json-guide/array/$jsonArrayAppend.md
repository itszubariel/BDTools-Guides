# $jsonArrayAppend

`$jsonArrayAppend` appends a value to the end of a JSON array at the specified key.

---

## Syntax

```
$jsonArrayAppend[Key;...;Value]
```

- `Key`: one or more keys forming the path to the array.
- `Value`: the value to append. Can be a string, integer, float, or boolean.

---

## What happens

1. `$jsonParse` loads the JSON object.
2. `$jsonArrayAppend` adds the value to the end of the array at the given key path.
3. Nothing is returned. Use `$json` or `$jsonJoinArray` to see the updated array.

---

## Example 1: Append to a simple array

```
$nomention
$jsonParse[{"fruits":["apple","banana"\]}]
$jsonArrayAppend[fruits;orange]
$jsonJoinArray[fruits;, ]
```

What happens:

1. `$jsonParse` loads the object with a two-item `fruits` array.
2. `$jsonArrayAppend[fruits;orange]` adds `orange` to the end.
3. `$jsonJoinArray` displays the updated array.

Output:
```
apple, banana, orange
```

---

## Example 2: Append multiple values

```
$nomention
$jsonParse[{"fruits":["apple","banana"\]}]
$jsonArrayAppend[fruits;orange]
$jsonArrayAppend[fruits;grape]
$jsonJoinArray[fruits;, ]
```

What happens:

1. `$jsonParse` loads the object with a two-item `fruits` array.
2. Two `$jsonArrayAppend` calls add `orange` then `grape` to the end.
3. `$jsonJoinArray` displays the updated array.

Output:
```
apple, banana, orange, grape
```

---

## Common uses

- **Building lists**: add items to an array one at a time
- **Inventory systems**: add purchased items to a user's inventory array
- **Logging**: append entries to a history or log array

---

## See also

- [$jsonArrayPop](./$jsonArrayPop.md): to remove the last element
- [$jsonArrayUnshift](./$jsonArrayUnshift.md): to add a value to the front instead
- [$jsonArrayCount](./$jsonArrayCount.md): to check how many elements are in the array
