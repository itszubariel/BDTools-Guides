# Setting Up a TextSplit Variable

A TextSplit variable is a single BDFD variable that holds multiple values at once. Instead of creating one variable per piece of data, you pack all the values into one string separated by a character of your choice, then use `$textSplit` to split them apart whenever you need them.

---

## Why use this

BDFD has a limit on how many variables a bot can have. By storing multiple values inside one variable you can work around that limit and keep related data together. A user's `money`, `bank`, `bank limit`, `xp`, `required xp`, and `level` can all live in a single variable.

---

## How it works

You choose a separator, something that will never appear naturally in your values. A dot `.` is the most common choice. You then set the variable's default value as a list of your slots, each separated by that character.

For a six-slot economy variable the default value looks like this:

```
0.0.0.0.0.0
```

Each `0` is one slot. The slots in order are:

| Index | Slot |
|---|---|
| 1 | money |
| 2 | bank |
| 3 | bank limit |
| 4 | xp |
| 5 | required xp |
| 6 | level |

You can name the slots anything and add as many as you need. Just add another `.0` for each new slot.

---

## Rules to follow

**Use a separator that never appears in your values.** If your values are numbers, `.` works fine. If your values are words or sentences, pick something like `;` or `|`.

**Do not add the separator at the start or end of the value.** `0.0.0` is correct. `.0.0.0.` is wrong and will create empty slots at positions 1 and 4.

**Watch the character limit.** Global variables in BDFD have a maximum of 499 characters. With a `.` separator and 6 slots, each slot can hold roughly 82 characters. With more slots or longer values, plan accordingly.

---

## Example 1: Create a six-slot variable

Go to the BDFD app, create a new variable named `ECONOMY`, and set its default value to:

```
0.0.0.0.0.0
```

That creates six slots all starting at `0`. The indices are fixed by position, so index `1` is always money, index `2` is always bank, and so on. You decide what each index means when you design the variable.

---

## Example 2: Create a two-slot variable for a simpler use case

Not every variable needs six slots. If you only need to track `coins` and `gems` for a user, create a variable named `WALLET` with default value:

```
0.0
```

Index `1` is coins, index `2` is gems. You can expand it later by adding more `.0` slots and updating the default value.

---

## Common uses

- **Economy systems**: pack money, bank, and bank limit into one variable
- **Levelling systems**: store xp, required xp, and level together
- **Inventory tracking**: store item counts in a single variable per user

---

## See also

- [Reading values](./reading.md): how to split the variable and read a slot
- [Writing values](./writing.md): how to edit a slot and save the variable back
