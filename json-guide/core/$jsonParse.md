# $jsonParse

`$jsonParse` parses a JSON string into an object and stores it in memory. It is always the first step, every other JSON function depends on this one having been called first.

---

## Syntax

```
$jsonParse[JSON string]
```

- `JSON string`: a valid JSON string to parse. Required.

---

## What happens

1. `$jsonParse` takes the JSON string you provide and converts it into an object held in memory.
2. Nothing is returned visually.
3. Use `$json`, `$jsonSet`, `$jsonExists`, or any other JSON function to work with the result.

---

## Example 1: Parse a simple object

```
$nomention
$jsonParse[{"username":"Zubariel","tag":"0001"}]
$json[username]
```

What happens:

1. `$jsonParse` parses the string into an object with two keys.
2. `$json[username]` retrieves the value at `username`.

Output:
```
Zubariel
```

---

## Example 2: Parse a nested object

```
$nomention
$jsonParse[{"user":{"name":"Zubariel","level":10}}]
Level: $json[user;level]
```

What happens:

1. `$jsonParse` parses an object that contains a nested `user` object.
2. `$json[user;level]` navigates into `user` and retrieves `level`.

Output:
```
Level: 10
```

---

## Common uses

- **Parsing API responses**: use right after `$httpGet` to make the response readable
- **Loading stored JSON**: parse a JSON string saved in a variable to read its values
- **Building from scratch**: parse an empty `{}` as a starting point to build with `$jsonSet`

---

## See also

- [$json](./$json.md): to read values from the parsed object
- [$jsonSet](./$jsonSet.md): to set or update values
- [$jsonClear](./$jsonClear.md): to clear the object from memory
