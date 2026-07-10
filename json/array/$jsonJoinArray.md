# $jsonJoinArray

`$jsonJoinArray` joins all elements of a JSON array into a single string using a separator you specify.

---

## Syntax

```
$jsonJoinArray[Key;...;Separator]
```

- `Key`: one or more keys forming the path to the array.
- `Separator`: the string to place between each element.

Returns empty if the key does not exist, the value is null, no `$jsonParse` or `$jsonSet` was called, or `$jsonClear` was called.

---

## What happens

1. `$jsonParse` loads the JSON object.
2. `$jsonJoinArray` takes all elements in the array at the given key path and combines them into one string, placing the separator between each pair.

---

## Example 1: Join with a comma

```
$nomention
$jsonParse[{"music":["Paranoid","Ping! 2","Tokyo"\]}]
$jsonJoinArray[music;, ]
```

What happens:

1. `$jsonParse` loads the object.
2. `$jsonJoinArray[music;, ]` joins all three songs with `, ` between them.

Output:
```
Paranoid, Ping! 2, Tokyo
```

---

## Example 2: Join with a newline for a formatted list

```
$nomention
$jsonParse[{"items":["sword","shield","potion"\]}]
Your inventory:
$jsonJoinArray[items;
]
```

What happens:

1. `$jsonParse` loads the object.
2. `$jsonJoinArray` joins items with a newline separator, putting each on its own line.

Output:
```
Your inventory:
sword
shield
potion
```

---

## Common uses

- **Displaying arrays**: convert an array to a readable string for a bot response
- **Formatted lists**: join with newlines, commas, or any custom separator
- **Showing results**: display the array after sorting, reversing, or removing elements

---

## See also

- [$jsonArrayAppend](./$jsonArrayAppend.md): to add elements before joining
- [$jsonArraySort](./$jsonArraySort.md): to sort the array before joining
- [$jsonArrayCount](./$jsonArrayCount.md): to count elements in the same array
