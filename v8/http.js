/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from types-v8/http.d.ts:
// Derived from: declare module "http"
/** @const */
var http = {};
/**
 * @record
 * @struct
 */
http.IncomingHttpHeaders = function() {};

/* TODO: PropertySignature: http.'accept' */

/* TODO: PropertySignature: http.'accept-patch' */

/* TODO: PropertySignature: http.'accept-ranges' */

/* TODO: PropertySignature: http.'access-control-allow-credentials' */

/* TODO: PropertySignature: http.'access-control-allow-headers' */

/* TODO: PropertySignature: http.'access-control-allow-methods' */

/* TODO: PropertySignature: http.'access-control-allow-origin' */

/* TODO: PropertySignature: http.'access-control-expose-headers' */

/* TODO: PropertySignature: http.'access-control-max-age' */

/* TODO: PropertySignature: http.'age' */

/* TODO: PropertySignature: http.'allow' */

/* TODO: PropertySignature: http.'alt-svc' */

/* TODO: PropertySignature: http.'authorization' */

/* TODO: PropertySignature: http.'cache-control' */

/* TODO: PropertySignature: http.'connection' */

/* TODO: PropertySignature: http.'content-disposition' */

/* TODO: PropertySignature: http.'content-encoding' */

/* TODO: PropertySignature: http.'content-language' */

/* TODO: PropertySignature: http.'content-length' */

/* TODO: PropertySignature: http.'content-location' */

/* TODO: PropertySignature: http.'content-range' */

/* TODO: PropertySignature: http.'content-type' */

/* TODO: PropertySignature: http.'date' */

/* TODO: PropertySignature: http.'expires' */

/* TODO: PropertySignature: http.'host' */

/* TODO: PropertySignature: http.'last-modified' */

/* TODO: PropertySignature: http.'location' */

/* TODO: PropertySignature: http.'pragma' */

/* TODO: PropertySignature: http.'proxy-authenticate' */

/* TODO: PropertySignature: http.'public-key-pins' */

/* TODO: PropertySignature: http.'retry-after' */

/* TODO: PropertySignature: http.'set-cookie' */

/* TODO: PropertySignature: http.'strict-transport-security' */

/* TODO: PropertySignature: http.'tk' */

/* TODO: PropertySignature: http.'trailer' */

/* TODO: PropertySignature: http.'transfer-encoding' */

/* TODO: PropertySignature: http.'upgrade' */

/* TODO: PropertySignature: http.'user-agent' */

/* TODO: PropertySignature: http.'vary' */

/* TODO: PropertySignature: http.'via' */

/* TODO: PropertySignature: http.'warning' */

/* TODO: PropertySignature: http.'www-authenticate' */

/* TODO: IndexSignature: http */
/**
 * @record
 * @struct
 */
http.OutgoingHttpHeaders = function() {};

/* TODO: IndexSignature: http */
/**
 * @record
 * @struct
 */
http.ClientRequestArgs = function() {};
/** @type {string} */
http.ClientRequestArgs.prototype.protocol;
/** @type {string} */
http.ClientRequestArgs.prototype.host;
/** @type {string} */
http.ClientRequestArgs.prototype.hostname;
/** @type {number} */
http.ClientRequestArgs.prototype.family;
/** @type {(string|number)} */
http.ClientRequestArgs.prototype.port;
/** @type {(string|number)} */
http.ClientRequestArgs.prototype.defaultPort;
/** @type {string} */
http.ClientRequestArgs.prototype.localAddress;
/** @type {string} */
http.ClientRequestArgs.prototype.socketPath;
/** @type {string} */
http.ClientRequestArgs.prototype.method;
/** @type {string} */
http.ClientRequestArgs.prototype.path;
/** @type {!http.OutgoingHttpHeaders} */
http.ClientRequestArgs.prototype.headers;
/** @type {string} */
http.ClientRequestArgs.prototype.auth;
/** @type {(boolean|!http.Agent)} */
http.ClientRequestArgs.prototype.agent;
/** @type {!http.Agent} */
http.ClientRequestArgs.prototype._defaultAgent;
/** @type {number} */
http.ClientRequestArgs.prototype.timeout;
/** @type {function(!http.ClientRequestArgs, function(!Error, !net.Socket): void): !net.Socket} */
http.ClientRequestArgs.prototype.createConnection;

/**
 * @extends {net.Server}
 * @constructor
 * @struct
 * @param {function(!http.IncomingMessage, !http.ServerResponse): void=} requestListener
 */
http.Server = function(requestListener) {};
/** @type {number} */
http.Server.prototype.maxHeadersCount;
/** @type {number} */
http.Server.prototype.timeout;
/** @type {number} */
http.Server.prototype.keepAliveTimeout;

