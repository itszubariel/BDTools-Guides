# $json

`$json` retrieves a value from the current JSON object by key. Use it after `$jsonParse` to read specific values out of the object.

---

## Syntax

```
$json[Key;...]
```

- `Key`: one or more keys forming the path to the value. Each `;` goes one level deeper. For arrays, use a numeric index starting at `0`.

Returns an empty string if the key does not exist, the value is null, no `$jsonParse` or `$jsonSet` was called, or `$jsonClear` was called.

---

## What happens

1. `$jsonParse` loads the JSON object into memory.
2. `$json` follows the key path you provide and returns the value at that location.

---

## Example 1: Read from a flat object

```
$nomention
$jsonParse[{"username":"Zubariel","tag":"0001"}]
Username: $json[username]
Tag: $json[tag]
```

What happens:

1. `$jsonParse` loads the object.
2. `$json[username]` and `$json[tag]` each read their respective keys.

Output:
```
Username: Zubariel
Tag: 0001
```

---

## Example 2: Read from a nested object and array

```
$nomention
$jsonParse[{"users":[{"name":"Zubariel"},{"name":"Speshy"}\]}]
First: $json[users;0;name]
Second: $json[users;1;name]
```

What happens:

1. `$jsonParse` loads the object.
2. `$json[users;0;name]` takes the first item (index `0`) from `users` and reads `name`.
3. `$json[users;1;name]` does the same for the second item.

Output:
```
First: Zubariel
Second: Speshy
```

---

## Common uses

- **Reading API response fields**: extract a specific value like a username, score, or URL
- **Reading nested data**: navigate objects inside objects using multiple keys
- **Reading array items**: access a specific element in a JSON array by its index

---

## See also

- [$jsonParse](./$jsonParse.md): must be called first to load the JSON object
- [$jsonSet](./$jsonSet.md): to write or update a value
- [$jsonExists](./$jsonExists.md): to check if a key exists before reading it
