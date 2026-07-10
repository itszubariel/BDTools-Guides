# Writing to a JSON Variable

Reading fields is only half the picture. When a command needs to change a value, you update the field with `$jsonSetString`, then save the whole variable back to storage with `$setVar` using `$jsonStringify` to reassemble it.

---

## The pattern

Every write follows this three-step structure:

```
$jsonParse[$getVar[STATS;$authorID]]
$jsonSetString[field;NewValue]
$setVar[STATS;$jsonStringify;$authorID]
```

1. Parse the variable to load it into memory.
2. Update the field you want to change.
3. Save it back: `$jsonStringify` reassembles the full object and `$setVar` writes it to storage.

---

## Editing multiple fields at once

You can call `$jsonSetString` multiple times before saving. Only one `$setVar` is needed at the end:

```
$jsonParse[$getVar[STATS;$authorID]]
$jsonSetString[cash;NewCashValue]
$jsonSetString[xp;NewXpValue]
$setVar[STATS;$jsonStringify;$authorID]
```

---

## Example 1: Add cash to a user's balance

```
$nomention
$jsonParse[$getVar[STATS;$authorID]]
$jsonSetString[cash;$calculate[$json[cash]+100]]
$setVar[STATS;$jsonStringify;$authorID]
You received 100 coins. Balance: $json[cash]
```

What happens:

1. `$jsonParse` loads the variable.
2. `$jsonSetString[cash;...]` sets `cash` to current cash plus 100 using `$calculate`.
3. `$setVar[$jsonStringify]` saves the updated object.
4. `$json[cash]` reads the updated value still held in memory for the output line.

---

## Example 2: Deduct cash and update XP at once

```
$nomention
$jsonParse[$getVar[STATS;$authorID]]
$onlyIf[$json[cash]>=50;You need at least 50 coins.]
$jsonSetString[cash;$calculate[$json[cash]-50]]
$jsonSetString[xp;$calculate[$json[xp]+10]]
$setVar[STATS;$jsonStringify;$authorID]
You spent 50 coins and gained 10 XP.
```

What happens:

1. `$jsonParse` loads the variable.
2. `$onlyIf` checks the user has enough cash before doing anything.
3. `$jsonSetString[cash;...]` subtracts 50 from cash.
4. `$jsonSetString[xp;...]` adds 10 to xp.
5. One `$setVar[$jsonStringify]` saves both changes at once.

---

## Common uses

- **Any command that changes a value**: cash, xp, level, item counts
- **Initialising fields**: set a field to a default if it is missing before the command runs
- **Chained edits**: update several fields in one command with a single save at the end

---

## See also

- [Setting up](./setup.md): how to design and initialise the variable
- [Reading values](./reading.md): how to read fields before editing them
