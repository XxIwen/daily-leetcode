function Parent() {
  this.name = "fedaily";
}

Parent.prototype.getName = function () {
  return this.name;
};

Parent.prototype.a1 = 3;
Parent.prototype.a2 = 4;


var child1 = new Parent();
var child2 = new Parent();
child1.a1 = 1;
child2.a2 = 2;
console.log({'child1.a1': child1.a1, 'child1.a2': child1.a2});
console.log({'child2.a1': child2.a1, 'child2.a2': child2.a2});
