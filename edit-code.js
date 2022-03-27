(function () {
  // 浅拷贝Object
  function clone(target) {
    const result = {};
    for (let key in target) {
      result[key] = target[key];
    }

    return result;
  }
})();

(function () {
  // 深拷贝原始类型和Object
  function clone(target) {
    const isObject = target !== null && typeof target === "object";
    if (isObject) {
      const cloneTarget = {};
      for (let key in target) {
        cloneTarget[key] = clone(target[key]);
      }
      return cloneTarget;
    } else {
      return target;
    }
  }
})();

(function () {
  // 深拷贝原始类型, Object, Array
  function clone(target) {
    const isObject = target !== null && typeof target === "object";
    if (isObject) {
      const cloneTarget = Array.isArray(target) ? [] : {};
      for (let key in target) {
        cloneTarget[key] = clone(target[key]);
      }
      return cloneTarget;
    } else {
      return target;
    }
  }
})();

(function () {
  function clone(target, map = new Map()) {
    const isObject = target !== null && typeof target === "object";
    if (map.has(target)) {
      return map.get(target);
    }
    if (isObject) {
      const cloneTarget = Array.isArray(target) ? [] : {};
      map.set(target, cloneTarget);
      for (let key in target) {
        cloneTarget[key] = clone(target[key], map);
      }
      return cloneTarget;
    } else {
      return target;
    }
  }
})();
(function () {
  function forEach(target, fn) {
    let index = -1;
    while (++index < target.length) {
      fn(target[index], index);
    }
  }

  function clone1(target, map = new Map()) {
    const isObject = target !== null && typeof target === "object";
    if (map.has(target)) {
      return map.get(target);
    }
    if (isObject) {
      const cloneTarget = Array.isArray(target) ? [] : {};
      map.set(target, cloneTarget);
      for (let key in target) {
        cloneTarget[key] = clone1(target[key], map);
      }
      return cloneTarget;
    } else {
      return target;
    }
  }

  function clone2(target, map = new WeakMap()) {
    const isObject = target !== null && typeof target === "object";
    if (map.has(target)) {
      return map.get(target);
    }
    if (isObject) {
      const isArray = Array.isArray(target);
      const cloneTarget = isArray ? [] : {};
      const keys = isArray ? null : Object.keys(target);
      map.set(target, cloneTarget);
      forEach(keys || target, function (value, key) {
        if (keys) {
          key = value;
        }
        cloneTarget[key] = clone2(target[key], map);
      });
      return cloneTarget;
    } else {
      return target;
    }
  }
})();
(function () {
  // 判断所有的对象类型
  function isObject(target) {
    return (
      target !== null &&
      (typeof target === "object" || typeof target === "function")
    );
  }
})();
(function () {
  function getType(target) {
    return Object.prototype.toString.call(target);
  }
})();
(function () {
  // 可继续循环的
  const objtTag = "[object Object]";
  const arrTag = "[object Array]";
  const setTag = "[object Set]";
  const mapTag = "[object Map]";
  const argTag = "[object Arguments]";

  const numTag = "[object Number]";
  const strTag = "[object String]";
  const boolTag = "[object Boolean]";
  const dateTag = "[object Date]";
  const errorTag = "[object Error]";
  const symTag = "[object Symbol]";
  const regexpTag = "[object RegExp]";
  const funcTag = "[object Function]";

  const deepTag = [objtTag, arrTag, setTag, mapTag, argTag];
})();
(function () {
  function createObjectOf(target) {
    const Fn = target.constructor;
    return new Fn();
  }
})();
(function () {
  const objtTag = "[object Object]";
  const arrTag = "[object Array]";
  const setTag = "[object Set]";
  const mapTag = "[object Map]";
  const argTag = "[object Arguments]";

  function forEach(target, fn) {
    let index = -1;
    while (++index < target.length) {
      fn(target[index], index);
    }
  }

  function isObject(target) {
    return (
      target !== null &&
      (typeof target === "object" || typeof target === "function")
    );
  }

  function getType(target) {
    return Object.prototype.toString.call(target);
  }

  function createObjectOf(target) {
    const Fn = target.constructor;
    return new Fn();
  }

  function clone(target, map = new WeakMap()) {
    if (map.has(target)) {
      return map.get(target);
    }
    if (isObject(target)) {
      const type = getType(target);
      const cloneTarget = createObjectOf(target);
      map.set(target, cloneTarget);
      if (type == mapTag) {
        target.forEach(function (value, key) {
          cloneTarget.set(key, clone(value, map));
        });

        return cloneTarget;
      }

      if (type == setTag) {
        target.forEach(function (value) {
          cloneTarget.add(clone(value, map));
        });

        return cloneTarget;
      }

      const keys = Array.isArray(target) ? null : Object.keys(target);
      forEach(keys || target, function (value, key) {
        if (keys) {
          key = value;
        }
        cloneTarget[key] = clone(target[key], map);
      });

      return cloneTarget;
    } else {
      return target;
    }
  }

  // 测试用例
  // const map = new Map();
  // map.set("key", "value");
  // map.set("ConardLi", "code秘密花园");

  // const set = new Set();
  // set.add("ConardLi");
  // set.add("code秘密花园");

  // const target = {
  //   field1: 1,
  //   field2: undefined,
  //   field3: {
  //     child: "child",
  //   },
  //   field4: [2, 4, 8],
  //   empty: null,
  //   map,
  //   set,
  // };

  // target.target = target;
  // const result = clone(target);
  // console.log(result);
  // console.log(target === result);
})();
(function () {
  function cloneOtherType(target, type) {
    const Fn = target.constructor;
    switch (type) {
      case numTag:
      case strTag:
      case boolTag:
      case dateTag:
      case errorTag:
        return Fn(target);
      case symTag:
        return cloneSymbol(target);
      case regexpTag:
        return cloneRegExp(target);
      case funcTag:
        return cloneFunc(target);
      default:
        return null;
    }
  }
})();
(function () {
  function cloneSymbol(target) {
    return Object(Symbol.prototype.valueOf.call(target));
  }
})();
(function () {
  function cloneRegExp(target) {
    const flogReg = /\w*$/;
    const cloneTarget = target.constructor(
      target.source,
      flogReg.exec(target.toString())
    );
    cloneTarget.lastIndex = target.lastIndex;
    return cloneTarget;
  }
})();
(function () {
  function cloneFunc(target) {
    const paramRegExp = /(?<=\().+(?=\)\s*{)/;
    const bodyRegExp = /(?<={)(.|\n|\r)+(?=})/;
    const funcString = target.toString();
    const paramResult = paramRegExp.exec(funcString);
    const bodyResult = bodyRegExp.exec(funcString);
    if (target.prototype) {
      if (paramResult && bodyResult) {
        const param = paramResult[0].split(',');
        return new Function(...param, bodyResult[0]);
      } else if (!paramResult && bodyResult) {
        return new Function(bodyResult[0]);
      } else {
        return null;
      }
    } else {
      return eval(funcString);
    }
  }
})();
(function () {
  // 可继续循环的
  const objtTag = "[object Object]";
  const arrTag = "[object Array]";
  const setTag = "[object Set]";
  const mapTag = "[object Map]";
  const argTag = "[object Arguments]";

  const numTag = "[object Number]";
  const strTag = "[object String]";
  const boolTag = "[object Boolean]";
  const dateTag = "[object Date]";
  const errorTag = "[object Error]";
  const symTag = "[object Symbol]";
  const regexpTag = "[object RegExp]";
  const funcTag = "[object Function]";

  const deepTag = [objtTag, arrTag, setTag, mapTag, argTag];

  function forEach(target, fn) {
    let index = -1;
    while (++index < target.length) {
      fn(target[index], index);
    }
  }

  function isObject(target) {
    return (
      target !== null &&
      (typeof target === "object" || typeof target === "function")
    );
  }

  function getType(target) {
    return Object.prototype.toString.call(target);
  }

  function createObjectOf(target) {
    const Fn = target.constructor;
    return new Fn();
  }

  function cloneSymbol(target) {
    return Object(Symbol.prototype.valueOf.call(target));
  }

  function cloneRegExp(target) {
    const flogReg = /\w*$/;
    const cloneTarget = target.constructor(
      target.source,
      flogReg.exec(target.toString())
    );
    cloneTarget.lastIndex = target.lastIndex;
    return cloneTarget;
  }

  function cloneFunc(target) {
    const paramRegExp = /(?<=\().+(?=\)\s*{)/;
    const bodyRegExp = /(?<={)(.|\n|\r)+(?=})/;
    const funcString = target.toString();
    const paramResult = paramRegExp.exec(funcString);
    const bodyResult = bodyRegExp.exec(funcString);
    if (target.prototype) {
      if (paramResult && bodyResult) {
        const param = paramResult[0].split(',');
        return new Function(...param, bodyResult[0]);
      } else if (!paramResult && bodyResult) {
        return new Function(bodyResult[0]);
      } else {
        return null;
      }
    } else {
      return eval(funcString);
    }
  }

  function cloneOtherType(target, type) {
    const Fn = target.constructor;
    switch (type) {
      case numTag:
      case strTag:
      case boolTag:
      case dateTag:
      case errorTag:
        return new Fn(target);
      case symTag:
        return cloneSymbol(target);
      case regexpTag:
        return cloneRegExp(target);
      case funcTag:
        return cloneFunc(target);
      default:
        return null;
    }
  }

  function clone(target, map = new WeakMap()) {
    if (!isObject(target)) {
      return target;
    }
    const type = getType(target);
    let cloneTarget;
    if (deepTag.includes(type)) {
      cloneTarget = createObjectOf(target);
    } else {
      return cloneOtherType(target, type);
    }

    if (map.has(target)) {
      return map.get(target);
    }

    map.set(target, cloneTarget);
    if (type == mapTag) {
      target.forEach(function (value, key) {
        cloneTarget.set(key, clone(value, map));
      });

      return cloneTarget;
    }

    if (type == setTag) {
      target.forEach(function (value) {
        cloneTarget.add(clone(value, map));
      });

      return cloneTarget;
    }

    const keys = type === arrTag ? null : Object.keys(target);
    forEach(keys || target, function (value, key) {
      if (keys) {
        key = value;
      }
      cloneTarget[key] = clone(target[key], map);
    });

    return cloneTarget;
  }

  // 测试用例
  const map = new Map();
  map.set("key", "value");
  map.set("ConardLi", "code秘密花园");

  const set = new Set();
  set.add("ConardLi");
  set.add("code秘密花园");

  const target = {
    field1: 1,
    field2: undefined,
    field3: {
      child: "child",
    },
    field4: [2, 4, 8],
    empty: null,
    map,
    set,
    bool: new Boolean(true),
    num: new Number(2),
    str: new String(2),
    symbol: Object(Symbol(1)),
    date: new Date(),
    reg: /\d+/gi,
    error: new Error(),
    func1: () => {
      console.log("code秘密花园");
    },
    func2: function (a, b) {
      const sum = a + b;
      console.log(sum);
      return sum;
    },
  };

  target.target = target;
  const result = clone(target);
  console.log(result);
  console.log(target === result);
  result.func1();
  result.func2(1, 2);
})();
(function () {})();
