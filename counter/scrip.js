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
    });

    decrementButton.addEventListener('click', () => {
        if (number > 0) {
            number--;
            updateDisplay();
        }
    });

    resetButton.addEventListener('click', () => {
        number = 0;
        updateDisplay();
    });

    updateDisplay();
});
