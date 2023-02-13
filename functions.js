const add = function(a,b) {
  return a + b;
};

const subtract = function(a,b) {
  return a - b;
};

const multiply = function(input) {
  //have to start at one here so we don't keep multiplying items by zero
  return input.reduce((partialSum, a) => partialSum * a, 1);
};

const divide = function(a,b) {
  //maybe flip format to reduce like multiply, not sure why we are doing it there
  return a / b;
};

