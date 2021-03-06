/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from types-v8/url.d.ts:
// Derived from: declare module "url"
/** @const */
var url = {};
/**
 * @record
 * @struct
 */
url.UrlObjectCommon = function() {};
/** @type {string} */
url.UrlObjectCommon.prototype.auth;
/** @type {string} */
url.UrlObjectCommon.prototype.hash;
/** @type {string} */
url.UrlObjectCommon.prototype.host;
/** @type {string} */
url.UrlObjectCommon.prototype.hostname;
/** @type {string} */
url.UrlObjectCommon.prototype.href;
/** @type {string} */
url.UrlObjectCommon.prototype.path;
/** @type {string} */
url.UrlObjectCommon.prototype.pathname;
/** @type {string} */
url.UrlObjectCommon.prototype.protocol;
/** @type {string} */
url.UrlObjectCommon.prototype.search;
/** @type {boolean} */
url.UrlObjectCommon.prototype.slashes;
/**
 * @extends {url.UrlObjectCommon}
 * @record
 * @struct
 */
url.UrlObject = function() {};
/** @type {(string|number)} */
url.UrlObject.prototype.port;
/** @type {(string|!Object<string,?>)} */
url.UrlObject.prototype.query;
/**
 * @extends {url.UrlObjectCommon}
 * @record
 * @struct
 */
url.Url = function() {};
/** @type {string} */
url.Url.prototype.port;
/** @type {(string|!querystring.ParsedUrlQuery)} */
url.Url.prototype.query;
/**
 * @extends {url.Url}
 * @record
 * @struct
 */
url.UrlWithParsedQuery = function() {};
/** @type {!querystring.ParsedUrlQuery} */
url.UrlWithParsedQuery.prototype.query;
/**
 * @extends {url.Url}
 * @record
 * @struct
 */
url.UrlWithStringQuery = function() {};
/** @type {string} */
url.UrlWithStringQuery.prototype.query;

/**
 * @param {string} urlStr
 * @param {boolean=} parseQueryString
 * @param {boolean=} slashesDenoteHost
 * @return {!url.UrlWithStringQuery|!url.UrlWithParsedQuery|!url.Url}
 */
url.parse = function(urlStr, parseQueryString, slashesDenoteHost) {};

/**
 * @param {!url.URL|(string|!url.UrlObject)} URL_or_urlObject
 * @param {!url.URLFormatOptions=} options
 * @return {string}
 */
url.format = function(URL_or_urlObject, options) {};

/**
 * @param {string} from
 * @param {string} to
 * @return {string}
 */
url.resolve = function(from, to) {};

/**
 * @param {string} domain
 * @return {string}
 */
url.domainToASCII = function(domain) {};

/**
 * @param {string} domain
 * @return {string}
 */
url.domainToUnicode = function(domain) {};
/**
 * @record
 * @struct
 */
url.URLFormatOptions = function() {};
/** @type {boolean} */
url.URLFormatOptions.prototype.auth;
/** @type {boolean} */
url.URLFormatOptions.prototype.fragment;
/** @type {boolean} */
url.URLFormatOptions.prototype.search;
/** @type {boolean} */
url.URLFormatOptions.prototype.unicode;

/**
 * @implements {Iterable}
 * @constructor
 * @struct
 * @param {(string|!url.URLSearchParams|!Object<string,(string|!Array<string>)>|!Iterable<!Array<?>>|!Array<!Array<?>>)=} init
 */
url.URLSearchParams = function(init) {};

/**
 * @param {string} name
 * @param {string} value
 * @return {void}
 */
url.URLSearchParams.prototype.append = function(name, value) {};

/**
 * @param {string} name
 * @return {void}
 */
url.URLSearchParams.prototype.delete = function(name) {};

/**
 * @return {!IterableIterator<!Array<?>>}
 */
url.URLSearchParams.prototype.entries = function() {};

/**
 * @param {function(string, string, !url.URLSearchParams): void} callback
 * @return {void}
 */
url.URLSearchParams.prototype.forEach = function(callback) {};

/**
 * @param {string} name
 * @return {string}
 */
url.URLSearchParams.prototype.get = function(name) {};

/**
 * @param {string} name
 * @return {!Array<string>}
 */
url.URLSearchParams.prototype.getAll = function(name) {};

/**
 * @param {string} name
 * @return {boolean}
 */
url.URLSearchParams.prototype.has = function(name) {};

/**
 * @return {!IterableIterator<string>}
 */
url.URLSearchParams.prototype.keys = function() {};

/**
 * @param {string} name
 * @param {string} value
 * @return {void}
 */
url.URLSearchParams.prototype.set = function(name, value) {};

/**
 * @return {void}
 */
url.URLSearchParams.prototype.sort = function() {};

/**
 * @return {string}
 */
url.URLSearchParams.prototype.toString = function() {};

/**
 * @return {!IterableIterator<string>}
 */
url.URLSearchParams.prototype.values = function() {};

/**
 * @return {!IterableIterator<!Array<?>>}
 */
url.URLSearchParams.prototype[Symbol.iterator] = function() {};

/**
 * @constructor
 * @struct
 * @param {string} input
 * @param {(string|!url.URL)=} base
 */
url.URL = function(input, base) {};
/** @type {string} */
url.URL.prototype.hash;
/** @type {string} */
url.URL.prototype.host;
/** @type {string} */
url.URL.prototype.hostname;
/** @type {string} */
url.URL.prototype.href;
/** @type {string} */
url.URL.prototype.origin;
/** @type {string} */
url.URL.prototype.password;
/** @type {string} */
url.URL.prototype.pathname;
/** @type {string} */
url.URL.prototype.port;
/** @type {string} */
url.URL.prototype.protocol;
/** @type {string} */
url.URL.prototype.search;
/** @type {!url.URLSearchParams} */
url.URL.prototype.searchParams;
/** @type {string} */
url.URL.prototype.username;

/**
 * @return {string}
 */
url.URL.prototype.toString = function() {};

/**
 * @return {string}
 */
url.URL.prototype.toJSON = function() {};
