var Singleton = function (name) {
  this.name = name;
}

Singleton.prototype.getName = function () {
  console.log(this.name);
};

Singleton.getInstance = (function (name) {
  var instance;
  return function (name) {
    if (!instance) {
      instance = new Singleton(name);
    }

    return instance;
  };
})();

var ins1 = Singleton.getInstance("instance1");
var ins2 = Singleton.getInstance("instance2");
ins1.getName();
ins2.getName();
console.log(ins1 === ins2);
