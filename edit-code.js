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
    const isObject = target !== null && typeof target === 'object';
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
    let index = 0;
    while(index++ < target.length) {
      fn(target[index - 1], index - 1);
    }
  };

  function clone1(target, map = new Map()) {
    const isObject = target !== null && typeof target === 'object';
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

  function clone2(target, map = new Map()) {
    const isObject = target !== null && typeof target === 'object';
    if (map.has(target)) {
      return map.get(target);
    }
    if (isObject) {
      const isArray = Array.isArray(target)
      const cloneTarget = isArray ? [] : {};
      const keys = isArray ? target : Object.keys(target);
      map.set(target, cloneTarget);
      forEach(target, function (value, key) {
        if (!isArray) {
          key = value;
        }
        cloneTarget[key] = clone2(target[key], map);
      })
      return cloneTarget;
    } else {
      return target;
    }
  }

  const target = {
    field1: 1,
    field2: undefined,
    field3: {
      child: "child",
    },
    field4: [2, 4, 8],
    f: {
      f: { f: { f: { f: { f: { f: { f: { f: { f: { f: { f: {} } } } } } } } } } },
    },
  };

  target.target = target;

  console.time();
  const result = clone1(target);
  console.timeEnd();

  console.time();
  const result2 = clone2(target);
  console.timeEnd();
  console.log(result2);
})();
(function () {})();
