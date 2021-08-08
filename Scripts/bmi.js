var btnBMI = document.querySelector('.btn-bmi')
var displayDiv = document.querySelector(".result-container")
var bmiElement = document.querySelector('.bmi-number')
var heightInput = document.querySelector('#height-input')
var weightInput = document.querySelector('#weight-input')


btnBMI.addEventListener('click', function (event) {
    event.preventDefault()
    displayDiv.classList.toggle('result-container')
    calculate()
})

function calculate() {
    var weightKgs = weightInput.value
    
    var heightMetres = heightInput.value / 100

    var heightSquared = heightMetres * heightMetres

    var bmiNum = weightKgs / heightSquared

    bmiNum = bmiNum.toFixed(1)

    bmiElement.textContent = bmiNum
}
