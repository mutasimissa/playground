module.exports = function () {
  try {
    this.fib = function (n) {
      if ([0,1].includes(n)) {
        return n;
      }
      return fib(n - 1) + fib(n - 2);
    };
  } catch (e) {
    return `${e}`;
  }
};
