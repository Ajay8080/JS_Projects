
var modal = document.getElementById("myModal");

var btn = document.getElementById("openModalBtn");


var span = document.getElementsByClassName("close")[0];


var incrementBtn = document.getElementById("incrementBtn");
var incrementValue = document.getElementById("incrementValue");


var count = 0;


btn.onclick = function() {
  modal.style.display = "flex";
}


span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

document.addEventListener('DOMContentLoaded', () => {
    let number = 0;
    const MAX_NUMBER = 20;

    const numberDisplay = document.getElementById('number');
    const numberType = document.getElementById('number-type');
    const incrementButton = document.getElementById('increment');
    const decrementButton = document.getElementById('decrement');
    const resetButton = document.getElementById('reset');
    const messageDisplay = document.getElementById('message');

    function updateDisplay() {
        numberDisplay.textContent = number;
        numberType.textContent = (number % 2 === 0) ? 'even' : 'odd';
        messageDisplay.textContent = number >= MAX_NUMBER ? 'Stop here' : '';
    }

    incrementButton.addEventListener('click', () => {
        if (number < MAX_NUMBER) {
            number++;
            updateDisplay();
        }
        else {
            alert('number must be less than or equal to 20')
        }
    });

    decrementButton.addEventListener('click', () => {
        if (number > 0) {
            number--;
            updateDisplay();
        }
        else{
            alert('number should be more than or equal to zero')
        }
    });

    resetButton.addEventListener('click', () => {
        number = 0;
        updateDisplay();
    });

    updateDisplay();
});

