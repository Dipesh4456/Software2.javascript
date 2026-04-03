'use strict';

const calculate = confirm('Should I calculate the square root?');

let result;

if (calculate) {
  const number = Number(prompt('Enter a number:'));

  if (number < 0) {
    result = 'The square root of a negative number is not defined.';
  } else {
    const squareRoot = Math.sqrt(number);
    result = 'The square root of ' + number + ' is ' + squareRoot + '.';
  }

} else {
  result = 'The square root is not calculated.';
}

document.querySelector('#target').textContent = result;