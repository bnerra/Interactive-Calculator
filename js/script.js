// JavaScript file for Interactive Calculator

  var result = document.getElementById("screen");
  var value = [];
  var input = ["","",""];



//Arithmetic operations
  function add(a,b) {
    return a+b;
  }

  function subtract(a,b) {
    return a-b;
  }

  function multiply(a,b) {
    return a*b;
  }

  function divide(a,b) {
    return (a/b);
  }

  var equals = function(){
    if (input[1] === "+" ){
      var sum = add(parseFloat(input[0]), parseFloat(input[2]));
      clear();
      value.push(sum);
    }
    else if (input[1] === "-"){
      var difference = subtract(parseFloat(input[0]), parseFloat(input[2]));
      clear();
      value.push(difference);
    }
    else if (input[1] === "x"){
      var product = multiply(parseFloat(input[0]), parseFloat(input[2]));
      clear();
      value.push(product);
    }
    else if (input[1] === "/"){
      var quotient = divide(parseFloat(input[0]), parseFloat(input[2]));
      clear();
      value.push(quotient);
    }
    display();
  }


//Display and store values
var display = function () {
  result.innerHTML = input.join(" ") + " " + value.join("");
}

var clear = function () {
  input = ["","",""];
  value = [];
  display();
}

var update = function(value) {
  input.push(value);
  input.shift();
}

//Display values on screen
for (var i = 0; i < 11; i++) {
  document.getElementById(i).addEventListener("click", function() {
    value.push(this.innerHTML);
    display();
  });
}

for (var i = 11; i < 15; i++) {
  document.getElementById(i).addEventListener("click", function() {
    update(value.join(""));
    update(this.innerHTML);
    value = [];
    display();
  });
}

document.getElementById(15).addEventListener("click", function() {
  update(value.join(""));
  value = [];
  equals();
});

document.getElementById(16).addEventListener("click", function() {
  clear();
});
