# $jsonArrayShift

`$jsonArrayShift` removes the first element from a JSON array and returns it.

---

## Syntax

```
$jsonArrayShift[Key;...]
```

- `Key`: one or more keys forming the path to the array.

---

## What happens

1. `$jsonParse` loads the JSON object.
2. `$jsonArrayShift` removes the first element from the array and returns its value.
3. All remaining elements shift down by one position.

---

## Example 1: Shift the first element

```
$nomention
$jsonParse[{"music":["Paranoid","Ping! 2","Tokyo"\]}]
Removed: $jsonArrayShift[music]
Remaining: $jsonJoinArray[music;, ]
```

What happens:

1. `$jsonParse` loads the object.
2. `$jsonArrayShift[music]` removes `Paranoid` from the front and returns it.
3. `$jsonJoinArray` shows what is left.

Output:
```
Removed: Paranoid
Remaining: Ping! 2, Tokyo
```

---

## Example 2: Shift until empty

```
$nomention
$jsonParse[{"queue":["first","second","third"\]}]
> $jsonArrayShift[queue]
> $jsonArrayShift[queue]
Remaining: $jsonJoinArray[queue;, ]
```

What happens:

1. `$jsonParse` loads the object.
2. The first `$jsonArrayShift` removes and returns `first`.
3. The second removes and returns `second`.
4. `$jsonJoinArray` shows what is left.

Output:
```
> first
> second
Remaining: third
```

---

## Common uses

- **Queue systems**: process items in order from the front (FIFO)
- **Consuming lists**: work through a list from the beginning
- **Removing old entries**: drop the oldest item from a history array

---

## See also

- [$jsonArrayPop](./$jsonArrayPop.md): to remove the last element instead
- [$jsonArrayUnshift](./$jsonArrayUnshift.md): to add an element to the front
- [$jsonJoinArray](./$jsonJoinArray.md): to display the remaining array after shifting
