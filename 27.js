Function.prototype.myBind = function (obj) {
  const fn = this;
  return function (...args) {
    return fn.apply(obj, args);
  };
};
const person = { name: "Vaishnav" };
function greet() {
  console.log("Hi " + this.name);
}
const sayHi = greet.myBind(person);
sayHi();