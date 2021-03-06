/// <reference path="./global.d.ts" />

/************************************************
*                                               *
*               GLOBAL INTERFACES               *
*                                               *
************************************************/
declare namespace NodeJS {
  export interface InspectOptions {
      showHidden?: boolean;
      depth?: number | null;
      colors?: boolean;
      customInspect?: boolean;
      showProxy?: boolean;
      maxArrayLength?: number | null;
      breakLength?: number;
  }

  export interface ConsoleConstructor {
      prototype: Console;
      new(stdout: WritableStream, stderr?: WritableStream): Console;
  }

  export interface CallSite {
      /**
       * Value of "this"
       */
      getThis(): any;

      /**
       * Type of "this" as a string.
       * This is the name of the function stored in the constructor field of
       * "this", if available.  Otherwise the object's [[Class]] internal
       * property.
       */
      getTypeName(): string | null;

      /**
       * Current function
       */
      getFunction(): Function | undefined;

      /**
       * Name of the current function, typically its name property.
       * If a name property is not available an attempt will be made to try
       * to infer a name from the function's context.
       */
      getFunctionName(): string | null;

      /**
       * Name of the property [of "this" or one of its prototypes] that holds
       * the current function
       */
      getMethodName(): string | null;

      /**
       * Name of the script [if this function was defined in a script]
       */
      getFileName(): string | null;

      /**
       * Current line number [if this function was defined in a script]
       */
      getLineNumber(): number | null;

      /**
       * Current column number [if this function was defined in a script]
       */
      getColumnNumber(): number | null;

      /**
       * A call site object representing the location where eval was called
       * [if this function was created using a call to eval]
       */
      getEvalOrigin(): string | undefined;

      /**
       * Is this a toplevel invocation, that is, is "this" the global object?
       */
      isToplevel(): boolean;

      /**
       * Does this call take place in code defined by a call to eval?
       */
      isEval(): boolean;

      /**
       * Is this call in native V8 code?
       */
      isNative(): boolean;

      /**
       * Is this a constructor call?
       */
      isConstructor(): boolean;
  }

  export interface ErrnoException extends Error {
      errno?: number;
      code?: string;
      path?: string;
      syscall?: string;
      stack?: string;
  }

  export class EventEmitter {
      addListener(event: string | symbol, listener: (...args: any[]) => void): this;
      on(event: string | symbol, listener: (...args: any[]) => void): this;
      once(event: string | symbol, listener: (...args: any[]) => void): this;
      removeListener(event: string | symbol, listener: (...args: any[]) => void): this;
      removeAllListeners(event?: string | symbol): this;
      setMaxListeners(n: number): this;
      getMaxListeners(): number;
      listeners(event: string | symbol): Function[];
      emit(event: string | symbol, ...args: any[]): boolean;
      listenerCount(type: string | symbol): number;
      // Added in Node 6...
      prependListener(event: string | symbol, listener: (...args: any[]) => void): this;
      prependOnceListener(event: string | symbol, listener: (...args: any[]) => void): this;
      eventNames(): Array<string | symbol>;
  }

  export interface ReadableStream extends EventEmitter {
      readable: boolean;
      read(size?: number): string | Buffer;
      setEncoding(encoding: string): this;
      pause(): this;
      resume(): this;
      isPaused(): boolean;
      pipe<T extends WritableStream>(destination: T, options?: { end?: boolean; }): T;
      unpipe<T extends WritableStream>(destination?: T): this;
      unshift(chunk: string): void;
      unshift(chunk: Buffer): void;
      wrap(oldStream: ReadableStream): this;
  }

  export interface WritableStream extends EventEmitter {
      writable: boolean;
      write(buffer: Buffer | string, cb?: Function): boolean;
      write(str: string, encoding?: string, cb?: Function): boolean;
      end(cb?: Function): void;
      end(buffer: Buffer, cb?: Function): void;
      end(str: string, cb?: Function): void;
      end(str: string, encoding?: string, cb?: Function): void;
  }

