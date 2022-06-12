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

let rounding;
let exponent;
let square;
let division;
let seven;

document.getElementById("button5").onclick = function(){
    seven = document.getElementById("button5")
    document.getElementById("calculatorLabel").innerHTML = seven;
}
