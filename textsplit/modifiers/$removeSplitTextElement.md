# $removeSplitTextElement

`$removeSplitTextElement` removes one element from the current text split by its index. The remaining elements shift down to fill the gap.

---

## Syntax

```
$removeSplitTextElement[Index]
```

- `Index`: the position of the element to remove. Must be a positive integer.

---

## What happens

1. `$textSplit` creates the split and stores the elements.
2. `$removeSplitTextElement` removes the element at the given index.
3. All elements after it shift down by one (what was index `4` becomes `3`, and so on).
4. Nothing is returned, use `$joinSplitText` or `$splitText` to work with the updated split.

---

## Example 1: Remove the last element

```
$nomention
$textSplit[hello-world-!;-]
$removeSplitTextElement[3]
$joinSplitText[-]
```

What happens:

1. `$textSplit` creates `hello` (1), `world` (2), `!` (3).
2. `$removeSplitTextElement[3]` removes `!`.
3. `$joinSplitText[-]` reassembles the remaining elements.

Output:
```
hello-world
```

---

## Example 2: Remove a middle element

```
$nomention
$textSplit[a,b,c,d;,]
$removeSplitTextElement[2]
$joinSplitText[,]
```

What happens:

1. `$textSplit` creates `a` (1), `b` (2), `c` (3), `d` (4).
2. `$removeSplitTextElement[2]` removes `b`. `c` shifts to index 2, `d` to index 3.
3. `$joinSplitText[,]` rejoins the remaining elements.

Output:
```
a,c,d
```

---

## Common uses

- **Filtering out a value** from a list before displaying it
- **Stripping unwanted entries** at the start or end of a split
- **Building modified lists** before passing them to `$joinSplitText`

---

## See also

- [$textSplit](../core/$textSplit.md): must be called first to create the split
- [$joinSplitText](./$joinSplitText.md): to reassemble the split after removing an element
- [$getTextSplitIndex](../core/$getTextSplitIndex.md): to find the index of a value before removing it
- [$editSplitText](./$editSplitText.md): to replace an element instead of removing it
