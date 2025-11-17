let displayCalculation = () => {
  resultElement = document.querySelector('.js-result-window').textContent =
    calculation;
};

let calculation = localStorage.getItem('calculation') || '';
displayCalculation();
// let resultElement = (document.querySelector('.js-result-window').textContent =
//   eval(calculation));

function addNumbers(value) {
  calculation += value;
  // resultElement = document.querySelector('.js-result-window').textContent =
  //   calculation;
  displayCalculation();
  localStorage.setItem('calculation', calculation);
}

// let clearFunction = (calculation) => {
//   return (calculation = '');
// };
