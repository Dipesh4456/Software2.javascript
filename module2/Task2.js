'use strict';

const count = Number(prompt('Enter number of participants:'));

const participants = [];

for (let i = 0; i < count; i++) {
  const name = prompt('Enter participant name:');
  participants.push(name);
}
participants.sort();
let list = '<ol>';
for (let i = 0; i < participants.length; i++) {
  list += '<li>' + participants[i] + '</li>';
}
list += '</ol>';
document.querySelector('#target').innerHTML = list;