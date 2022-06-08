var currentNumberWraper = document.getElementById("currentNumber");
var currentNumber = 0;

function decrement() {
    currentNumber -= 1;
    currentNumberWraper.innerHTML = currentNumber;
}

function increment() {
    currentNumber += 1;
    currentNumberWraper.innerHTML = currentNumber;
}