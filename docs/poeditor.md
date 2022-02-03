# POEditor

I've had some problems when dealing with plurals, mainly integrating i18next with POEditor.
I contacted POEditor's support and they shed some light on this issue. 

When importing into POEditor using Key-Value JSON files, the plurals should be formatted as follows:
```json
{
  "key1": {
    "one": "one user",
    "other": "many users"
  },
  "key2": "interface",
  "key3": "crate"
}
```
However, i18next's format is a bit different:
```json
{
   "key1_one": "one user",
   "key1_other": "many users",
   "key2": "interface",
   "key3": "crate"
}
```
Unfortunately, this format is not supported by POEditor. The person I talked to suggested using [ICU message syntax](https://poeditor.com/kb/icu-message-syntax-plurals),
because POEditor understands that, and i18next has [a plugin for ICU formatting](https://github.com/i18next/i18next-icu).

## Key-Value JSON to ICU syntax migration

What I needed to do after enabling the ICU plugin.

### Plurals

From:
```json5
// Before
{
   "example_zero": "You haven't uploaded any readings...",
   "example_one": "You have uploaded 1 reading.",
   "example_other": "You have uploaded {{count}} readings."
}
```
```json5
// After
{
  "example": "{count, plural, =0 {You haven't uploaded any readings...} =1 {You have uploaded 1 reading.} other {You have uploaded # readings.}}"
}
```

### Interpolation

1. Use single brackets.
2. Don't use single quotes around the interpolated variable. I think it's not a big deal, because such formatting should
   probably be done using [formatting functions](https://www.i18next.com/translation-function/formatting) anyway, but 
   I simply haven't got there yet in the documentation ¯\_(ツ)_/¯
3. Alternatively, use escaped double quotes.

```json5
// Before
{
 "example": "So here's an error code: '{{errorCode}}', and it says: '{{message}}', nice huh?"      
}
```
```json5
// After
{
 "example": "So here's an error code: \"{errorCode}\", and it says: \"{message}\", nice huh?"      
}
```

### Trans component

I've seen that it's not always straightforward to use, so I'll have to explore it, even though I don't need
it at the moment.
