# esprima-es6-regexp

This is a patched version of [Esprima’s `harmony` branch](https://github.com/ariya/esprima/tree/harmony) (at [commit c8d226bf709353ccff9d9064fc3f864382ac9338](https://github.com/ariya/esprima/commit/c8d226bf709353ccff9d9064fc3f864382ac9338)) that makes it support future regular expression flags.

This separate repository was created as a temporary measure until https://github.com/ariya/esprima/pull/264 gets resolved and merged. It enables a light-weight way to parse JavaScript programs that may include future regular expressions in your own scripts — just add this to your `package.json`:

```json
"dependencies": {
  "esprima": "git+https://github.com/mathiasbynens/esprima-es6-regexp.git"
}
```
