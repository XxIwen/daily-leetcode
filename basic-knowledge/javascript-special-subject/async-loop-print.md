## 使用 promise + async await 实现异步循环打印

`````js
const sleep = function (time, i) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(i);
    }, time);
  });
};

const start = async function () {
  for (let i = 0; i < 6; i++) {
    // console.log("````", i);
    const result = await sleep(1000, i);
    console.log(result);
  }
};

// const start = function () {
//   for (let i = 0; i < 6; i++) {
//     console.log('````', i);
//     sleep(1000, i).then(function (result) {
//       console.log(result);
//     });
//   }
// }

start();
`````
