
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


// ----- CALCULATOR CODE -----    
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



