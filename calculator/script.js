let num1 = operator = num2 = null;
const display = document.querySelector('.display');
const digits = document.querySelectorAll('.number');

// Basic functions
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(operator, a, b) {
    switch (operator) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case '*':
            return multiply(a, b);
        case '/':
            return divide(a, b);
    }
}

function updateNum1(n) {
    num1 = n;
}

function updateNum2(n) {
    num2 = n;
}

function updateDisplay(n) {
    if (!Number.isInteger(n))
        display.innerText = parseFloat(n.toFixed(9));
    else 
        display.innerText = n;
}

updateDisplay(14);

digits.forEach(digit => {
    digit.addEventListener('click', () => {
        let num ;
        switch(digit.classList[1]) {
            case 'zero':
                num = 0;
                break;
            case 'one':
                num = 1;
                break;
            case 'two':
                num = 2;
                break;
            case 'three':
                num = 3;
                break;
            case 'four':
                num = 4;
                break;
            case 'five':
                num = 5;
                break;
            case 'six':
                num = 6;
                break;
            case 'seven':
                num = 7;
                break;
            case 'eight':
                num = 8;
                break;
            case 'nine':
                num = 9;
                break;
        }
        if (num1 === null)
            updateNum1(num);
        updateDisplay(num1);
        num1 = null;
    });
});