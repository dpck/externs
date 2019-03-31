/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from types-v8/https.d.ts:
// Derived from: declare module "https"
/** @const */
var https = {};

/** @typedef {?} */
https.ServerOptions;

/** @typedef {string} */
https.extendedRequestKeys;

/** @typedef {?} */
https.RequestOptions;
/**
 * @extends {http.AgentOptions}
 * @extends {tls.ConnectionOptions}
 * @record
 * @struct
 */
https.AgentOptions = function() {};
/** @type {boolean} */
https.AgentOptions.prototype.rejectUnauthorized;
/** @type {number} */
https.AgentOptions.prototype.maxCachedSessions;

/**
 * @extends {http.Agent}
 * @constructor
 * @struct
 * @param {!https.AgentOptions=} options
 */
https.Agent = function(options) {};
/** @type {!https.AgentOptions} */
https.Agent.prototype.options;
/**
 * @extends {tls.Server}
 * @constructor
 * @struct
 */
https.Server = function() {};
/** @type {number} */
https.Server.prototype.timeout;
/** @type {number} */
https.Server.prototype.keepAliveTimeout;

/**
 * @template THIS
 * @this {THIS}
 * @param {function(): void|number=} callback_or_msecs
 * @param {function(): void=} callback
 * @return {THIS}
 */
https.Server.prototype.setTimeout = function(callback_or_msecs, callback) {};

/**
 * @param {?} options
 * @param {function(!http.IncomingMessage, !http.ServerResponse): void=} requestListener
 * @return {!https.Server}
 */
https.createServer = function(options, requestListener) {};

/**
 * @param {(string|?|!url.URL)} options
 * @param {function(!http.IncomingMessage): void=} callback
 * @return {!http.ClientRequest}
 */
https.request = function(options, callback) {};

/**
 * @param {(string|?|!url.URL)} options
 * @param {function(!http.IncomingMessage): void=} callback
 * @return {!http.ClientRequest}
 */
https.get = function(options, callback) {};
/** @type {!https.Agent} */
https.globalAgent;
