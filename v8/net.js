/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from types-v8/net.d.ts:
// Derived from: declare module "net"
/** @const */
var net = {};

/** @typedef {function(string, !dns.LookupOneOptions, function(!NodeJS.ErrnoException, string, number): void): void} */
net.LookupFunction;
/**
 * @record
 * @struct
 */
net.SocketConstructorOpts = function() {};
/** @type {number} */
net.SocketConstructorOpts.prototype.fd;
/** @type {boolean} */
net.SocketConstructorOpts.prototype.allowHalfOpen;
/** @type {boolean} */
net.SocketConstructorOpts.prototype.readable;
/** @type {boolean} */
net.SocketConstructorOpts.prototype.writable;
/**
 * @record
 * @struct
 */
net.TcpSocketConnectOpts = function() {};
/** @type {number} */
net.TcpSocketConnectOpts.prototype.port;
/** @type {string} */
net.TcpSocketConnectOpts.prototype.host;
/** @type {string} */
net.TcpSocketConnectOpts.prototype.localAddress;
/** @type {number} */
net.TcpSocketConnectOpts.prototype.localPort;
/** @type {number} */
net.TcpSocketConnectOpts.prototype.hints;
/** @type {number} */
net.TcpSocketConnectOpts.prototype.family;
/** @type {function(string, !dns.LookupOneOptions, function(!NodeJS.ErrnoException, string, number): void): void} */
net.TcpSocketConnectOpts.prototype.lookup;
/**
 * @record
 * @struct
 */
net.IpcSocketConnectOpts = function() {};
/** @type {string} */
net.IpcSocketConnectOpts.prototype.path;

/** @typedef {(!net.TcpSocketConnectOpts|!net.IpcSocketConnectOpts)} */
net.SocketConnectOpts;

/**
 * @extends {stream.Duplex}
 * @constructor
 * @struct
 * @param {!net.SocketConstructorOpts=} options
 */
net.Socket = function(options) {};
/** @type {number} */
net.Socket.prototype.bufferSize;
/** @type {string} */
net.Socket.prototype.remoteAddress;
/** @type {string} */
net.Socket.prototype.remoteFamily;
/** @type {number} */
net.Socket.prototype.remotePort;
/** @type {string} */
net.Socket.prototype.localAddress;
/** @type {number} */
net.Socket.prototype.localPort;
/** @type {number} */
net.Socket.prototype.bytesRead;
/** @type {number} */
net.Socket.prototype.bytesWritten;
/** @type {boolean} */
net.Socket.prototype.connecting;
/** @type {boolean} */
net.Socket.prototype.destroyed;

/**
 * @param {!Buffer|string|?} buffer_or_str_or_data
 * @param {!Function|string=} cb_or_encoding
 * @param {!Function|string=} cb_or_fd_or_callback
 * @return {boolean|void}
 */
net.Socket.prototype.write = function(buffer_or_str_or_data, cb_or_encoding, cb_or_fd_or_callback) {};

/**
 * @template THIS
 * @this {THIS}
 * @param {(!net.TcpSocketConnectOpts|!net.IpcSocketConnectOpts)|number|string} options_or_port_or_path
 * @param {!Function|string=} connectionListener_or_host
 * @param {!Function=} connectionListener
 * @return {THIS}
 */
net.Socket.prototype.connect = function(options_or_port_or_path, connectionListener_or_host, connectionListener) {};

/**
 * @template THIS
 * @this {THIS}
 * @param {string=} encoding
 * @return {THIS}
 */
net.Socket.prototype.setEncoding = function(encoding) {};

/**
 * @param {?=} err
 * @return {void}
 */
net.Socket.prototype.destroy = function(err) {};

/**
 * @template THIS
 * @this {THIS}
 * @return {THIS}
 */
net.Socket.prototype.pause = function() {};

/**
 * @template THIS
 * @this {THIS}
 * @return {THIS}
 */
net.Socket.prototype.resume = function() {};

/**
 * @template THIS
 * @this {THIS}
 * @param {number} timeout
 * @param {!Function=} callback
 * @return {THIS}
 */
net.Socket.prototype.setTimeout = function(timeout, callback) {};

/**
 * @template THIS
 * @this {THIS}
 * @param {boolean=} noDelay
 * @return {THIS}
 */
net.Socket.prototype.setNoDelay = function(noDelay) {};

