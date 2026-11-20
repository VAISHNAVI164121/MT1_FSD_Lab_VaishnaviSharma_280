function compose(...fns) {
  return function (value) {
    let result = value;

    for (let i = fns.length - 1; i >= 0; i--) {
      result = fns[i](result);
    }

    return result;
  };
}
const add5 = (x) => x + 5;
const double = (x) => x * 2;
const myFunc = compose(double, add5);
console.log(myFunc(3)); 