  export interface ReadWriteStream extends ReadableStream, WritableStream { }

  export interface Events extends EventEmitter { }

  export interface Domain extends Events {
      run(fn: Function): void;
      add(emitter: Events): void;
      remove(emitter: Events): void;
      bind(cb: (err: Error, data: any) => any): any;
      intercept(cb: (data: any) => any): any;
      dispose(): void;

      addListener(event: string, listener: (...args: any[]) => void): this;
      on(event: string, listener: (...args: any[]) => void): this;
      once(event: string, listener: (...args: any[]) => void): this;
      removeListener(event: string, listener: (...args: any[]) => void): this;
      removeAllListeners(event?: string): this;
  }

  export interface MemoryUsage {
      rss: number;
      heapTotal: number;
      heapUsed: number;
      external: number;
  }

  export interface CpuUsage {
      user: number;
      system: number;
  }

  export interface ProcessRelease {
      name: string;
      sourceUrl?: string;
      headersUrl?: string;
      libUrl?: string;
      lts?: string;
  }

  export interface ProcessVersions {
      http_parser: string;
      node: string;
      v8: string;
      ares: string;
      uv: string;
      zlib: string;
      modules: string;
      openssl: string;
  }

  type Platform = 'aix'
      | 'android'
      | 'darwin'
      | 'freebsd'
      | 'linux'
      | 'openbsd'
      | 'sunos'
      | 'win32'
      | 'cygwin';

  type Signals =
      "SIGABRT" | "SIGALRM" | "SIGBUS" | "SIGCHLD" | "SIGCONT" | "SIGFPE" | "SIGHUP" | "SIGILL" | "SIGINT" | "SIGIO" |
      "SIGIOT" | "SIGKILL" | "SIGPIPE" | "SIGPOLL" | "SIGPROF" | "SIGPWR" | "SIGQUIT" | "SIGSEGV" | "SIGSTKFLT" |
      "SIGSTOP" | "SIGSYS" | "SIGTERM" | "SIGTRAP" | "SIGTSTP" | "SIGTTIN" | "SIGTTOU" | "SIGUNUSED" | "SIGURG" |
      "SIGUSR1" | "SIGUSR2" | "SIGVTALRM" | "SIGWINCH" | "SIGXCPU" | "SIGXFSZ" | "SIGBREAK" | "SIGLOST" | "SIGINFO";

  type BeforeExitListener = (code: number) => void;
  type DisconnectListener = () => void;
  type ExitListener = (code: number) => void;
  type RejectionHandledListener = (promise: Promise<any>) => void;
  type UncaughtExceptionListener = (error: Error) => void;
  type UnhandledRejectionListener = (reason: any, promise: Promise<any>) => void;
  type WarningListener = (warning: Error) => void;
  type MessageListener = (message: any, sendHandle: any) => void;
  type SignalsListener = () => void;
  type NewListenerListener = (type: string | symbol, listener: (...args: any[]) => void) => void;
  type RemoveListenerListener = (type: string | symbol, listener: (...args: any[]) => void) => void;

  export interface Socket extends ReadWriteStream {
      isTTY?: true;
  }

  export interface ProcessEnv {
      [key: string]: string | undefined;
  }

  export interface WriteStream extends Socket {
      readonly writableHighWaterMark: number;
      columns?: number;
      rows?: number;
      _write(chunk: any, encoding: string, callback: Function): void;
      _destroy(err: Error | undefined, callback: Function): void;
      _final(callback: Function): void;
      setDefaultEncoding(encoding: string): this;
      cork(): void;
      uncork(): void;
      destroy(error?: Error): void;
  }
  export interface ReadStream extends Socket {
      readonly readableHighWaterMark: number;
      isRaw?: boolean;
      setRawMode?(mode: boolean): void;
      _read(size: number): void;
      _destroy(err: Error | undefined, callback: Function): void;
      push(chunk: any, encoding?: string): boolean;
      destroy(error?: Error): void;
  }

