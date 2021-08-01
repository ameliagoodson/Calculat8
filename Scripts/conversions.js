var btnDropdown = document.querySelector('.dropdown-btn')
var divDropdown = document.querySelector('.div-dropdown')
var listTemp = document.querySelector('.temp')
var listDistance = document.querySelector('.distance')
var listWeight = document.querySelector('.weight')
var label1 = document.querySelector('.label1')
var label2 = document.querySelector('.label2')
var input1 = document.querySelector('#input1')
var input2 = document.querySelector('#input2')


// Add click event to measurement button drop down
btnDropdown.addEventListener('click', function (event) {
    event.preventDefault()
    clearLabel()
    divDropdown.classList.toggle('active')
    
})

// TEMPERATURE 
listTemp.addEventListener('click', function () {
    divDropdown.classList.toggle('active')
    label1.innerHTML = 'Celcius',
    label2.innerHTML = 'Farenheit',
    clear()
    updateInput()
    }
)

function updateInput() {
    input1.addEventListener('input', celcToFar)
    input2.addEventListener('input', farToCelc)
}
 
function celcToFar() {
    var celcius = input1.value
    celcius = celcius / 5
    celcius = celcius * 9
    farenheit = celcius + 32
    input2.value = parseInt(farenheit)
}

function farToCelc() {
    var farenheit = input2.value
    farenheit = farenheit - 32
    celcius = farenheit * 0.556
    input1.value = parseInt(celcius)   
}

// DISTANCE
listDistance.addEventListener('click', function () {
    divDropdown.classList.toggle('active')
    label1.innerHTML = 'Kilometres'
    label2.innerHTML = 'Miles'
    clear()
    updateInputDistance()
    }
)

function updateInputDistance() {
    input1.addEventListener('input', kmsToMiles)
    input2.addEventListener('input', milesToKms)
}
 
function kmsToMiles() {
    var kms = input1.value
    var miles = kms / 1.609
    miles = miles.toFixed(2)
    input2.value = miles
}

function milesToKms() {
    var miles = input2.value
    var kms = miles * 1.609
    kms = kms.toFixed(2)
    input1.value = kms   

}


// WEIGHT
listWeight.addEventListener('click', function () {
    divDropdown.classList.toggle('active')
    label1.innerHTML = 'Kilograms'
    label2.innerHTML = 'Pounds'
    clear()
    updateInputWeight()
    }
)

function updateInputWeight() {
     input1.addEventListener('input', kgsToPounds)
    input2.addEventListener('input', poundsToKgs)
}

function kgsToPounds() {
    var kgs = input1.value
    var pounds = kgs * 2.205
    input2.value = pounds.toFixed(2)
}

function poundsToKgs() {
    var pounds = input2.value
    var kgs = pounds / 2.205
    input1.value = kgs.toFixed(2)
}

// CLEAR FUNCTION
function clearLabel() {
    label1.textContent = ''
    label2.textContent = ''
}
function clear() {
    input1.value = ''
    input2.value = ''
}