let fib = function fib(x) {
  if (x === 1) {
    let y = [0, 1];
    return y;
  } else {
    for (let i = 2; i < x + 1; i++) {
      let y = fib(x - 1);
      y.push(y[y.length - 1] + y[y.length - 2]);
      return y;
    }
  }
  return y[x];
};
console.log(fib(6));
