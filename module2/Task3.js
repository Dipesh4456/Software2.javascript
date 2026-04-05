'use strict';

const dogs = [];

for (let i = 0; i < 6; i++) {
  const name = prompt('Enter dog name:');
  dogs.push(name);
}

dogs.sort().reverse();

let list = '<ul>';

for (let i = 0; i < dogs.length; i++) {
  list += '<li>' + dogs[i] + '</li>';
}

list += '</ul>';

document.querySelector('#target').innerHTML = list;