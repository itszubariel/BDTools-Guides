# $getTextSplitIndex

`$getTextSplitIndex` searches the current text split for a specific value and returns its index. If the value is not found, it returns `-1`.

---

## Syntax

```
$getTextSplitIndex[Value]
```

- `Value`: the string to search for in the split. Can be empty.

---

## What happens

1. `$textSplit` creates the split and stores the elements.
2. `$getTextSplitIndex` scans each element in order.
3. If a match is found, it returns that element's index (starting from `1`).
4. If no match is found, it returns `-1`.

---

## Example 1: Find a known value

```
$nomention
$textSplit[hello_world_!;_]
$getTextSplitIndex[world]
```

What happens:

1. `$textSplit` splits the string into `hello` (1), `world` (2), `!` (3).
2. `$getTextSplitIndex[world]` finds `world` at index `2` and returns it.

Output:
```
2
```

---

## Example 2: Search for user input

```
$nomention
$textSplit[hello_world_!;_]
$getTextSplitIndex[$message]
```

What happens:

1. `$textSplit` splits the string into three elements.
2. `$getTextSplitIndex` searches for whatever the user typed.

If the user runs `!example world`:
```
2
```

If the user runs `!example bdfd`:
```
-1
```

---

## Common uses

- **Checking if a value exists** in a split before reading or editing it
- **Finding a position** to use with `$editSplitText` or `$removeSplitTextElement`
- **Validating user input** against a list of allowed values

---

## See also

- [$textSplit](./$textSplit.md): must be called first to create the split
- [$splitText](./$splitText.md): to get an element by index
- [$editSplitText](../modifiers/$editSplitText.md): to replace an element by index
- [$removeSplitTextElement](../modifiers/$removeSplitTextElement.md): to remove an element by index
