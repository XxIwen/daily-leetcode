// a instanceof Object 判断Object的prototype是否在a的原型链上
function myInstanceof(target, origin) {
  const proto = target.__proto__;
  if (proto) {
    if (proto === origin.prototype) {
      return true;
    } else {
      myInstanceof(proto, origin);
    }
  } else {
    return false;
  }
}
