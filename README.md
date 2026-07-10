# BDTools Guides

A collection of beginner-friendly guides to BDFD functions, hosted at [guides.bdtools.xyz](https://guides.bdtools.xyz).

Each guide lives in its own folder and covers a specific area of BDFD. Every function page explains what the function does, its exact syntax, examples, common uses, and related functions to check next.

---

## Guides

### [HTTP Guide](http-guide/) · [guides.bdtools.xyz/http](https://guides.bdtools.xyz/http)

A guide to the HTTP functions in BDFD. Learn to make API requests, handle responses, and manage headers.

**10 functions** across 3 categories:

| Category | Functions |
|---|---|
| Requests | `$httpGet`, `$httpPost`, `$httpPut`, `$httpPatch`, `$httpDelete` |
| Headers | `$httpAddHeader`, `$httpRemoveHeader`, `$httpGetHeader` |
| Responses | `$httpResult`, `$httpStatus` |

---

### [Components V2 Guide](compv2-guide/) · [guides.bdtools.xyz/compv2](https://guides.bdtools.xyz/compv2)

A guide to the Components V2 functions in BDFD. Learn to build structured messages using containers, sections, buttons, select menus, galleries, and more.

**14 functions** across 3 categories:

| Category | Functions |
|---|---|
| Parents | `$addContainer`, `$addSection`, `$addActionRow`, `$addMediaGallery` |
| Display | `$addTextDisplay`, `$addSeparator`, `$addThumbnail`, `$addMediaGalleryItem` |
| Interactive | `$addButtonCV2`, `$addStringSelect`, `$addStringSelectOption`, `$addUserSelect`, `$addRoleSelect`, `$addMentionableSelect` |

---

### [Text Splitting Guide](textsplit-guide/) · [guides.bdtools.xyz/textsplit](https://guides.bdtools.xyz/textsplit)

A guide to the text splitting functions in BDFD. Learn to split text into parts, read and modify individual elements, and use text splitting with variables.

**7 functions** across 2 categories, plus a Variables section:

| Category | Functions |
|---|---|
| Core | `$textSplit`, `$splitText`, `$getTextSplitLength`, `$getTextSplitIndex` |
| Modifiers | `$joinSplitText`, `$removeSplitTextElement`, `$editSplitText` |

---

### [JSON Guide](json-guide/) · [guides.bdtools.xyz/json](https://guides.bdtools.xyz/json)

A guide to the JSON functions in BDFD. Learn to parse, read, write, and work with JSON objects and arrays, and store structured data in variables.

**19 functions** across 2 categories, plus a Variables section:

| Category | Functions |
|---|---|
| Core | `$jsonParse`, `$json`, `$jsonSet`, `$jsonSetString`, `$jsonUnset`, `$jsonClear`, `$jsonExists`, `$jsonStringify`, `$jsonPretty` |
| Array | `$jsonArray`, `$jsonArrayCount`, `$jsonArrayIndex`, `$jsonArrayAppend`, `$jsonArrayPop`, `$jsonArrayShift`, `$jsonArrayUnshift`, `$jsonArraySort`, `$jsonArrayReverse`, `$jsonJoinArray` |

---

## Repository structure

```
BDTools-Guides/
├── http-guide/           # HTTP guide
├── compv2-guide/         # Components V2 guide
├── textsplit-guide/      # Text Splitting guide
└── json-guide/           # JSON guide
```

Each guide folder contains:
- Markdown source files organised by category
- A `web/` folder with the generated HTML pages
- Its own `scripts/convert.py` to regenerate HTML from markdown (gitignored)

---

## Source accuracy

> All syntax shown across these guides is checked against BDFD's **official wiki** and **official function list**.
