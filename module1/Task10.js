'use strict';

const diceCount = Number(prompt('Enter number of dice:'));
const targetSum = Number(prompt('Enter desired sum:'));

let success = 0;
const simulations = 10000;

for (let i = 0; i < simulations; i++) {
  let sum = 0;

  for (let j = 0; j < diceCount; j++) {
    sum += Math.floor(Math.random() * 6) + 1;
  }

  if (sum === targetSum) {
    success++;
  }
}

const probability = (success / simulations) * 100;

document.querySelector('#target').textContent =
  'Probability to get sum ' + targetSum +
  ' with ' + diceCount +
  ' dice is ' + probability.toFixed(2) + '%';