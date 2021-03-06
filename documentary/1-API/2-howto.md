## How To Use

These externs were generated for the use by _Depack_: the dependency bundler for the web and back-end Node.JS. _Depack_ will perform regex-based static analysis on modules, and when they import an internal module (e.g., `path`), it will mark an extern as needed to be added. It will then add the `require` call to the output wrapper:

```js
import { join } from 'path'

// will produce the wrapper
const path = require('path')
```

<!-- Because `path` is now a globally declared variable that is placed in the wrapper, it will also participate in optimisations, and by supplying the externs from the relevant externs file, the compiler will successfully be able to perform correct property renames, leaving property names of that module alone. -->

The important thing about how compiling _Node.JS_ packages works in _Depack_, is the strategy when a pseudo built-in module is placed in `node_modules`. For example, for the `path` internal, the following code will be produced in `node_modules/path/index.js`:

```js
export default path
export const {
  basename,
  delimiter,
  dirname,
  extname,
  format,
  isAbsolute,
  join,
  normalize,
  parse,
  posix,
  relative,
  resolve,
  sep,
  win32,
} = path
```

Because `path` was previously defined in the output wrapper and an extern was added, all its properties will be destructured and exported correctly.

%~ width="25"%

### Clashes

> This might need some rethinking...

There are 3 modules that have the same name as some global variable: `module` and `console` and `buffer`. The `crypto` extern [already exists](https://github.com/google/closure-compiler/blob/master/externs/browser/w3c_webcrypto.js#L552) in the _GCC_. Therefore, _Depack_ will require them using an underscore:

```js
// module !== require('module') so this is good
const _module = require('module')
// console === require('console') so we might change that later
const _console = require('console')
// buffer === require('buffer') so we might change that later
const _buffer = require('buffer')
const _crypto = require('crypto')
```

%~%