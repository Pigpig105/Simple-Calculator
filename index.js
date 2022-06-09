let addition1;
let addition2;
let sum;

document.getElementById("additionButton").onclick = function(){
    addition1 = document.getElementById("addition1").value;
    addition2 = document.getElementById("addition2").value;
    addition1 = Number(addition1);
    addition2 = Number(addition2);
    sum = addition1 + addition2;
    document.getElementById("additionLabel").innerHTML = sum;
}

let subtraction1;
let subtraction2;
let difference;

document.getElementById("subtractionButton").onclick = function(){
    subtraction1 = document.getElementById("subtraction1").value;
    subtraction2 = document.getElementById("subtraction2").value;
    subtraction1 = Number(subtraction1);
    subtraction2 = Number(subtraction2);
    difference = subtraction1 - subtraction2;
    document.getElementById("subtractionLabel").innerHTML = difference;
}

let multiplication1;
let multiplication2;
let product;

document.getElementById("multiplicationButton").onclick = function(){
    multiplication1 = document.getElementById("multiplication1").value;
    multiplication2 = document.getElementById("multiplication2").value;
    multiplication1 = Number(multiplication1);
    multiplication2 = Number(multiplication2);
    product = multiplication1 * multiplication2;
    document.getElementById("multiplicationLabel").innerHTML = product;
}

let division1;
let division2;
let quotient;

document.getElementById("divisionButton").onclick = function(){
    division1 = document.getElementById("division1").value;
    division2 = document.getElementById("division2").value;
    division1 = Number(division1);
    division2 = Number(division2);
    quotient = division1 / division2;
    document.getElementById("divisionLabel").innerHTML = quotient;
}

let rounding1;
let roundingAnswer;

document.getElementById("roundingButton").onclick = function(){
    rounding1 = document.getElementById("rounding1").value;
    rounding1 = Number(division1);
    roundingAnswer = math.round(rounding1)
    document.getElementById("roundingLabel").innerHTML = roundingAnswer;
}
