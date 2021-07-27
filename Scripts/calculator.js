
// Get elements from HTML
var numberBtns = document.querySelectorAll('.btn-number')
var operatorBtns = document.querySelectorAll('.btn-operator')
var btnMultiply = document.querySelector('.btn-multiply')
var btnPlus = document.querySelector('.btn-plus')
var btnMinus = document.querySelector('.btn-minus')
var btnEquals = document.querySelector('.btn-equals')
var firstOperand = document.querySelector('.firstOperand')
var currentOperand = document.querySelector('.secondOperand')
var btnAC = document.querySelector('.btn-AC');
    
// For each button the user clicks add text to screen
numberBtns.forEach(button => {
    button.addEventListener('click', function () {
        var numbers = button.value
        currentOperand.append(numbers)
        
    })
});

// Add operator button text to screen on click
operatorBtns.forEach(button => {
    button.addEventListener('click', function () {
        var operator = button.value;
        currentOperand.append(operator);
        updateDisplay()
        
    })    
});

function updateDisplay() {
    firstOperand.textContent = currentOperand.textContent;
    currentOperand.textContent = ''

}

function updateEquation() {
    firstOperand.textContent = firstOperand.textContent + currentOperand.textContent
}

// When the user clicks on the equals button, calculate the equation
btnEquals.addEventListener('click', function () {
    calculate(firstOperand, currentOperand)
    })


function calculate(firstOperand, currentOperand) {
    var firstOperand = firstOperand.textContent
    var firstOperandNum = parseFloat(firstOperand)
    var currentOperand = currentOperand.textContent
    var currentOperandNum = parseFloat(currentOperand)
    
    if (firstOperand.includes('+')) {
        var result = firstOperandNum + currentOperandNum        
    }
    else if (firstOperand.includes('-')) {
        var result = firstOperandNum - currentOperandNum
    }
    else if (firstOperand.includes('*')) {
        var result = firstOperandNum * currentOperandNum
    }
    else if (firstOperand.includes('/')) {
        var result = firstOperandNum / currentOperandNum
    }
    updateEquation()
    updateResult(result)
    
}
function updateResult(result) {
    currentOperand.textContent = result
}
 

// ALL CLEAR 
btnAC.addEventListener('click', function () {
    firstOperand.textContent = ' ';
    currentOperand.textContent = ' ';

})


/* 
1. User inputs number and operation values e.g. 1+1 =
    1.1. Buttons have to be assigned values - DONE
    1.2. A click on the button saves a value
    1.3. A click on the button types the value in the input field
    1.4. Typing the numbers saves a value
    1.5. Typing the numbers types the value in the input field
    How to do this?
    - <button> element is now favoured way to create buttons
    - Event listener click
2. User input value is collected/stored 
    How to do this?

3. User input is displayed in calculatorTyped div
    How to do this?
    - calculatorTyped.value
*/



