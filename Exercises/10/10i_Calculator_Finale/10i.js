let calc = '';
displayCalc(calc);
function updateCalc(val) {
  calc += val;
  displayCalc(calc);
}
function displayCalc(calc) {
  document.querySelector('.js-calc-display').textContent = calc;
}