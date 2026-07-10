# $splitText

`$splitText` returns a single element from the current text split by its index. You always call `$textSplit` first to create the split, then use `$splitText` to read one of the pieces.

---

## Syntax

```
$splitText[Index]
```

- `Index`: the position of the element to return. Must be a positive integer, `<`, or `>`.
  - `<` returns the **first** element.
  - `>` returns the **last** element.
  - A number (e.g. `2`) returns the element at that position.

---

## What happens

1. `$textSplit` creates the split and stores the elements.
2. `$splitText[Index]` looks up the element at the given position and returns it.

Indexes start at `1`. If you split `hello world !` by spaces, index `1` is `hello`, index `2` is `world`, and index `3` is `!`.

---

## Example 1: Get a specific element

```
$nomention
$textSplit[hello world !; ]
$splitText[2]
```

What happens:

1. `$textSplit` splits `hello world !` by spaces into three elements.
2. `$splitText[2]` returns the second one.

Output:
```
world
```

---

## Example 2: First and last shortcuts

```
$nomention
$textSplit[hello world !; ]
> $splitText[<]
> $splitText[>]
```

What happens:

1. `$textSplit` splits the string into `hello`, `world`, `!`.
2. `$splitText[<]` returns the first element.
3. `$splitText[>]` returns the last element.

Output:
```
> hello
> !
```

---

## Common uses

- **Reading command arguments**: `$splitText[1]` for the first argument, `$splitText[2]` for the second
- **Getting the first or last item** from a list without knowing its full length
- **Looping through elements** by incrementing the index

---

## See also

- [$textSplit](./$textSplit.md): must be called first to create the split
- [$getTextSplitLength](./$getTextSplitLength.md): to find out how many elements exist
- [$getTextSplitIndex](./$getTextSplitIndex.md): to find the index of a specific value
