const s = Date.now();

console.log(1);
// 在本轮事件循环之后，下次事件循环之前，才会将时间定时器的事件消息添加到宏任务的消息队列
setTimeout(() => {
  console.log('2 - setTimeout');
  Promise.resolve().then(() => console.log("then - 5"));
}, 2500);
new Promise((resolve, reject) => {
  console.log("new Promise - 1");
  // 在本轮事件循环之后，下次事件循环之前，才会将时间定时器的事件消息添加到宏任务的消息队列
  // 下次事件循环开始执行，从宏任务的消息队列中执行一个宏任务的消息回调函数
  // 该回调函数打印"Promise setTimeout"，并将Promise resolve的消息加入微任务的消息队列
  setTimeout(() => {
    console.log("Promise setTimeout");
    resolve();
  }, 2000);
})
  .then(() => {
    // 执行一个宏任务的消息回调函数后，check微任务的消息队列，如果有消息，那么出队，执行回调函数，然后继续check微任务的消息队列
    // 如此循环直至微任务的消息队列为空
    console.log("then - 1");
  })
  .then(() => {
    console.log("then - 2");
  });

new Promise((resolve, reject) => {
  console.log("new Promise - 2");
  resolve(); // 在本次执行栈空闲后，执行本轮事件循环之前，将Promise resolve后的消息添加到微任务的消息队列
})
  .then(() => {
    // 在本轮事件循环中，从最先进入微任务消息队列中的消息开始处理队列中的消息。被处理的消息会被移出队列，并作为输入参数来调用与之关联的函数
    // 该回调函数被放入执行栈执行后，将一个Promise resolve的消息添加到微任务的消息队列；此时执行栈空闲，微任务的消息队列被添加进了新的Promise resolve消息
    // 继续check微任务的消息队列，如果还有微任务的消息，那么继续执行回调，如此循环直至，本轮事件循环中，微任务的消息队列为空
    console.log("then - 3");
    return new Promise(resolve => {
      setTimeout(() => {
        console.log("then setTimeout - 1");
        resolve();
      }, 0);
    })
  })
  .then(() => {
    console.log("then - 4");
  });

console.log(3);

while (true) {
  if (Date.now() - s >= 3000) {
    console.log("Good, looped for 3000 ms");
    break;
  }
}
