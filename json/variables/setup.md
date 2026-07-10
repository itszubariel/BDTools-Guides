# Setting Up a JSON Variable

A JSON variable is a single BDFD variable that holds multiple named values at once. Instead of creating one variable per piece of data, you store everything as a JSON object inside one variable, then use `$jsonParse` and `$json` to read individual fields whenever you need them.

---

## Why use this

BDFD has a limit on how many variables a bot can have. By storing multiple values inside one variable as JSON you can work around that limit and keep related data together. A user's `cash`, `xp`, `level`, and `lvlR` can all live in a single variable.

Unlike text splitting, JSON variables use named keys instead of numbered positions. This makes them easier to read and extend without breaking existing data.

---

## How it works

You create a variable in the BDFD app and set its default value to an empty JSON object:

```
{}
```

Then on the user's first command you initialise it with `$jsonSetString`, setting each field to a starting value. From that point on every command loads the variable with `$jsonParse`, reads or updates fields, then saves it back with `$setVar[NAME;$jsonStringify]`.

---

## Rules to follow

**Always use `$jsonSetString` for numbers.** BDFD's JSON number type loses precision on large integers. Storing as a string avoids this completely.

**Always save with `$setVar[NAME;$jsonStringify]`.** After any edit, `$jsonStringify` reassembles the full object. Forgetting this means your changes are lost.

**Watch the character limit.** Global variables in BDFD have a maximum of 499 characters. Each key name, value, and the JSON punctuation all count toward this. Keep key names short.

---

## Example 1: Set up a stats variable

In the BDFD app, create a variable named `STATS` with default value `{}`. Then initialise it on first use:

```
$nomention
$jsonParse[$getVar[STATS;$authorID]]
$jsonSetString[cash;0]
$jsonSetString[xp;0]
$jsonSetString[lvl;0]
$jsonSetString[lvlR;100]
$setVar[STATS;$jsonStringify;$authorID]
Done.
```

What happens:

1. `$jsonParse` loads the empty object.
2. Four `$jsonSetString` calls set each field to its starting value.
3. `$setVar[$jsonStringify]` saves the populated object back.

The variable now holds `{"cash":"0","xp":"0","lvl":"0","lvlR":"100"}`.

---

## Example 2: Set up a separate items variable

You can use multiple JSON variables for different categories of data. Create a variable named `ITEMS` with default value `{}`:

```
$nomention
$jsonParse[$getVar[ITEMS;$authorID]]
$jsonSetString[apples;0]
$jsonSetString[oranges;0]
$jsonSetString[pears;0]
$setVar[ITEMS;$jsonStringify;$authorID]
Done.
```

Splitting stats and items into separate variables keeps each one small and under the character limit.

---

## Common uses

- **Economy systems**: store cash, xp, level, and multipliers in one variable
- **Inventory systems**: track item counts in a separate items variable
- **Profile data**: keep all user stats together under named keys

---

## See also

- [Reading values](./reading.md): how to load the variable and read individual fields
- [Writing values](./writing.md): how to update fields and save changes back
