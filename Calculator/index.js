const display = document.getElementById('display');
let currentInput = '';
let previousInput = '';
let operation = null;

function updateDisplay(value) {
    display.innerText = value;
}

function handleNumber(number) {
    currentInput += number;
    updateDisplay(currentInput);
}

function handleOperation(op) {
    if (currentInput === '') return;
    if (previousInput !== '') {
        calculate();
    }
    operation = op;
    previousInput = currentInput;
    currentInput = '';
}

function calculate() {
    let result;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);

    switch (operation) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            result = prev / current;
            break;
        default:
            return;
    }
    currentInput = result.toString();
    operation = null;
    previousInput = '';
    updateDisplay(currentInput);
}

document.querySelectorAll('.buttons button').forEach(button => {
    button.addEventListener('click', () => {
        const value = button.innerText;
        if (!isNaN(value) || value === '.') {
            handleNumber(value);
        } else if (value === 'C') {
            currentInput = '';
            previousInput = '';
            operation = null;
            updateDisplay('0');
        } else if (value === '=') {
            calculate();
        } else {
            handleOperation(value);
        }
    });
});
