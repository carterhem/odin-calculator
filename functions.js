const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const multiply = function (a ,b) {
  return a * b;
};

const divide = function (a, b) {
  //maybe flip format to reduce like multiply, not sure why we are doing it there
  return a / b;
};

const operate = function(a,b,operator) {
  //could change this into switch cases down the line
  if(operator === '+') {
    return add(a,b);
  } else if(operator === "-") {
    return subtract(a,b);
  } else if(operator === "*") {
    return multiply(a,b);
  } else if(operator === "/") {
    return divide(a,b);
  }
}