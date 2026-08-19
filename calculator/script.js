let num1 = operator = num2 = null;
const display = document.querySelector('.display');
const digits = document.querySelectorAll('.number');
const clear = document.querySelector('.clear');
const equals = document.querySelector('.equals');
const operators = document.querySelectorAll('.operator')

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
    if (b === 0)
        display.innerText = 'Seriously?';
        return 'NO';
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
    if (num1 === null)
        num1 = n;
    else {
        num1 = String(num1);
        num1 += n;
        num1 = parseInt(num1);
    }
}

function updateNum2(n) {
    if (num2 === null)
        num2 = n;
    else {
        num2 = String(num1);
        num2 += n;
        num2 = parseInt(num1);
    }
}

function updateDisplay(n) {
    if (!Number.isInteger(n))
        display.innerText = parseFloat(n.toFixed(9));
    else 
        display.innerText = n;
}

function clearDisplay() {
    display.innerText = 0;
}

updateDisplay(0);

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
        if (operator === null) {
            updateNum1(num);
            updateDisplay(num1);
        }
        else {
            updateNum2(num);
            updateDisplay(num2);
        }
    });
});

clear.addEventListener('click', () => {
    num1 = num2 = operator = null;
    clearDisplay();
});

equals.addEventListener('click', () => {
    if (num1 == null || num2 == null || operator == null)
        return;
    const result = operate(operator, num1, num2);
    if (result != 'NO')
        updateDisplay(result);
    num1 = num2 = operator = null;
});

// add event listners to each operator
operators.forEach(oper => {
    oper.addEventListener('click', () => {
        let temp;
        switch(oper.classList[1]) {
            case 'divide':
                temp = '/';
                break;
            case 'multiply':
                temp = '*';
                break;
            case 'subtract':
                temp = '-';
                break;
            case 'add':
                temp = '+';
                break;
        }

        // check if an operator is already displayed
        const ops = '+-/*';
        if (!ops.includes(temp))
            display.innerText += (temp !== '*') ? temp : 'x';
        else
            display.innerText = num1 + ((temp !== '*') ? temp : 'x'); 

        // update operator and do the operation if an operator is already pressed
        if (operator == null || operator != null && num2 == null) {
            operator = temp;
            return;
        }
        else {
            const result = operate(operator, num1, num2);
            if (result != 'NO')
                updateDisplay(result);
            num1 = result;
            operator = temp;
            num2 = null;
        }
    });
});