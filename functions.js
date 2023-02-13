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
  } else if(operator === "x") {
    return multiply(a,b);
  } else if(operator === "÷") {
    //this will need to be changed to divide symbol ÷ somewhere along the way
    return divide(a,b);
  }
}

const box = document.getElementsByClassName('box')[0];
//getElementsByClassName returns an array, so adding the [0] to make sure we have just the first item of that array

const display = document.getElementsByClassName('display')[0];
//capturing display so that I can send buttons clicked to it


box.addEventListener('click', event => {
  let displayValue = '';
  if(event.target.value != 'clear' && event.target.value != "=") {
    console.log('if')
    display.innerHTML += event.target.value;
    //add displayValue
    console.log("event", event)
    console.log("event.target", event.target)
    console.log("event.target.value", event.target.value)
  } else if (event.target.value == 'clear'){
    console.log('else if clear')
    display.innerHTML = '0';
    //add displayValue
    console.log("event", event)
    console.log("event.target", event.target)
    console.log("event.target.value", event.target.value)
  } else if (event.target.value == "=") {
    console.log('else if equal')
    //somehow call the relevant functions in a loop here
    display.innerHTML = 'sum';
    //add displayValue
    console.log("event", event)
    console.log("event.target", event.target)
    console.log("event.target.value", event.target.value)
  }
})

//todo its something to do with append child to node, or textcontent
//todo also have to figure out how to clear the screen the first time, but not every time a new number is entered
//todo figure out how to keep screen from collapsing if I have no value input