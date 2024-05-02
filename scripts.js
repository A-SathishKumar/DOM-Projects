document.addEventListener('DOMContentLoaded', function() {
  var title = document.getElementById("title")
title.innerText = "DOM Calculator"
var description = document.getElementById("description")
description.innerText = "This was a sample Calculator using DOM "
let displayValue = '';

function appendToDisplay(value) {
  displayValue += value;
  document.getElementById('result').value = displayValue;
}

function calculate() {
  try {
    displayValue = eval(displayValue);
    document.getElementById('result').value = displayValue;
  } catch (error) {
    document.getElementById('result').value = 'Error';
  }
}

function clearDisplay() {
  displayValue = '';
  document.getElementById('result').value = '';
}

function removeLastCharacter() {
  displayValue = displayValue.slice(0, -1);
  document.getElementById('result').value = displayValue;
}

document.addEventListener('keydown', function(event) {
  const key = event.key;

  if (/[0-9*/+\-.]/.test(key)) {
    appendToDisplay(key);
  } else if (key === 'Enter') {
    calculate();
  } else if (key === 'Escape') {
    clearDisplay();
  } else if (key === 'Backspace') {
    removeLastCharacter();
  } else{ 
      alert("Only Numbers can allowed!!!")
 }
});

});
