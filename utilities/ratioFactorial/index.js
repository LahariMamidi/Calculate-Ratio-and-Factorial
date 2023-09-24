const RatioFunc = require("../ratio/index");
const FactorialFunc = require("../factorial/index");

const ratioAndFactorial = (n1, n2, n3) => {
  const ratio = RatioFunc(n1, n2);
  const factorial = FactorialFunc(n3);
  return { ratio, factorial };
};

module.exports = ratioAndFactorial;
