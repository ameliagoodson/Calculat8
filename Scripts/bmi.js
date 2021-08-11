var btnBMI = document.querySelector('.btn-bmi')
var displayDiv = document.querySelector(".result-container")
var bmiElement = document.querySelector('.bmi-number')
var heightInput = document.querySelector('#height-input')
var weightInput = document.querySelector('#weight-input')


btnBMI.addEventListener('click', function (event) {
    event.preventDefault()
    validate()
   
})

function validate() {
    var heightValue = heightInput.value
    var weightValue = weightInput.value
   
    if ((!heightValue) || (!weightValue)) {
        return
    }
     calculate()
};

function calculate() {
    var weightKgs = weightInput.value;
    var heightMetres = heightInput.value / 100;
    var heightSquared = heightMetres * heightMetres;
    var bmiNum = weightKgs / heightSquared;
    bmiNum = bmiNum.toFixed(1);
    bmiNum = parseInt(bmiNum)
    display(bmiNum)
}

var resultTitleText = document.querySelector('.result-title-text')
var resultText = document.querySelector('.result-text')

function display(bmiNum) {
    
    bmiElement.textContent = bmiNum
    displayDiv.classList.toggle('result-container')

    if (bmiNum <= 18.5) {
        resultTitleText.textContent = 'Underweight'
        resultText.textContent = 'Your weight is less than it ideally should be. See your doctor or health professional and discuss whether you may need to aim at gaining weight. They can help you think of small, practical changes you feel comfortable with to achieve a healthy weight.'
    }
    if (bmiNum > 18.6 && bmiNum <= 25) {
        resultTitleText.textContent = 'Healthy'
        resultText.textContent = 'Your BMI is currently within what is considered a healthy weight range. Being a healthy weight has important benefits as it can help reduce your risk of heart disease, diabetes and a range of other conditions.'
    }
    if (bmiNum > 25 && bmiNum <= 29.9) {
        resultTitleText.textContent = 'Overweight'
        resultText.textContent = 'Your BMI is currently within the overweight range. Being a healthy weight has important benefits as it can help reduce your risk of heart disease, diabetes and a range of other conditions.'
    }
    if (bmiNum > 30) {
        resultTitleText.textContent = 'Obese'
        resultText.textContent = 'Your BMI is currently within the obese range. It is recommended that you visit a health professional to discuss the impacts this may have on your health.'
    }
    
}
