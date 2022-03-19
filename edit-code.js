function debounce(handler, time) {
  let timer = null;
  return function (event) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      handler.apply(this, event);
    }, time);
  };
}

function debounce(handler, time, flag) {
  let timer = null;
  return function (...args) {
    clearTimeout(timer);
    if (flag && !timer) {
      handler.apply(this, args);
    }
    timer = setTimeout(() => {
      handler.apply(this, args);
    }, time);
  };
}
