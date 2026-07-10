# $editSplitText

`$editSplitText` replaces the element at a given index with a new value. The rest of the split stays unchanged.

---

## Syntax

```
$editSplitText[Index;Value]
```

- `Index`: the position of the element to replace. Must be a positive integer.
- `Value`: the new value to put at that index.

---

## What happens

1. `$textSplit` creates the split and stores the elements.
2. `$editSplitText` replaces the element at the given index with the new value.
3. All other elements remain in place.
4. Nothing is returned, use `$joinSplitText` or `$splitText` to work with the updated split.

---

## Example 1: Replace one element

```
$nomention
$textSplit[hello-world-!;-]
$editSplitText[2;bdfd]
$joinSplitText[-]
```

What happens:

1. `$textSplit` creates `hello` (1), `world` (2), `!` (3).
2. `$editSplitText[2;bdfd]` replaces `world` with `bdfd`.
3. `$joinSplitText[-]` reassembles the split.

Output:
```
hello-bdfd-!
```

---

## Example 2: Replace using user input

```
$nomention
$textSplit[red,green,blue;,]
$editSplitText[2;$message]
$joinSplitText[,]
```

What happens:

1. `$textSplit` creates `red` (1), `green` (2), `blue` (3).
2. `$editSplitText[2;$message]` replaces `green` with whatever the user typed.
3. `$joinSplitText[,]` reassembles the split.

If the user runs `!example yellow`:
```
red,yellow,blue
```

---

## Common uses

- **Updating one value in a list** without rebuilding the whole thing
- **Normalizing data**: replacing a placeholder or shorthand with a full value
- **Combining with `$getTextSplitIndex`**: find the position of a value, then replace it

---

## See also

- [$textSplit](../core/$textSplit.md): must be called first to create the split
- [$joinSplitText](./$joinSplitText.md): to reassemble the split after editing
- [$getTextSplitIndex](../core/$getTextSplitIndex.md): to find the index of a value before editing it
- [$removeSplitTextElement](./$removeSplitTextElement.md): to remove an element instead of replacing it