  export interface Process extends EventEmitter {
      stdout: WriteStream;
      stderr: WriteStream;
      stdin: ReadStream;
      openStdin(): Socket;
      argv: string[];
      argv0: string;
      execArgv: string[];
      execPath: string;
      abort(): void;
      chdir(directory: string): void;
      cwd(): string;
      debugPort: number;
      emitWarning(warning: string | Error, name?: string, ctor?: Function): void;
      env: ProcessEnv;
      exit(code?: number): never;
      exitCode: number;
      getgid(): number;
      setgid(id: number | string): void;
      getuid(): number;
      setuid(id: number | string): void;
      geteuid(): number;
      seteuid(id: number | string): void;
      getegid(): number;
      setegid(id: number | string): void;
      getgroups(): number[];
      setgroups(groups: Array<string | number>): void;
      version: string;
      versions: ProcessVersions;
      config: {
          target_defaults: {
              cflags: any[];
              default_configuration: string;
              defines: string[];
              include_dirs: string[];
              libraries: string[];
          };
          variables: {
              clang: number;
              host_arch: string;
              node_install_npm: boolean;
              node_install_waf: boolean;
              node_prefix: string;
              node_shared_openssl: boolean;
              node_shared_v8: boolean;
              node_shared_zlib: boolean;
              node_use_dtrace: boolean;
              node_use_etw: boolean;
              node_use_openssl: boolean;
              target_arch: string;
              v8_no_strict_aliasing: number;
              v8_use_snapshot: boolean;
              visibility: string;
          };
      };
      kill(pid: number, signal?: string | number): void;
      pid: number;
      title: string;
      arch: string;
      platform: Platform;
      mainModule?: NodeModule;
      memoryUsage(): MemoryUsage;
      cpuUsage(previousValue?: CpuUsage): CpuUsage;
      nextTick(callback: Function, ...args: any[]): void;
      release: ProcessRelease;
      umask(mask?: number): number;
      uptime(): number;
      hrtime(time?: [number, number]): [number, number];
      domain: Domain;

      // Worker
      send?(message: any, sendHandle?: any): void;
      disconnect(): void;
      connected: boolean;

      /**
       * EventEmitter
       *   1. beforeExit
       *   2. disconnect
       *   3. exit
       *   4. message
       *   5. rejectionHandled
       *   6. uncaughtException
       *   7. unhandledRejection
       *   8. warning
       *   9. message
       *  10. <All OS Signals>
       *  11. newListener/removeListener inherited from EventEmitter
       */
      addListener(event: "beforeExit", listener: BeforeExitListener): this;
      addListener(event: "disconnect", listener: DisconnectListener): this;
      addListener(event: "exit", listener: ExitListener): this;
      addListener(event: "rejectionHandled", listener: RejectionHandledListener): this;
      addListener(event: "uncaughtException", listener: UncaughtExceptionListener): this;
      addListener(event: "unhandledRejection", listener: UnhandledRejectionListener): this;
      addListener(event: "warning", listener: WarningListener): this;
      addListener(event: "message", listener: MessageListener): this;
      addListener(event: Signals, listener: SignalsListener): this;
      addListener(event: "newListener", listener: NewListenerListener): this;
      addListener(event: "removeListener", listener: RemoveListenerListener): this;

      emit(event: "beforeExit", code: number): boolean;
      emit(event: "disconnect"): boolean;
      emit(event: "exit", code: number): boolean;
      emit(event: "rejectionHandled", promise: Promise<any>): boolean;
      emit(event: "uncaughtException", error: Error): boolean;
      emit(event: "unhandledRejection", reason: any, promise: Promise<any>): boolean;
      emit(event: "warning", warning: Error): boolean;
      emit(event: "message", message: any, sendHandle: any): this;
      emit(event: Signals): boolean;
      emit(event: "newListener", eventName: string | symbol, listener: (...args: any[]) => void): this;
      emit(event: "removeListener", eventName: string, listener: (...args: any[]) => void): this;

