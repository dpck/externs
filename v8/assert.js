/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from types-v8/assert.d.ts:
// Derived from: declare module "assert"
/** @const */
var assert = {};

/**
 * @param {?} value
 * @param {string=} message
 * @return {void}
 */
assert.internal = function(value, message) {};

/**
 * @extends {Error}
 * @constructor
 * @struct
 * @param {{message: string, actual: ?, expected: ?, operator: string, stackStartFn: !Function}=} options
 */
assert.internal.AssertionError = function(options) {};
/** @type {string} */
assert.internal.AssertionError.prototype.name;
/** @type {string} */
assert.internal.AssertionError.prototype.message;
/** @type {?} */
assert.internal.AssertionError.prototype.actual;
/** @type {?} */
assert.internal.AssertionError.prototype.expected;
/** @type {string} */
assert.internal.AssertionError.prototype.operator;
/** @type {boolean} */
assert.internal.AssertionError.prototype.generatedMessage;
/** @type {string} */
assert.internal.AssertionError.prototype.code;

/**
 * @param {string|?=} message_or_actual
 * @param {?=} expected
 * @param {string=} message
 * @param {string=} operator
 * @param {!Function=} stackStartFn
 * @return {?}
 */
assert.internal.fail = function(message_or_actual, expected, message, operator, stackStartFn) {};

/**
 * @param {?} value
 * @param {string=} message
 * @return {void}
 */
assert.internal.ok = function(value, message) {};

/**
 * @param {?} actual
 * @param {?} expected
 * @param {string=} message
 * @return {void}
 */
assert.internal.equal = function(actual, expected, message) {};

/**
 * @param {?} actual
 * @param {?} expected
 * @param {string=} message
 * @return {void}
 */
assert.internal.notEqual = function(actual, expected, message) {};

/**
 * @param {?} actual
 * @param {?} expected
 * @param {string=} message
 * @return {void}
 */
assert.internal.deepEqual = function(actual, expected, message) {};

/**
 * @param {?} actual
 * @param {?} expected
 * @param {string=} message
 * @return {void}
 */
assert.internal.notDeepEqual = function(actual, expected, message) {};

/**
 * @param {?} actual
 * @param {?} expected
 * @param {string=} message
 * @return {void}
 */
assert.internal.strictEqual = function(actual, expected, message) {};

/**
 * @param {?} actual
 * @param {?} expected
 * @param {string=} message
 * @return {void}
 */
assert.internal.notStrictEqual = function(actual, expected, message) {};

/**
 * @param {?} actual
 * @param {?} expected
 * @param {string=} message
 * @return {void}
 */
assert.internal.deepStrictEqual = function(actual, expected, message) {};

/**
 * @param {?} actual
 * @param {?} expected
 * @param {string=} message
 * @return {void}
 */
assert.internal.notDeepStrictEqual = function(actual, expected, message) {};

/**
 * @param {!Function} block
 * @param {string|(!Function|!RegExp)=} message_or_error
 * @param {string=} message
 * @return {void}
 */
assert.internal.throws = function(block, message_or_error, message) {};

/**
 * @param {!Function} block
 * @param {string|(!Function|!RegExp)=} message_or_error
 * @param {string=} message
 * @return {void}
 */
assert.internal.doesNotThrow = function(block, message_or_error, message) {};

/**
 * @param {?} value
 * @return {void}
 */
assert.internal.ifError = function(value) {};