/**
 * @template THIS
 * @this {THIS}
 * @param {number|function(): void=} msecs_or_callback
 * @param {function(): void=} callback
 * @return {THIS}
 */
http.Server.prototype.setTimeout = function(msecs_or_callback, callback) {};
/**
 * @extends {http.IncomingMessage}
 * @constructor
 * @struct
 */
http.ServerRequest = function() {};
/** @type {!net.Socket} */
http.ServerRequest.prototype.connection;

/**
 * @extends {stream.Writable}
 * @constructor
 * @struct
 */
http.OutgoingMessage = function() {};
/** @type {boolean} */
http.OutgoingMessage.prototype.upgrading;
/** @type {boolean} */
http.OutgoingMessage.prototype.chunkedEncoding;
/** @type {boolean} */
http.OutgoingMessage.prototype.shouldKeepAlive;
/** @type {boolean} */
http.OutgoingMessage.prototype.useChunkedEncodingByDefault;
/** @type {boolean} */
http.OutgoingMessage.prototype.sendDate;
/** @type {boolean} */
http.OutgoingMessage.prototype.finished;
/** @type {boolean} */
http.OutgoingMessage.prototype.headersSent;
/** @type {!net.Socket} */
http.OutgoingMessage.prototype.connection;

/**
 * @template THIS
 * @this {THIS}
 * @param {number} msecs
 * @param {function(): void=} callback
 * @return {THIS}
 */
http.OutgoingMessage.prototype.setTimeout = function(msecs, callback) {};

/**
 * @param {!Error} error
 * @return {void}
 */
http.OutgoingMessage.prototype.destroy = function(error) {};

/**
 * @param {string} name
 * @param {(string|number|!Array<string>)} value
 * @return {void}
 */
http.OutgoingMessage.prototype.setHeader = function(name, value) {};

/**
 * @param {string} name
 * @return {(string|number|!Array<string>)}
 */
http.OutgoingMessage.prototype.getHeader = function(name) {};

/**
 * @return {!http.OutgoingHttpHeaders}
 */
http.OutgoingMessage.prototype.getHeaders = function() {};

/**
 * @return {!Array<string>}
 */
http.OutgoingMessage.prototype.getHeaderNames = function() {};

/**
 * @param {string} name
 * @return {boolean}
 */
http.OutgoingMessage.prototype.hasHeader = function(name) {};

/**
 * @param {string} name
 * @return {void}
 */
http.OutgoingMessage.prototype.removeHeader = function(name) {};

/**
 * @param {(!http.OutgoingHttpHeaders|!Array<!Array<?>>)} headers
 * @return {void}
 */
http.OutgoingMessage.prototype.addTrailers = function(headers) {};

/**
 * @return {void}
 */
http.OutgoingMessage.prototype.flushHeaders = function() {};

/**
 * @extends {http.OutgoingMessage}
 * @constructor
 * @struct
 * @param {!http.IncomingMessage} req
 */
http.ServerResponse = function(req) {};
/** @type {number} */
http.ServerResponse.prototype.statusCode;
/** @type {string} */
http.ServerResponse.prototype.statusMessage;

/**
 * @param {!net.Socket} socket
 * @return {void}
 */
http.ServerResponse.prototype.assignSocket = function(socket) {};

/**
 * @param {!net.Socket} socket
 * @return {void}
 */
http.ServerResponse.prototype.detachSocket = function(socket) {};

/**
 * @param {function(): void=} callback
 * @return {void}
 */
http.ServerResponse.prototype.writeContinue = function(callback) {};

/**
 * @param {number} statusCode
 * @param {string|!http.OutgoingHttpHeaders=} reasonPhrase_or_headers
 * @param {!http.OutgoingHttpHeaders=} headers
 * @return {void}
 */
http.ServerResponse.prototype.writeHead = function(statusCode, reasonPhrase_or_headers, headers) {};

/**
 * @extends {http.OutgoingMessage}
 * @constructor
 * @struct
 * @param {(string|!http.ClientRequestArgs|!url.URL)} url
 * @param {function(!http.IncomingMessage): void=} cb
 */
http.ClientRequest = function(url, cb) {};
/** @type {!net.Socket} */
http.ClientRequest.prototype.connection;
/** @type {!net.Socket} */
http.ClientRequest.prototype.socket;
/** @type {number} */
http.ClientRequest.prototype.aborted;
/** @type {string} */
http.ClientRequest.prototype.path;

/**
 * @return {void}
 */
http.ClientRequest.prototype.abort = function() {};

