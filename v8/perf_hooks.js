/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from types-v8/perf_hooks.d.ts:
// Derived from: declare module "perf_hooks"
/** @const */
var perf_hooks = {};
/**
 * @record
 * @struct
 */
perf_hooks.PerformanceEntry = function() {};
/** @type {number} */
perf_hooks.PerformanceEntry.prototype.duration;
/** @type {string} */
perf_hooks.PerformanceEntry.prototype.name;
/** @type {number} */
perf_hooks.PerformanceEntry.prototype.startTime;
/** @type {string} */
perf_hooks.PerformanceEntry.prototype.entryType;
/** @type {number} */
perf_hooks.PerformanceEntry.prototype.kind;
/**
 * @extends {perf_hooks.PerformanceEntry}
 * @record
 * @struct
 */
perf_hooks.PerformanceNodeTiming = function() {};
/** @type {number} */
perf_hooks.PerformanceNodeTiming.prototype.bootstrapComplete;
/** @type {number} */
perf_hooks.PerformanceNodeTiming.prototype.clusterSetupEnd;
/** @type {number} */
perf_hooks.PerformanceNodeTiming.prototype.clusterSetupStart;
/** @type {number} */
perf_hooks.PerformanceNodeTiming.prototype.loopExit;
/** @type {number} */
perf_hooks.PerformanceNodeTiming.prototype.loopStart;
/** @type {number} */
perf_hooks.PerformanceNodeTiming.prototype.moduleLoadEnd;
/** @type {number} */
perf_hooks.PerformanceNodeTiming.prototype.moduleLoadStart;
/** @type {number} */
perf_hooks.PerformanceNodeTiming.prototype.nodeStart;
/** @type {number} */
perf_hooks.PerformanceNodeTiming.prototype.preloadModuleLoadEnd;
/** @type {number} */
perf_hooks.PerformanceNodeTiming.prototype.preloadModuleLoadStart;
/** @type {number} */
perf_hooks.PerformanceNodeTiming.prototype.thirdPartyMainEnd;
/** @type {number} */
perf_hooks.PerformanceNodeTiming.prototype.thirdPartyMainStart;
/** @type {number} */
perf_hooks.PerformanceNodeTiming.prototype.v8Start;
/**
 * @record
 * @struct
 */
perf_hooks.Performance = function() {};
/** @type {!perf_hooks.PerformanceNodeTiming} */
perf_hooks.Performance.prototype.nodeTiming;
/** @type {number} */
perf_hooks.Performance.prototype.timeOrigin;

/**
 * If name is not provided, removes all PerformanceFunction objects from the Performance Timeline.
 * If name is provided, removes entries with name.
 * @param {string=} name
 * @return {void}
 */
perf_hooks.Performance.prototype.clearFunctions = function(name) {};

/**
 * If name is not provided, removes all PerformanceMark objects from the Performance Timeline.
 * If name is provided, removes only the named mark.
 * @param {string=} name
 * @return {void}
 */
perf_hooks.Performance.prototype.clearMarks = function(name) {};

/**
 * If name is not provided, removes all PerformanceMeasure objects from the Performance Timeline.
 * If name is provided, removes only objects whose performanceEntry.name matches name.
 * @param {string=} name
 * @return {void}
 */
perf_hooks.Performance.prototype.clearMeasures = function(name) {};

/**
 * Returns a list of all PerformanceEntry objects in chronological order with respect to performanceEntry.startTime.
 * @return {!Array<!perf_hooks.PerformanceEntry>} list of all PerformanceEntry objects
 */
perf_hooks.Performance.prototype.getEntries = function() {};

/**
 * Returns a list of all PerformanceEntry objects in chronological order with respect to performanceEntry.startTime
 * whose performanceEntry.name is equal to name, and optionally, whose performanceEntry.entryType is equal to type.
 * @param {string} name
 * @param {string=} type
 * @return {!Array<!perf_hooks.PerformanceEntry>} list of all PerformanceEntry objects
 */
perf_hooks.Performance.prototype.getEntriesByName = function(name, type) {};

/**
 * Returns a list of all PerformanceEntry objects in chronological order with respect to performanceEntry.startTime
 * whose performanceEntry.entryType is equal to type.
 * @param {string} type
 * @return {!Array<!perf_hooks.PerformanceEntry>} list of all PerformanceEntry objects
 */
perf_hooks.Performance.prototype.getEntriesByType = function(type) {};

