# $jsonArrayCount

`$jsonArrayCount` returns the number of elements in a JSON array at the specified key.

---

## Syntax

```
$jsonArrayCount[Key;...]
```

- `Key`: one or more keys forming the path to the array.

---

## What happens

1. `$jsonParse` loads the JSON object.
2. `$jsonArrayCount` counts the elements in the array at the given key path and returns the number.

---

## Example 1: Count elements in a simple array

```
$nomention
$jsonParse[{"fruits":["apple","banana","orange"\]}]
$jsonArrayCount[fruits]
```

What happens:

1. `$jsonParse` loads the object with a `fruits` array of 3 elements.
2. `$jsonArrayCount[fruits]` returns the count.

Output:
```
3
```

---

## Example 2: Count elements in a nested array

```
$nomention
$jsonParse[{"store":{"items":["sword","shield","potion","arrow"\]}}]
Items in store: $jsonArrayCount[store;items]
```

What happens:

1. `$jsonParse` loads the object.
2. `$jsonArrayCount[store;items]` navigates into `store` and counts the `items` array.

Output:
```
Items in store: 4
```

---

## Common uses

- **Validation**: check the size of an array before appending or accessing by index
- **Displaying list size**: show how many entries a list has
- **Dynamic access**: use the count to reach the last element without hardcoding an index

---

## See also

- [$jsonArrayIndex](./$jsonArrayIndex.md): to find the position of a specific value
- [$jsonArrayAppend](./$jsonArrayAppend.md): to add elements to the array
- [$jsonParse](../core/$jsonParse.md): must be called first to load the JSON object
