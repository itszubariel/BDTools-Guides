# Reading a TextSplit Variable

Once your variable is set up, every command that needs its data starts the same way: split the variable, then read the slots you need.

---

## The pattern

```
$textSplit[$getVar[VARIABLE;$authorID];.]
```

This loads the user's variable from storage and splits it by `.` into its individual slots. After this line, `$splitText[1]` gives you index 1, `$splitText[2]` gives you index 2, and so on.

Always put this at the very top of any command that uses the variable.

---

## Reading a single slot

```
$textSplit[$getVar[ECONOMY;$authorID];.]
$splitText[1]
```

`$splitText[1]` returns the value at index 1, which in the economy setup is the user's money.

---

## Reading multiple slots

```
$textSplit[$getVar[ECONOMY;$authorID];.]
Money: $splitText[1]
Bank: $splitText[2]
```

You can call `$splitText` as many times as you need after one `$textSplit`. The split stays in memory for the duration of the command.

---

## Example 1: Display a user's balance

```
$nomention
$textSplit[$getVar[ECONOMY;$mentioned[1;yes]];.]
Balance: $numberSeparator[$splitText[1]]
Bank: $numberSeparator[$splitText[2]] / $numberSeparator[$splitText[3]]
```

What happens:

1. `$textSplit` loads and splits the mentioned user's `ECONOMY` variable.
2. `$splitText[1]` reads their money, `$splitText[2]` reads their bank, `$splitText[3]` reads their bank limit.
3. `$numberSeparator` formats the numbers with commas for readability.

Output for a user with 1500 money, 300 bank, and 1000 bank limit:
```
Balance: 1,500
Bank: 300 / 1,000
```

---

## Example 2: Display level and xp

```
$nomention
$textSplit[$getVar[ECONOMY;$authorID];.]
Level: $splitText[6]
XP: $splitText[4] / $splitText[5]
```

What happens:

1. `$textSplit` splits the variable.
2. `$splitText[6]` reads the level slot, `$splitText[4]` reads current xp, `$splitText[5]` reads required xp.

Output for a user at level 3 with 40 xp out of 300 required:
```
Level: 3
XP: 40 / 300
```

---

## Common uses

- **Balance commands**: display money, bank, and bank limit at once
- **Profile commands**: show level, xp, and other stats from one variable
- **Condition checks**: read a slot value inside `$if` before deciding what to do

---

## See also

- [Setting up](./setup.md): how to design and create the variable
- [Writing values](./writing.md): how to edit slots and save changes back