/**
 * Creates a new PerformanceMark entry in the Performance Timeline.
 * A PerformanceMark is a subclass of PerformanceEntry whose performanceEntry.entryType is always 'mark',
 * and whose performanceEntry.duration is always 0.
 * Performance marks are used to mark specific significant moments in the Performance Timeline.
 * @param {string=} name
 * @return {void}
 */
perf_hooks.Performance.prototype.mark = function(name) {};

/**
 * Creates a new PerformanceMeasure entry in the Performance Timeline.
 * A PerformanceMeasure is a subclass of PerformanceEntry whose performanceEntry.entryType is always 'measure',
 * and whose performanceEntry.duration measures the number of milliseconds elapsed since startMark and endMark.
 * 
 * The startMark argument may identify any existing PerformanceMark in the the Performance Timeline, or may identify
 * any of the timestamp properties provided by the PerformanceNodeTiming class. If the named startMark does not exist,
 * then startMark is set to timeOrigin by default.
 * 
 * The endMark argument must identify any existing PerformanceMark in the the Performance Timeline or any of the timestamp
 * properties provided by the PerformanceNodeTiming class. If the named endMark does not exist, an error will be thrown.
 * @param {string} name
 * @param {string} startMark
 * @param {string} endMark
 * @return {void}
 */
perf_hooks.Performance.prototype.measure = function(name, startMark, endMark) {};

/**
 * @return {number} the current high resolution millisecond timestamp
 */
perf_hooks.Performance.prototype.now = function() {};

/**
 * Wraps a function within a new function that measures the running time of the wrapped function.
 * A PerformanceObserver must be subscribed to the 'function' event type in order for the timing details to be accessed.
 * @template T
 * @param {perf_hooks.T} fn
 * @return {perf_hooks.T}
 */
perf_hooks.Performance.prototype.timerify = function(fn) {};
/**
 * @record
 * @struct
 */
perf_hooks.PerformanceObserverEntryList = function() {};

/**
 * @return {!Array<!perf_hooks.PerformanceEntry>} a list of PerformanceEntry objects in chronological order with respect to performanceEntry.startTime.
 */
perf_hooks.PerformanceObserverEntryList.prototype.getEntries = function() {};

/**
 * @param {string} name
 * @param {string=} type
 * @return {!Array<!perf_hooks.PerformanceEntry>} a list of PerformanceEntry objects in chronological order with respect to performanceEntry.startTime
 * whose performanceEntry.name is equal to name, and optionally, whose performanceEntry.entryType is equal to type.
 */
perf_hooks.PerformanceObserverEntryList.prototype.getEntriesByName = function(name, type) {};

/**
 * @param {string} type
 * @return {!Array<!perf_hooks.PerformanceEntry>} Returns a list of PerformanceEntry objects in chronological order with respect to performanceEntry.startTime
 * whose performanceEntry.entryType is equal to type.
 */
perf_hooks.PerformanceObserverEntryList.prototype.getEntriesByType = function(type) {};

/** @typedef {function(!perf_hooks.PerformanceObserverEntryList, !perf_hooks.PerformanceObserver): void} */
perf_hooks.PerformanceObserverCallback;

/**
 * @constructor
 * @struct
 * @param {function(!perf_hooks.PerformanceObserverEntryList, !perf_hooks.PerformanceObserver): void} callback
 */
perf_hooks.PerformanceObserver = function(callback) {};

/**
 * Disconnects the PerformanceObserver instance from all notifications.
 * @return {void}
 */
perf_hooks.PerformanceObserver.prototype.disconnect = function() {};

/**
 * Subscribes the PerformanceObserver instance to notifications of new PerformanceEntry instances identified by options.entryTypes.
 * When options.buffered is false, the callback will be invoked once for every PerformanceEntry instance.
 * Property buffered defaults to false.
 * @param {{entryTypes: !Array<string>, buffered: boolean}} options
 * @return {void}
 */
perf_hooks.PerformanceObserver.prototype.observe = function(options) {};
/** @const */
perf_hooks.constants = {};
/** @type {number} */
perf_hooks.constants.NODE_PERFORMANCE_GC_MAJOR;
/** @type {number} */
perf_hooks.constants.NODE_PERFORMANCE_GC_MINOR;
/** @type {number} */
perf_hooks.constants.NODE_PERFORMANCE_GC_INCREMENTAL;
/** @type {number} */
perf_hooks.constants.NODE_PERFORMANCE_GC_WEAKCB;
/** @type {!perf_hooks.Performance} */
perf_hooks.performance;