      on(event: "beforeExit", listener: BeforeExitListener): this;
      on(event: "disconnect", listener: DisconnectListener): this;
      on(event: "exit", listener: ExitListener): this;
      on(event: "rejectionHandled", listener: RejectionHandledListener): this;
      on(event: "uncaughtException", listener: UncaughtExceptionListener): this;
      on(event: "unhandledRejection", listener: UnhandledRejectionListener): this;
      on(event: "warning", listener: WarningListener): this;
      on(event: "message", listener: MessageListener): this;
      on(event: Signals, listener: SignalsListener): this;
      on(event: "newListener", listener: NewListenerListener): this;
      on(event: "removeListener", listener: RemoveListenerListener): this;

      once(event: "beforeExit", listener: BeforeExitListener): this;
      once(event: "disconnect", listener: DisconnectListener): this;
      once(event: "exit", listener: ExitListener): this;
      once(event: "rejectionHandled", listener: RejectionHandledListener): this;
      once(event: "uncaughtException", listener: UncaughtExceptionListener): this;
      once(event: "unhandledRejection", listener: UnhandledRejectionListener): this;
      once(event: "warning", listener: WarningListener): this;
      once(event: "message", listener: MessageListener): this;
      once(event: Signals, listener: SignalsListener): this;
      once(event: "newListener", listener: NewListenerListener): this;
      once(event: "removeListener", listener: RemoveListenerListener): this;

      prependListener(event: "beforeExit", listener: BeforeExitListener): this;
      prependListener(event: "disconnect", listener: DisconnectListener): this;
      prependListener(event: "exit", listener: ExitListener): this;
      prependListener(event: "rejectionHandled", listener: RejectionHandledListener): this;
      prependListener(event: "uncaughtException", listener: UncaughtExceptionListener): this;
      prependListener(event: "unhandledRejection", listener: UnhandledRejectionListener): this;
      prependListener(event: "warning", listener: WarningListener): this;
      prependListener(event: "message", listener: MessageListener): this;
      prependListener(event: Signals, listener: SignalsListener): this;
      prependListener(event: "newListener", listener: NewListenerListener): this;
      prependListener(event: "removeListener", listener: RemoveListenerListener): this;

      prependOnceListener(event: "beforeExit", listener: BeforeExitListener): this;
      prependOnceListener(event: "disconnect", listener: DisconnectListener): this;
      prependOnceListener(event: "exit", listener: ExitListener): this;
      prependOnceListener(event: "rejectionHandled", listener: RejectionHandledListener): this;
      prependOnceListener(event: "uncaughtException", listener: UncaughtExceptionListener): this;
      prependOnceListener(event: "unhandledRejection", listener: UnhandledRejectionListener): this;
      prependOnceListener(event: "warning", listener: WarningListener): this;
      prependOnceListener(event: "message", listener: MessageListener): this;
      prependOnceListener(event: Signals, listener: SignalsListener): this;
      prependOnceListener(event: "newListener", listener: NewListenerListener): this;
      prependOnceListener(event: "removeListener", listener: RemoveListenerListener): this;

      listeners(event: "beforeExit"): BeforeExitListener[];
      listeners(event: "disconnect"): DisconnectListener[];
      listeners(event: "exit"): ExitListener[];
      listeners(event: "rejectionHandled"): RejectionHandledListener[];
      listeners(event: "uncaughtException"): UncaughtExceptionListener[];
      listeners(event: "unhandledRejection"): UnhandledRejectionListener[];
      listeners(event: "warning"): WarningListener[];
      listeners(event: "message"): MessageListener[];
      listeners(event: Signals): SignalsListener[];
      listeners(event: "newListener"): NewListenerListener[];
      listeners(event: "removeListener"): RemoveListenerListener[];
  }

