# $jsonArrayPop

`$jsonArrayPop` removes the last element from a JSON array and returns it.

---

## Syntax

```
$jsonArrayPop[Key;...]
```

- `Key`: one or more keys forming the path to the array.

---

## What happens

1. `$jsonParse` loads the JSON object.
2. `$jsonArrayPop` removes the last element from the array and returns its value.
3. The array is one element shorter after this call.

---

## Example 1: Pop the last element

```
$nomention
$jsonParse[{"music":["Paranoid","Ping! 2","Tokyo"\]}]
Removed: $jsonArrayPop[music]
Remaining: $jsonJoinArray[music;, ]
```

What happens:

1. `$jsonParse` loads the object.
2. `$jsonArrayPop[music]` removes `Tokyo` from the end and returns it.
3. `$jsonJoinArray` shows what is left.

Output:
```
Removed: Tokyo
Remaining: Paranoid, Ping! 2
```

---

## Example 2: Pop until empty

```
$nomention
$jsonParse[{"stack":["first","second","third"\]}]
> $jsonArrayPop[stack]
> $jsonArrayPop[stack]
Remaining: $jsonJoinArray[stack;, ]
```

What happens:

1. `$jsonParse` loads the object.
2. The first `$jsonArrayPop` removes and returns `third`.
3. The second removes and returns `second`.
4. `$jsonJoinArray` shows what is left.

Output:
```
> third
> second
Remaining: first
```

---

## Common uses

- **Queue systems**: process and remove the most recently added item
- **Undo functionality**: pop the last item from a history list
- **Reducing a list**: remove trailing entries one at a time

---

## See also

- [$jsonArrayShift](./$jsonArrayShift.md): to remove the first element instead
- [$jsonArrayAppend](./$jsonArrayAppend.md): to add elements to the end
- [$jsonJoinArray](./$jsonJoinArray.md): to display the remaining array after popping
