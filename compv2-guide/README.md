# BDFD Components V2 Guide

A beginner-friendly guide to **Components V2** in BDFD.

> 🌐 **[View the web version](https://guides.bdtools.xyz/compv2)**

---

## What this is about

**Components V2** is BDFD's newer message component system. It replaces the old `$addButton`, `$newSelectMenu`, and related functions with a more flexible, layout-based approach.

Instead of flat rows of buttons, Components V2 lets you build structured messages using **containers**, **sections**, **action rows**, **select menus**, **text displays**, **media galleries**, and more. Components can be nested inside other components, giving you full control over how your message looks and behaves.

With these functions you can build:

- **Role menus**: let users pick roles from select menus
- **Info panels**: combine text, thumbnails, and buttons in a single layout
- **Media galleries**: display multiple images and videos in one component
- **Ticket or form interfaces**: use action rows with buttons and select menus together

---

## How this guide is organized

Functions are grouped into three categories. Each category has its own folder, and each function has its own page.

**Parents**: components that hold children
- `$addContainer`, `$addSection`, `$addActionRow`, `$addMediaGallery`

**Display**: visual elements placed inside parents
- `$addTextDisplay`, `$addSeparator`, `$addThumbnail`, `$addMediaGalleryItem`

**Interactive**: elements users click or select from
- `$addButtonCV2`, `$addStringSelect`, `$addStringSelectOption`, `$addUserSelect`, `$addRoleSelect`, `$addMentionableSelect`

Every page explains:

- What the function does
- The exact **syntax** (how to write it)
- **What happens** when you call it
- One or two **simple examples** you can try
- **Common uses** for the function
- **Related functions** to check next

> Pick the function you need from the table below and click it.

---

## Functions

| Function | What it does |
|---|---|
| [$addContainer](parents/$addContainer.md) | Adds a container to hold other components |
| [$addSection](parents/$addSection.md) | Adds a section with an accessory button or thumbnail |
| [$addActionRow](parents/$addActionRow.md) | Adds an action row to hold buttons and select menus |
| [$addMediaGallery](parents/$addMediaGallery.md) | Adds a media gallery to hold images and videos |
| [$addTextDisplay](display/$addTextDisplay.md) | Adds a text display to containers or sections |
| [$addSeparator](display/$addSeparator.md) | Adds a visual separator between components |
| [$addThumbnail](display/$addThumbnail.md) | Adds a thumbnail image to a section |
| [$addMediaGalleryItem](display/$addMediaGalleryItem.md) | Adds an image or video to a media gallery |
| [$addButtonCV2](interactive/$addButtonCV2.md) | Adds a button to an action row or section |
| [$addStringSelect](interactive/$addStringSelect.md) | Adds a string select menu with custom options |
| [$addStringSelectOption](interactive/$addStringSelectOption.md) | Adds an option to a string select menu |
| [$addUserSelect](interactive/$addUserSelect.md) | Adds a user select menu |
| [$addRoleSelect](interactive/$addRoleSelect.md) | Adds a role select menu |
| [$addMentionableSelect](interactive/$addMentionableSelect.md) | Adds a mentionable select menu (users and roles) |

---

## Where to start

If you are **completely new** to Components V2, read these in order:

1. **[$addContainer](parents/$addContainer.md)**: the top-level container that holds everything.
2. **[$addTextDisplay](display/$addTextDisplay.md)**: the simplest display component to put inside a container.

Once you understand containers and text displays, move on to **sections** and **action rows** to add thumbnails, buttons, and select menus.

---

## Source accuracy

> All syntax shown in this guide is checked against BDFD's **official function list**.