  export interface Global {
      Array: typeof Array;
      ArrayBuffer: typeof ArrayBuffer;
      Boolean: typeof Boolean;
      Buffer: typeof GlobalBuffer;
      DataView: typeof DataView;
      Date: typeof Date;
      Error: typeof Error;
      EvalError: typeof EvalError;
      Float32Array: typeof Float32Array;
      Float64Array: typeof Float64Array;
      Function: typeof Function;
      GLOBAL: Global;
      Infinity: typeof Infinity;
      Int16Array: typeof Int16Array;
      Int32Array: typeof Int32Array;
      Int8Array: typeof Int8Array;
      Intl: typeof Intl;
      JSON: typeof JSON;
      Map: MapConstructor;
      Math: typeof Math;
      NaN: typeof NaN;
      Number: typeof Number;
      Object: typeof Object;
      Promise: Function;
      RangeError: typeof RangeError;
      ReferenceError: typeof ReferenceError;
      RegExp: typeof RegExp;
      Set: SetConstructor;
      String: typeof String;
      Symbol: Function;
      SyntaxError: typeof SyntaxError;
      TypeError: typeof TypeError;
      URIError: typeof URIError;
      Uint16Array: typeof Uint16Array;
      Uint32Array: typeof Uint32Array;
      Uint8Array: typeof Uint8Array;
      Uint8ClampedArray: Function;
      WeakMap: WeakMapConstructor;
      WeakSet: WeakSetConstructor;
      clearImmediate: (immediateId: any) => void;
      clearInterval: (intervalId: NodeJS.Timer) => void;
      clearTimeout: (timeoutId: NodeJS.Timer) => void;
      console: typeof console;
      decodeURI: typeof decodeURI;
      decodeURIComponent: typeof decodeURIComponent;
      encodeURI: typeof encodeURI;
      encodeURIComponent: typeof encodeURIComponent;
      escape: (str: string) => string;
      eval: typeof eval;
      global: Global;
      isFinite: typeof isFinite;
      isNaN: typeof isNaN;
      parseFloat: typeof parseFloat;
      parseInt: typeof parseInt;
      process: Process;
      root: Global;
      setImmediate: (callback: (...args: any[]) => void, ...args: any[]) => any;
      setInterval: (callback: (...args: any[]) => void, ms: number, ...args: any[]) => NodeJS.Timer;
      setTimeout: (callback: (...args: any[]) => void, ms: number, ...args: any[]) => NodeJS.Timer;
      undefined: typeof undefined;
      unescape: (str: string) => string;
      gc: () => void;
      v8debug?: any;
  }

  export interface Timer {
      ref(): void;
      unref(): void;
  }

  class Module {
      static runMain(): void;
      static wrap(code: string): string;
      static builtinModules: string[];

      static Module: typeof Module;

      exports: any;
      require: NodeRequireFunction;
      id: string;
      filename: string;
      loaded: boolean;
      parent: Module | null;
      children: Module[];
      paths: string[];

      constructor(id: string, parent?: Module);
  }
}

