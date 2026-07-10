# Writing to a TextSplit Variable

Reading slots is only half the picture. When a command needs to change a value, you edit the slot with `$editSplitText`, then save the whole variable back to storage with `$setVar` using `$joinSplitText` to reassemble it.

---

## The pattern

Every write follows this three-step structure:

```
$textSplit[$getVar[VARIABLE;$authorID];.]
$editSplitText[Index;NewValue]
$setVar[VARIABLE;$joinSplitText[.];$authorID]
```

1. Split the variable to load it into memory.
2. Edit the slot you want to change.
3. Save it back: `$joinSplitText[.]` reassembles all slots with `.` and `$setVar` writes it to storage.

The separator inside `$joinSplitText` must match the separator you used in `$textSplit`. Using a different one will corrupt the variable.

---

## Editing multiple slots at once

You can call `$editSplitText` multiple times before saving. Only one `$setVar` is needed at the end:

```
$textSplit[$getVar[VARIABLE;$authorID];.]
$editSplitText[1;NewMoneyValue]
$editSplitText[2;NewBankValue]
$setVar[VARIABLE;$joinSplitText[.];$authorID]
```

---

## Example 1: Add money to a user's balance

```
$nomention
$textSplit[$getVar[ECONOMY;$authorID];.]
$editSplitText[1;$sum[$splitText[1];100]]
$setVar[ECONOMY;$joinSplitText[.];$authorID]
You received 100 coins. Balance: $splitText[1]
```

What happens:

1. `$textSplit` loads and splits the variable.
2. `$editSplitText[1;...]` sets slot 1 (money) to current money plus 100.
3. `$setVar` saves the updated variable back.
4. `$splitText[1]` still refers to the updated value in memory for the output line.

---

## Example 2: Move money from balance to bank (deposit)

```
$nomention
$textSplit[$getVar[ECONOMY;$authorID];.]
$onlyIf[$message>0;Amount must be greater than 0.]
$onlyIf[$message<=$splitText[1];You do not have that much money.]
$onlyIf[$sum[$splitText[2];$message]<=$splitText[3];That would exceed your bank limit.]
$editSplitText[1;$sub[$splitText[1];$message]]
$editSplitText[2;$sum[$splitText[2];$message]]
$setVar[ECONOMY;$joinSplitText[.];$authorID]
Deposited $message coins into the bank.
```

What happens:

1. `$textSplit` loads the variable.
2. Three `$onlyIf` checks validate the input. The third one is the important one: `$sum[$splitText[2];$message]` adds the current bank balance to the deposit amount and checks the total does not exceed the bank limit (slot 3). Without this, a user could deposit more than the limit allows.
3. `$editSplitText[1;...]` subtracts the amount from money (slot 1).
4. `$editSplitText[2;...]` adds the amount to bank (slot 2).
5. One `$setVar` saves both changes at once.

---

## Common uses

- **Any command that changes a value**: coins, bank, xp, level, inventory counts
- **Initialising slots**: check if a slot is `0` and set a proper default before the command runs
- **Chained edits**: update several slots in one command with a single save at the end

---

## See also

- [Setting up](./setup.md): how to design and create the variable
- [Reading values](./reading.md): how to read slots before editing them
