# $joinSplitText

`$joinSplitText` joins all current split elements back into a single string using a separator you specify. You can use the same separator as the original split, or a completely different one.

---

## Syntax

```
$joinSplitText[Separator]
```

- `Separator`: the string to place between each element. Can be empty to join without any separator.

---

## What happens

1. `$textSplit` creates the split and stores the elements.
2. `$joinSplitText` takes all elements in their current order and combines them into one string, placing the separator between each pair.
3. The combined string is returned.

If elements have been removed or edited since `$textSplit` was called, `$joinSplitText` reflects those changes.

---

## Example 1: Rejoin with a different separator

```
$nomention
$textSplit[hello#world#!;#]
$joinSplitText[ ]
```

What happens:

1. `$textSplit` splits the string into `hello`, `world`, `!`.
2. `$joinSplitText[ ]` rejoins them using a space instead of `#`.

Output:
```
hello world !
```

---

## Example 2: Rejoin after removing an element

```
$nomention
$textSplit[hello-world-!;-]
$removeSplitTextElement[3]
$joinSplitText[-]
```

What happens:

1. `$textSplit` creates three elements: `hello`, `world`, `!`.
2. `$removeSplitTextElement[3]` removes `!`.
3. `$joinSplitText[-]` reassembles the remaining two elements.

Output:
```
hello-world
```

---

## Common uses

- **Rebuilding a string** after editing or removing elements
- **Changing the separator** of an existing split
- **Displaying all elements** at once with a custom separator (e.g. newlines)

---

## See also

- [$textSplit](../core/$textSplit.md): must be called first to create the split
- [$removeSplitTextElement](./$removeSplitTextElement.md): to remove an element before joining
- [$editSplitText](./$editSplitText.md): to replace an element before joining