/**
* Raw data is stored in instances of the Buffer class.
* A Buffer is similar to an array of integers but corresponds to a raw memory allocation outside the V8 heap.  A Buffer cannot be resized.
* Valid string encodings: 'ascii'|'utf8'|'utf16le'|'ucs2'(alias of 'utf16le')|'base64'|'binary'(deprecated)|'hex'
*/
declare var GlobalBuffer: {
  /**
   * Allocates a new buffer containing the given {str}.
   *
   * @param str String to store in buffer.
   * @param encoding encoding to use, optional.  Default is 'utf8'
   */
  new(str: string, encoding?: string): Buffer;
  /**
   * Allocates a new buffer of {size} octets.
   *
   * @param size count of octets to allocate.
   */
  new(size: number): Buffer;
  /**
   * Allocates a new buffer containing the given {array} of octets.
   *
   * @param array The octets to store.
   */
  new(array: Uint8Array): Buffer;
  /**
   * Produces a Buffer backed by the same allocated memory as
   * the given {ArrayBuffer}.
   *
   *
   * @param arrayBuffer The ArrayBuffer with which to share memory.
   */
  new(arrayBuffer: ArrayBuffer): Buffer;
  /**
   * Allocates a new buffer containing the given {array} of octets.
   *
   * @param array The octets to store.
   */
  new(array: any[]): Buffer;
  /**
   * Copies the passed {buffer} data onto a new {Buffer} instance.
   *
   * @param buffer The buffer to copy.
   */
  new(buffer: Buffer): Buffer;
  prototype: Buffer;
  /**
   * When passed a reference to the .buffer property of a TypedArray instance,
   * the newly created Buffer will share the same allocated memory as the TypedArray.
   * The optional {byteOffset} and {length} arguments specify a memory range
   * within the {arrayBuffer} that will be shared by the Buffer.
   *
   * @param arrayBuffer The .buffer property of a TypedArray or a new ArrayBuffer()
   */
  from(arrayBuffer: ArrayBuffer, byteOffset?: number, length?: number): Buffer;
  /**
   * Creates a new Buffer using the passed {data}
   * @param data data to create a new Buffer
   */
  from(data: any[] | string | Buffer | ArrayBuffer /*| TypedArray*/): Buffer;
  /**
   * Creates a new Buffer containing the given JavaScript string {str}.
   * If provided, the {encoding} parameter identifies the character encoding.
   * If not provided, {encoding} defaults to 'utf8'.
   */
  from(str: string, encoding?: string): Buffer;
  /**
   * Returns true if {obj} is a Buffer
   *
   * @param obj object to test.
   */
  isBuffer(obj: any): obj is Buffer;
  /**
   * Returns true if {encoding} is a valid encoding argument.
   * Valid string encodings in Node 0.12: 'ascii'|'utf8'|'utf16le'|'ucs2'(alias of 'utf16le')|'base64'|'binary'(deprecated)|'hex'
   *
   * @param encoding string to test.
   */
  isEncoding(encoding: string): boolean;
  /**
   * Gives the actual byte length of a string. encoding defaults to 'utf8'.
   * This is not the same as String.prototype.length since that returns the number of characters in a string.
   *
   * @param string string to test. (TypedArray is also allowed, but it is only available starting ES2017)
   * @param encoding encoding used to evaluate (defaults to 'utf8')
   */
  byteLength(string: string | Buffer | DataView | ArrayBuffer, encoding?: string): number;
  /**
   * Returns a buffer which is the result of concatenating all the buffers in the list together.
   *
   * If the list has no items, or if the totalLength is 0, then it returns a zero-length buffer.
   * If the list has exactly one item, then the first item of the list is returned.
   * If the list has more than one item, then a new Buffer is created.
   *
   * @param list An array of Buffer objects to concatenate
   * @param totalLength Total length of the buffers when concatenated.
   *   If totalLength is not provided, it is read from the buffers in the list. However, this adds an additional loop to the function, so it is faster to provide the length explicitly.
   */
  concat(list: Buffer[], totalLength?: number): Buffer;
  /**
   * The same as buf1.compare(buf2).
   */
  compare(buf1: Buffer, buf2: Buffer): number;
  /**
   * Allocates a new buffer of {size} octets.
   *
   * @param size count of octets to allocate.
   * @param fill if specified, buffer will be initialized by calling buf.fill(fill).
   *    If parameter is omitted, buffer will be filled with zeros.
   * @param encoding encoding used for call to buf.fill while initalizing
   */
  alloc(size: number, fill?: string | Buffer | number, encoding?: string): Buffer;
  /**
   * Allocates a new buffer of {size} octets, leaving memory not initialized, so the contents
   * of the newly created Buffer are unknown and may contain sensitive data.
   *
   * @param size count of octets to allocate
   */
  allocUnsafe(size: number): Buffer;
  /**
   * Allocates a new non-pooled buffer of {size} octets, leaving memory not initialized, so the contents
   * of the newly created Buffer are unknown and may contain sensitive data.
   *
   * @param size count of octets to allocate
   */
  allocUnsafeSlow(size: number): Buffer;
  /**
   * This is the number of bytes used to determine the size of pre-allocated, internal Buffer instances used for pooling. This value may be modified.
   */
  poolSize: number;
};
