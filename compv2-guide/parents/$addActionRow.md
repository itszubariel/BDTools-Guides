# $addActionRow

`$addActionRow` creates an **action row** component. Action rows hold interactive components like `$addButtonCV2`, `$addStringSelect`, `$addUserSelect`, `$addRoleSelect`, and `$addMentionableSelect`. Action rows can go inside containers.

---

## Syntax

```
$addActionRow[ID;(Container ID)]
```

- `ID`: a name to identify this action row. Buttons and select menus use this ID to attach themselves.
- `Container ID`: optional ID of the container to put this action row inside.

---

## What happens

1. `$addActionRow` creates an action row with the given ID.
2. You add buttons or select menus to it using `$addButtonCV2` or one of the select menu functions.
3. The action row displays those components in a horizontal row.

---

## Example 1: Action row with a select menu

```
$addActionRow[roles]
$addRoleSelect[roleMenu;Pick a role;1;1;;roles]
```

**Result:**

![Action row with role select menu](../images/addActionRow-1.png)

What happens:

1. `$addActionRow` creates an action row.
2. `$addRoleSelect` adds a role select menu to the action row.

The message shows an action row with a role select menu.

---

## Example 2: Action row with buttons

```
$addActionRow[buttons]
$addButtonCV2[helloBtn;Hello;primary;;;buttons]
$addButtonCV2[byeBtn;Goodbye;secondary;;;buttons]
```

**Result:**

![Action row with buttons example](../images/addActionRow-2.png)

What happens:

1. `$addActionRow` creates an action row.
2. Two `$addButtonCV2` calls add two buttons to the action row.

The message shows an action row with two buttons side by side.

---

## Common uses

- **Holding buttons** that users click to trigger actions
- **Holding select menus** for choosing users, roles, or options
- **Organizing interactive components** into horizontal rows

---

## See also

- [$addContainer]($addContainer.md): to create a container for the action row
- [$addButtonCV2](../interactive/$addButtonCV2.md): to add a button to the action row
- [$addStringSelect](../interactive/$addStringSelect.md): to add a string select menu
- [$addUserSelect](../interactive/$addUserSelect.md): to add a user select menu
- [$addRoleSelect](../interactive/$addRoleSelect.md): to add a role select menu
- [$addMentionableSelect](../interactive/$addMentionableSelect.md): to add a mentionable select menu