/**
 * @template THIS
 * @this {THIS}
 * @param {boolean=} enable
 * @param {number=} initialDelay
 * @return {THIS}
 */
net.Socket.prototype.setKeepAlive = function(enable, initialDelay) {};

/**
 * @return {{port: number, family: string, address: string}}
 */
net.Socket.prototype.address = function() {};

/**
 * @return {void}
 */
net.Socket.prototype.unref = function() {};

/**
 * @return {void}
 */
net.Socket.prototype.ref = function() {};

/**
 * @param {!Buffer|string|?=} buffer_or_str_or_data
 * @param {!Function|string=} cb_or_encoding
 * @param {!Function=} cb
 * @return {void}
 */
net.Socket.prototype.end = function(buffer_or_str_or_data, cb_or_encoding, cb) {};

/**
 * events.EventEmitter
 *   1. close
 *   2. connect
 *   3. data
 *   4. drain
 *   5. end
 *   6. error
 *   7. lookup
 *   8. timeout
 * @template THIS
 * @this {THIS}
 * @param {string} event
 * @param {function(...?): void|function(boolean): void|function(): void|function(!Buffer): void|function(!Error): void|function(!Error, string, (string|number), string): void} listener
 * @return {THIS}
 */
net.Socket.prototype.addListener = function(event, listener) {};

/**
 * @param {(string|symbol)|string} event
 * @param {...?|boolean|!Buffer|!Error} args_or_had_error_or_data_or_err
 * @return {boolean}
 */
net.Socket.prototype.emit = function(event, args_or_had_error_or_data_or_err) {};

/**
 * @template THIS
 * @this {THIS}
 * @param {string} event
 * @param {function(...?): void|function(boolean): void|function(): void|function(!Buffer): void|function(!Error): void|function(!Error, string, (string|number), string): void} listener
 * @return {THIS}
 */
net.Socket.prototype.on = function(event, listener) {};

/**
 * @template THIS
 * @this {THIS}
 * @param {string} event
 * @param {function(...?): void|function(boolean): void|function(): void|function(!Buffer): void|function(!Error): void|function(!Error, string, (string|number), string): void} listener
 * @return {THIS}
 */
net.Socket.prototype.once = function(event, listener) {};

/**
 * @template THIS
 * @this {THIS}
 * @param {string} event
 * @param {function(...?): void|function(boolean): void|function(): void|function(!Buffer): void|function(!Error): void|function(!Error, string, (string|number), string): void} listener
 * @return {THIS}
 */
net.Socket.prototype.prependListener = function(event, listener) {};

/**
 * @template THIS
 * @this {THIS}
 * @param {string} event
 * @param {function(...?): void|function(boolean): void|function(): void|function(!Buffer): void|function(!Error): void|function(!Error, string, (string|number), string): void} listener
 * @return {THIS}
 */
net.Socket.prototype.prependOnceListener = function(event, listener) {};
/**
 * @record
 * @struct
 */
net.ListenOptions = function() {};
/** @type {number} */
net.ListenOptions.prototype.port;
/** @type {string} */
net.ListenOptions.prototype.host;
/** @type {number} */
net.ListenOptions.prototype.backlog;
/** @type {string} */
net.ListenOptions.prototype.path;
/** @type {boolean} */
net.ListenOptions.prototype.exclusive;

/**
 * @extends {events.EventEmitter}
 * @constructor
 * @struct
 * @param {function(!net.Socket): void|{allowHalfOpen: boolean, pauseOnConnect: boolean}=} connectionListener_or_options
 * @param {function(!net.Socket): void=} connectionListener
 */
net.Server = function(connectionListener_or_options, connectionListener) {};
/** @type {number} */
net.Server.prototype.maxConnections;
/** @type {number} */
net.Server.prototype.connections;
/** @type {boolean} */
net.Server.prototype.listening;

/**
 * @template THIS
 * @this {THIS}
 * @param {number|string|!net.ListenOptions|?=} port_or_path_or_options_or_handle
 * @param {string|number|!Function=} hostname_or_backlog_or_listeningListener
 * @param {number|!Function=} backlog_or_listeningListener
 * @param {!Function=} listeningListener
 * @return {THIS}
 */
net.Server.prototype.listen = function(port_or_path_or_options_or_handle, hostname_or_backlog_or_listeningListener, backlog_or_listeningListener, listeningListener) {};