/**
 * @param {!net.Socket} socket
 * @return {void}
 */
http.ClientRequest.prototype.onSocket = function(socket) {};

/**
 * @template THIS
 * @this {THIS}
 * @param {number} timeout
 * @param {function(): void=} callback
 * @return {THIS}
 */
http.ClientRequest.prototype.setTimeout = function(timeout, callback) {};

/**
 * @param {boolean=} noDelay
 * @return {void}
 */
http.ClientRequest.prototype.setNoDelay = function(noDelay) {};

/**
 * @param {boolean=} enable
 * @param {number=} initialDelay
 * @return {void}
 */
http.ClientRequest.prototype.setSocketKeepAlive = function(enable, initialDelay) {};

/**
 * @extends {stream.Readable}
 * @constructor
 * @struct
 * @param {!net.Socket} socket
 */
http.IncomingMessage = function(socket) {};
/** @type {string} */
http.IncomingMessage.prototype.httpVersion;
/** @type {number} */
http.IncomingMessage.prototype.httpVersionMajor;
/** @type {number} */
http.IncomingMessage.prototype.httpVersionMinor;
/** @type {!net.Socket} */
http.IncomingMessage.prototype.connection;
/** @type {!http.IncomingHttpHeaders} */
http.IncomingMessage.prototype.headers;
/** @type {!Array<string>} */
http.IncomingMessage.prototype.rawHeaders;
/** @type {!Object<string,string>} */
http.IncomingMessage.prototype.trailers;
/** @type {!Array<string>} */
http.IncomingMessage.prototype.rawTrailers;
/** @type {string} */
http.IncomingMessage.prototype.method;
/** @type {string} */
http.IncomingMessage.prototype.url;
/** @type {number} */
http.IncomingMessage.prototype.statusCode;
/** @type {string} */
http.IncomingMessage.prototype.statusMessage;
/** @type {!net.Socket} */
http.IncomingMessage.prototype.socket;

/**
 * @template THIS
 * @this {THIS}
 * @param {number} msecs
 * @param {function(): void} callback
 * @return {THIS}
 */
http.IncomingMessage.prototype.setTimeout = function(msecs, callback) {};

/**
 * @param {!Error=} error
 * @return {void}
 */
http.IncomingMessage.prototype.destroy = function(error) {};
/**
 * @extends {http.IncomingMessage}
 * @constructor
 * @struct
 */
http.ClientResponse = function() {};
/**
 * @record
 * @struct
 */
http.AgentOptions = function() {};
/** @type {boolean} */
http.AgentOptions.prototype.keepAlive;
/** @type {number} */
http.AgentOptions.prototype.keepAliveMsecs;
/** @type {number} */
http.AgentOptions.prototype.maxSockets;
/** @type {number} */
http.AgentOptions.prototype.maxFreeSockets;

/**
 * @constructor
 * @struct
 * @param {!http.AgentOptions=} opts
 */
http.Agent = function(opts) {};
/** @type {number} */
http.Agent.prototype.maxFreeSockets;
/** @type {number} */
http.Agent.prototype.maxSockets;
/** @type {?} */
http.Agent.prototype.sockets;
/** @type {?} */
http.Agent.prototype.requests;

/**
 * Destroy any sockets that are currently in use by the agent.
 * It is usually not necessary to do this. However, if you are using an agent with KeepAlive enabled,
 * then it is best to explicitly shut down the agent when you know that it will no longer be used. Otherwise,
 * sockets may hang open for quite a long time before the server terminates them.
 * @return {void}
 */
http.Agent.prototype.destroy = function() {};
/** @type {!Array<string>} */
http.METHODS;
/** @type {!Object<string,string>} */
http.STATUS_CODES;

/**
 * @param {function(!http.IncomingMessage, !http.ServerResponse): void=} requestListener
 * @return {!http.Server}
 */
http.createServer = function(requestListener) {};

/**
 * @param {number=} port
 * @param {string=} host
 * @return {?}
 */
http.createClient = function(port, host) {};
/**
 * @extends {http.ClientRequestArgs}
 * @record
 * @struct
 */
http.RequestOptions = function() {};

/**
 * @param {(string|!url.URL|!http.RequestOptions)} options
 * @param {function(!http.IncomingMessage): void=} callback
 * @return {!http.ClientRequest}
 */
http.request = function(options, callback) {};

/**
 * @param {(string|!url.URL|!http.RequestOptions)} options
 * @param {function(!http.IncomingMessage): void=} callback
 * @return {!http.ClientRequest}
 */
http.get = function(options, callback) {};
/** @type {!http.Agent} */
http.globalAgent;
