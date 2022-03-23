function EventEmitter() {
  this._maxListeners = 10;
  this._events = Object.create(null);
}

EventEmitter.prototype.addListener = function (type, listener, prepend) {
  if (this._events[type]) {
    if (!!prepend) {
      this._events[type].unshift(listener);
    } else {
      this._events[type].push(listener);
    }
  } else {
    this._events[type] = [listener];
  }
};

EventEmitter.prototype.removeListener = function (type, listener) {
  if (Array.isArray(this._events[type])) {
    if (!listener) {
      delete this._events[type];
    } else {
      this._events[type] = this._events[type].filter(
        (e) => e !== listener && e.origin !== listener
      );
    }
  }
};

EventEmitter.prototype.once = function (type, listener) {
  const only = (...args) => {
    listener.apply(this, args);
    this.removeListener(type, listener);
  };
  only.origin = listener;
  this.addListener(type, only);
};

EventEmitter.prototype.emit = function (type, ...args) {
  if (Array.isArray(this._events[type])) {
    this._events[type].forEach((fn) => {
      fn.apply(this, args);
    });
  }
};

EventEmitter.prototype.setMaxListener = function (count) {
  this._maxListeners = count;
};

var emitter = new EventEmitter();

var onceListener = function (args) {
  console.log("我只能被执行一次", args, this);
};

var listener = function (args) {
  console.log("我是一个listener", args, this);
};

emitter.once("click", onceListener);
emitter.addListener("click", listener);

emitter.emit("click", "参数");
emitter.emit("click");

emitter.removeListener("click", listener);
emitter.emit("click");
