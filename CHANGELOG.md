## 16 November 2019

### [1.5.0](https://github.com/dpck/externs/compare/v1.4.4...v1.5.0)

- [package] Rename to `@externs/nodejs`.
- [ops] Publish `build` folder.

## 19 July 2019

### [1.4.4](https://github.com/dpck/externs/compare/v1.4.3...v1.4.4)

- [externs] Include types for `querystring`: _encode/decode_, `http`: _maxHeaderSize_, `net`: _Stream_. Update wip.

## 16 July 2019

### [1.4.3](https://github.com/dpck/externs/compare/v1.4.2...v1.4.3)

- [feature] Add the `readline.Interface` constructor to externs.

### [1.4.2](https://github.com/dpck/externs/compare/v1.4.1...v1.4.2)

- [feature] Add the `util.getSystemErrorName` method to externs.

## 6 May 2019

### [1.4.1](https://github.com/dpck/externs/compare/v1.4.0...v1.4.1)

- [fix] Rename `crypto` to `_crypto`.

## 25 April 2019

### [1.4.0](https://github.com/dpck/externs/compare/v1.3.0...v1.4.0)

- [externs] Tidy up `_module` and `module`, make `require` and `require.resolve` callable.
- [doc] Clearer how-to.
- [test] Tests for `require` and `module`.

## 23 April 2019

### [1.3.0](https://github.com/dpck/externs/compare/v1.2.4...v1.3.0)

- [externs] Move _Buffer_ to a separate file (`global/buffer.js`), complete _Buffer_ externs.

## 19 April 2019

### [1.2.4](https://github.com/dpck/externs/compare/v1.2.3...v1.2.4)

- [fix] Declare `DEPACK_EXPORT` as _var_.

### [1.2.3](https://github.com/dpck/externs/compare/v1.2.2...v1.2.3)

- [add] Add the `Error.prepareStackTrace` definition.
- [depack] Add the `DEPACK_EXPORT` extern for compiling libraries.

## 12 April 2019

### [1.2.2](https://github.com/dpck/externs/compare/v1.2.1...v1.2.2)

- [fix] Rename `crypto` to `_crypto` to avoid duplication of existing extern.
- [wip] Doc the missing `crypto` properties.

## 10 April 2019

### [1.2.1](https://github.com/dpck/externs/compare/v1.2.0...v1.2.1)

- [externs] Fix `module` extern and by moving it out of the `node.js` extern.

## 9 April 2019

### [1.2.0](https://github.com/dpck/externs/compare/v1.1.1...v1.2.0)

- [fix] Fix `readline` extern that used `interface`.
- [doc] Document some missing methods and properties, include `WIP`.

## 2 April 2019

### [1.1.1](https://github.com/dpck/externs/compare/v1.1.0...v1.1.1)

- [package] Publish `src`.

## 1 April 2019

### [1.1.0](https://github.com/dpck/externs/compare/v1.0.1...v1.1.0)

- [feature] Add a function to resolve the path to the externs directory.
- [fix] Update `stream` and `events` to prevent warning; remove `@struct` from `process.env`.

### [1.0.1](https://github.com/dpck/externs/compare/v1.0.0...v1.0.1)

- [package] Publish dependencies.

### [1.0.0](https://github.com/dpck/externs/compare/v0.0.0-pre...v1.0.0)

- [feature] Publish externs.

## 31 March 2019

### 0.0.0

- Create `@depack/externs` with _[`My New Package`](https://mnpjs.org)_
- [repository]: `src`, `test`