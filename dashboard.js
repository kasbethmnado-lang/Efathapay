


const total = document.getElementById("show_total");

const value1 = document.getElementById("offering");
const value2 = document.getElementById("gospel");
const value3 = document.getElementById("tithe");
const value4 = document.getElementById("thanks");
const value5 = document.getElementById("first");
const value6 = document.getElementById("encounter");



function addAuto(){
  let a = Number(value1.value);
  let b = Number(value2.value);
  let c = Number(value3.value);
  let d = Number(value4.value);
  let e = Number(value5.value);
  let f = Number(value6.value);

  total.textContent = a + b + c + d + e + f;
}

value1.addEventListener("input", addAuto);
value2.addEventListener("input", addAuto);
value3.addEventListener("input", addAuto);
value4.addEventListener("input", addAuto);
value5.addEventListener("input", addAuto);
value6.addEventListener("input", addAuto);
