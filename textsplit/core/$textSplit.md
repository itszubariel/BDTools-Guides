# $textSplit

`$textSplit` splits a string by a given separator and stores the resulting elements temporarily. It is always the first step, every other text splitting function depends on this one having been called first.

---

## Syntax

```
$textSplit[Text;Separator]
```

- `Text`: the string to split.
- `Separator`: the character or string used to divide the text. If left empty, the text is split into individual characters.

---

## What happens

1. `$textSplit` takes the text you provide and breaks it apart at every occurrence of the separator.
2. Each piece is stored as a numbered element, starting from index `1`.
3. Nothing is returned visually, the split is held in memory. Use `$splitText`, `$getTextSplitLength`, or any other text split function to work with the result.

---

## Example 1: Split by a separator

```
$nomention
$textSplit[hello-world-!;-]
$splitText[2]
```

What happens:

1. `$textSplit` splits `hello-world-!` using `-` as the separator.
2. This creates three elements: `hello` (1), `world` (2), `!` (3).
3. `$splitText[2]` returns the second element.

Output:
```
world
```

---

## Example 2: Split by character (empty separator)

```
$nomention
$textSplit[$message;]
$getTextSplitLength
```

What happens:

1. The empty separator causes `$textSplit` to split every character individually.
2. `$getTextSplitLength` returns the total character count.

If the user runs `!example Hello`:
```
5
```

---

## Common uses

- **Parsing command arguments**: split `$message` by spaces to read individual arguments
- **Processing lists**: split comma-separated or hyphen-separated data
- **Counting characters**: use an empty separator to treat each character as an element

---

## See also

- [$splitText](./$splitText.md): to read a specific element from the split
- [$getTextSplitLength](./$getTextSplitLength.md): to count how many elements were created
- [$joinSplitText](../modifiers/$joinSplitText.md): to reassemble the elements into a string
