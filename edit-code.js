const sleep = function (time, i) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(i);
    }, time);
  });
};

const start = function (x) {
  let head = Promise.resolve(x);
  for (let i = 0; i < 6; i++) {
    const func = (val) => {
      if (val !== -1) {
        console.log(val);
      }
      return sleep(1000, i);
    };
    head = head.then(func);
  }

  head.then((val) => {
    console.log(val);
  });
};

start(-1);
