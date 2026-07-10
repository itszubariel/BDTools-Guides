# Reading a JSON Variable

Once your variable is set up, every command that needs its data starts the same way: parse the variable, then read the fields you need.

---

## The pattern

```
$jsonParse[$getVar[STATS;$authorID]]
```

This loads the user's variable from storage and parses it into a JSON object in memory. After this line, `$json[cash]` gives you the `cash` field, `$json[xp]` gives you `xp`, and so on.

Always put this at the very top of any command that uses the variable.

---

## Reading a single field

```
$jsonParse[$getVar[STATS;$authorID]]
$json[cash]
```

`$json[cash]` returns the value stored at the `cash` key.

---

## Reading multiple fields

```
$jsonParse[$getVar[STATS;$authorID]]
Cash: $json[cash]
Level: $json[lvl]
```

You can call `$json` as many times as you need after one `$jsonParse`. The object stays in memory for the duration of the command.

---

## Example 1: Display a user's balance

```
$nomention
$jsonParse[$getVar[STATS;$mentioned[1;yes]]]
Cash: $numberSeparator[$json[cash]]
Level: $json[lvl]
XP: $json[xp] / $json[lvlR]
```

What happens:

1. `$jsonParse` loads the mentioned user's `STATS` variable.
2. `$json[cash]` reads their cash, `$json[lvl]` reads their level, and so on.
3. `$numberSeparator` formats the cash with commas for readability.

Output for a user with 1500 cash at level 3 with 40 xp out of 200 required:
```
Cash: 1,500
Level: 3
XP: 40 / 200
```

---

## Example 2: Read from a separate items variable

```
$nomention
$jsonParse[$getVar[ITEMS;$authorID]]
Apples: $json[apples]
Oranges: $json[oranges]
Pears: $json[pears]
```

What happens:

1. `$jsonParse` loads the `ITEMS` variable.
2. Each `$json` call reads the count for that item.

Output for a user with 3 apples, 1 orange, and 0 pears:
```
Apples: 3
Oranges: 1
Pears: 0
```

---

## Common uses

- **Balance commands**: display cash and bank from one variable
- **Profile commands**: show level, xp, and other stats together
- **Condition checks**: read a field inside `$if` before deciding what to do

---

## See also

- [Setting up](./setup.md): how to design and initialise the variable
- [Writing values](./writing.md): how to update fields and save changes back
