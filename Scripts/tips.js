var inputPrice = document.getElementById("inputPrice")
var inputPercent = document.getElementById("inputPercent")
var inputPeople = document.getElementById("inputPeople")
var tipAmountTotal = document.getElementById("total-tip")
var newTotal = document.getElementById("grand-total")
var totalEach = document.getElementById("total-each")
var button = document.getElementById("btn-submit")
var clear = document.getElementById("clear")

button.addEventListener("click", function (event) {
    event.preventDefault()
    calculateTip()
})

button.addEventListener("click", function () {
    clear
})


function calculateTip() {
    var price = parseFloat(inputPrice.value)
    var percent = parseFloat(inputPercent.value)
    var people = parseFloat(inputPeople.value)

    if (!people || !price) {
        inputPrice.placeholder = "Please enter a number"
        inputPeople.placeholder = "Please enter a number"
    }
    else {
    var tipCalc = price * `0.${percent}`
    var tip = parseFloat(tipCalc.toFixed(2))
    tipAmountTotal.textContent = "$" + tip
    console.log(price + tip)
    var total = parseFloat(price + tip)
    
    newTotal.textContent = total.toFixed(2)
        // if no number of people is entered, assume one person
    if (percent && price && !people) {
        people = 1
        totalEach.textContent = "$" + total
    }
    else {
        var splitCalc = total / people
        
    totalEach.textContent = "$" + splitCalc.toFixed(2)
    }

    }
    
}
// Clear all fields and outputs
function clear() {
    inputPeople.value = ""
    inputPercent.value = ""
    inputPrice.value = ""
    totalEach.textContent = ""
    newTotal.textContent = ""
    tip.textContent = ""
}