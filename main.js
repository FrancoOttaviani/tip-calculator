// SELECTORES


let monto = document.querySelector(".bill");
let cinco = document.querySelector("#cinco");
let diez = document.querySelector("#diez")
let quince = document.querySelector("#quince");
let veinticinco = document.querySelector("#veinticinco");
let cincuenta = document.querySelector("#cincuenta");
let custom = document.querySelector("#custom");
let btnReset = document.querySelector(".btn-reset")
let numberOfPeople = document.querySelector(".numberOfPeople");
let tipAmount = document.querySelector(".tipAmount");
let total = document.querySelector(".total")


// VARIABLES

let tipPorPersona = 0;
let totalPorPersona = 0;


cinco.addEventListener("click", function(){
    tipPorPersona = (monto.value * 0.05) / numberOfPeople.value;
    tipAmount.innerHTML = "$ " + tipPorPersona.toFixed(2);
    totalPorPersona = tipPorPersona + ( monto.value / numberOfPeople.value);
    total.innerHTML = "$ " + totalPorPersona.toFixed(2);
})

diez.addEventListener("click", function(){
    tipPorPersona = monto.value * 0.10 / numberOfPeople.value;
    tipAmount.innerHTML = "$ " + tipPorPersona.toFixed(2);
    totalPorPersona = tipPorPersona + ( monto.value / numberOfPeople.value);
    total.innerHTML = "$ " + totalPorPersona.toFixed(2);
})

quince.addEventListener("click", function(){
    tipPorPersona = monto.value * 0.15 / numberOfPeople.value;
    tipAmount.innerHTML = "$ " + tipPorPersona.toFixed(2);
    totalPorPersona = tipPorPersona + ( monto.value / numberOfPeople.value);
    total.innerHTML = "$ " + totalPorPersona.toFixed(2);
})

veinticinco.addEventListener("click", function(){
    tipPorPersona = monto.value * 0.25 / numberOfPeople.value;
    tipAmount.innerHTML = "$ " + tipPorPersona.toFixed(2);
    totalPorPersona = tipPorPersona + ( monto.value / numberOfPeople.value);
    total.innerHTML = "$ " + totalPorPersona.toFixed(2);
})

cincuenta.addEventListener("click", function(){
    tipPorPersona = monto.value * 0.5/ numberOfPeople.value;
    tipAmount.innerHTML = "$ " + tipPorPersona.toFixed(2);
    totalPorPersona = tipPorPersona + ( monto.value / numberOfPeople.value);
    total.innerHTML = "$ " + totalPorPersona.toFixed(2);
})

