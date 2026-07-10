# $jsonArrayUnshift

`$jsonArrayUnshift` adds a value to the front of a JSON array. All existing elements shift up by one position.

---

## Syntax

```
$jsonArrayUnshift[Key;...;Value]
```

- `Key`: one or more keys forming the path to the array.
- `Value`: the value to add at the front.

---

## What happens

1. `$jsonParse` loads the JSON object.
2. `$jsonArrayUnshift` inserts the value at index `0` of the array at the given key path.
3. All existing elements move up by one index.
4. Nothing is returned. Use `$jsonJoinArray` or `$json` to see the result.

---

## Example 1: Add to the front of an array

```
$nomention
$jsonParse[{"music":["Ping! 2","Tokyo"\]}]
$jsonArrayUnshift[music;Paranoid]
$jsonJoinArray[music;, ]
```

What happens:

1. `$jsonParse` loads the object.
2. `$jsonArrayUnshift[music;Paranoid]` inserts `Paranoid` at the front.
3. `$jsonJoinArray` shows the result.

Output:
```
Paranoid, Ping! 2, Tokyo
```

---

## Example 2: Prepend multiple values

```
$nomention
$jsonParse[{"queue":["third"\]}]
$jsonArrayUnshift[queue;second]
$jsonArrayUnshift[queue;first]
$jsonJoinArray[queue;, ]
```

What happens:

1. `$jsonParse` loads the object with a single-item array.
2. `$jsonArrayUnshift[queue;second]` inserts `second` at position `0`.
3. `$jsonArrayUnshift[queue;first]` inserts `first` at position `0`.
4. `$jsonJoinArray` shows the result.

Output:
```
first, second, third
```

---

## Common uses

- **Priority queues**: insert high-priority items at the front
- **Reverse chronological logs**: add new entries to the top of a list
- **Prepending values**: add something before all existing elements

---

## See also

- [$jsonArrayAppend](./$jsonArrayAppend.md): to add to the end instead
- [$jsonArrayShift](./$jsonArrayShift.md): to remove from the front
- [$jsonJoinArray](./$jsonJoinArray.md): to display the array as a string
