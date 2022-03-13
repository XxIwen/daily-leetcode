console.log(a); // undefined
var a = function a() {
  a = 20;
  console.log(a);
}
a(); // function a() {}
console.log(a);  // function a() {}