/**
 * @template THIS
 * @this {THIS}
 * @param {function(!Error=): void=} callback
 * @return {THIS}
 */
net.Server.prototype.close = function(callback) {};

/**
 * @return {{port: number, family: string, address: string}}
 */
net.Server.prototype.address = function() {};

/**
 * @param {function(!Error, number): void} cb
 * @return {void}
 */
net.Server.prototype.getConnections = function(cb) {};

/**
 * @template THIS
 * @this {THIS}
 * @return {THIS}
 */
net.Server.prototype.ref = function() {};

/**
 * @template THIS
 * @this {THIS}
 * @return {THIS}
 */
net.Server.prototype.unref = function() {};

/**
 * events.EventEmitter
 *   1. close
 *   2. connection
 *   3. error
 *   4. listening
 * @template THIS
 * @this {THIS}
 * @param {string} event
 * @param {function(...?): void|function(): void|function(!net.Socket): void|function(!Error): void} listener
 * @return {THIS}
 */
net.Server.prototype.addListener = function(event, listener) {};

/**
 * @param {(string|symbol)|string} event
 * @param {...?|!net.Socket|!Error} args_or_socket_or_err
 * @return {boolean}
 */
net.Server.prototype.emit = function(event, args_or_socket_or_err) {};

/**
 * @template THIS
 * @this {THIS}
 * @param {string} event
 * @param {function(...?): void|function(): void|function(!net.Socket): void|function(!Error): void} listener
 * @return {THIS}
 */
net.Server.prototype.on = function(event, listener) {};

/**
 * @template THIS
 * @this {THIS}
 * @param {string} event
 * @param {function(...?): void|function(): void|function(!net.Socket): void|function(!Error): void} listener
 * @return {THIS}
 */
net.Server.prototype.once = function(event, listener) {};

/**
 * @template THIS
 * @this {THIS}
 * @param {string} event
 * @param {function(...?): void|function(): void|function(!net.Socket): void|function(!Error): void} listener
 * @return {THIS}
 */
net.Server.prototype.prependListener = function(event, listener) {};

/**
 * @template THIS
 * @this {THIS}
 * @param {string} event
 * @param {function(...?): void|function(): void|function(!net.Socket): void|function(!Error): void} listener
 * @return {THIS}
 */
net.Server.prototype.prependOnceListener = function(event, listener) {};
/**
 * @extends {net.TcpSocketConnectOpts}
 * @extends {net.SocketConstructorOpts}
 * @record
 * @struct
 */
net.TcpNetConnectOpts = function() {};
/** @type {number} */
net.TcpNetConnectOpts.prototype.timeout;
/**
 * @extends {net.IpcSocketConnectOpts}
 * @extends {net.SocketConstructorOpts}
 * @record
 * @struct
 */
net.IpcNetConnectOpts = function() {};
/** @type {number} */
net.IpcNetConnectOpts.prototype.timeout;

/** @typedef {(!net.TcpNetConnectOpts|!net.IpcNetConnectOpts)} */
net.NetConnectOpts;

/**
 * @param {function(!net.Socket): void|{allowHalfOpen: boolean, pauseOnConnect: boolean}=} connectionListener_or_options
 * @param {function(!net.Socket): void=} connectionListener
 * @return {!net.Server}
 */
net.createServer = function(connectionListener_or_options, connectionListener) {};

/**
 * @param {(!net.TcpNetConnectOpts|!net.IpcNetConnectOpts)|number|string} options_or_port_or_path
 * @param {!Function|string=} connectionListener_or_host
 * @param {!Function=} connectionListener
 * @return {!net.Socket}
 */
net.connect = function(options_or_port_or_path, connectionListener_or_host, connectionListener) {};

/**
 * @param {(!net.TcpNetConnectOpts|!net.IpcNetConnectOpts)|number|string} options_or_port_or_path
 * @param {!Function|string=} connectionListener_or_host
 * @param {!Function=} connectionListener
 * @return {!net.Socket}
 */
net.createConnection = function(options_or_port_or_path, connectionListener_or_host, connectionListener) {};

/**
 * @param {string} input
 * @return {number}
 */
net.isIP = function(input) {};

/**
 * @param {string} input
 * @return {boolean}
 */
net.isIPv4 = function(input) {};

/**
 * @param {string} input
 * @return {boolean}
 */
net.isIPv6 = function(input) {};

/** @type {net.Socket} */
net.Stream