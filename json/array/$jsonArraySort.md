# $jsonArraySort

`$jsonArraySort` sorts a JSON array in ascending order. Numbers are sorted from lowest to highest. Strings are sorted by their ASCII/Unicode values, with uppercase letters coming before lowercase.

---

## Syntax

```
$jsonArraySort[Key;...]
```

- `Key`: one or more keys forming the path to the array.

---

## What happens

1. `$jsonParse` loads the JSON object.
2. `$jsonArraySort` sorts the array at the given key path in ascending order.
3. Nothing is returned. Use `$json` or `$jsonJoinArray` to see the sorted result.

---

## Example 1: Sort a number array

```
$nomention
$jsonParse[{"scores":[50,10,90,30,70\]}]
$jsonArraySort[scores]
$jsonJoinArray[scores;, ]
```

What happens:

1. `$jsonParse` loads the object.
2. `$jsonArraySort[scores]` sorts the numbers ascending.
3. `$jsonJoinArray` displays the result.

Output:
```
10, 30, 50, 70, 90
```

---

## Example 2: Sort a mixed array

```
$nomention
$jsonParse[{"data":["banana",10,"apple",2,"Apples",30\]}]
$jsonArraySort[data]
$jsonJoinArray[data;, ]
```

What happens:

1. `$jsonParse` loads the object.
2. `$jsonArraySort[data]` sorts it: numbers first, then strings by ASCII value (`Apples` before `apple` before `banana`).
3. `$jsonJoinArray` displays the result.

Output:
```
2, 10, 30, Apples, apple, banana
```

---

## Common uses

- **Leaderboards**: sort score arrays before displaying
- **Alphabetical lists**: sort string arrays like names or items
- **Normalising data**: sort before searching or comparing

---

## See also

- [$jsonArrayReverse](./$jsonArrayReverse.md): to reverse after sorting for descending order
- [$jsonJoinArray](./$jsonJoinArray.md): to display the sorted array as a string
- [$jsonArrayCount](./$jsonArrayCount.md): to check how many elements are in the array
