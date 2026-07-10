# $jsonArrayReverse

`$jsonArrayReverse` reverses the order of a JSON array. The last element becomes the first and vice versa.

---

## Syntax

```
$jsonArrayReverse[Key;...]
```

- `Key`: one or more keys forming the path to the array.

---

## What happens

1. `$jsonParse` loads the JSON object.
2. `$jsonArrayReverse` reverses the order of the array at the given key path in place.
3. Nothing is returned. Use `$json` or `$jsonJoinArray` to see the result.

---

## Example 1: Reverse a simple array

```
$nomention
$jsonParse[{"fruits":["apple","orange","banana","grape"\]}]
$jsonArrayReverse[fruits]
$jsonJoinArray[fruits;, ]
```

What happens:

1. `$jsonParse` loads the object.
2. `$jsonArrayReverse[fruits]` reverses the array.
3. `$jsonJoinArray` displays the result.

Output:
```
grape, banana, orange, apple
```

---

## Example 2: Sort descending by combining with sort

```
$nomention
$jsonParse[{"scores":[10,30,50,70,90\]}]
$jsonArrayReverse[scores]
Descending: $jsonJoinArray[scores;, ]
```

What happens:

1. `$jsonParse` loads the already-sorted scores.
2. `$jsonArrayReverse[scores]` flips the order to descending.
3. `$jsonJoinArray` displays the result.

Output:
```
Descending: 90, 70, 50, 30, 10
```

---

## Common uses

- **Descending sort**: use after `$jsonArraySort` to get highest-to-lowest order
- **Reversing a history**: show the most recent entries first
- **Flipping a list**: reverse any ordered array

---

## See also

- [$jsonArraySort](./$jsonArraySort.md): to sort before reversing for descending order
- [$jsonJoinArray](./$jsonJoinArray.md): to display the reversed array as a string
