# $getTextSplitLength

`$getTextSplitLength` returns the total number of elements in the current text split. Use it after `$textSplit` to know how many pieces the string was broken into.

---

## Syntax

```
$getTextSplitLength
```

No parameters. It reads whatever split is currently stored in memory.

---

## What happens

1. `$textSplit` creates the split and stores the elements.
2. `$getTextSplitLength` counts those elements and returns the number.

---

## Example 1: Count words in a message

```
$nomention
$textSplit[$message; ]
Word count: $getTextSplitLength
```

What happens:

1. `$textSplit` splits the user's message by spaces.
2. `$getTextSplitLength` returns the number of words.

If the user runs `!example hello world !`:
```
Word count: 3
```

---

## Example 2: Use the length to reach the last element

```
$nomention
$textSplit[one-two-three-four;-]
Last: $splitText[$getTextSplitLength]
```

What happens:

1. `$textSplit` splits the string into four elements.
2. `$getTextSplitLength` returns `4`, which is passed directly into `$splitText`.
3. `$splitText[4]` returns the fourth element.

Output:
```
Last: four
```

---

## Common uses

- **Counting words** in a message
- **Counting characters** when using an empty separator with `$textSplit`
- **Validation**: checking whether the user provided the right number of arguments

---

## See also

- [$textSplit](./$textSplit.md): must be called first to create the split
- [$splitText](./$splitText.md): to read elements by index
- [$joinSplitText](../modifiers/$joinSplitText.md): to reassemble the elements into a string
