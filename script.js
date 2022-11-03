'use strict';

const YouLost = function () {
  message.textContent = `You lost the game`;
  document.querySelector('.score').textContent = 0;
  document.querySelector('body').style.backgroundColor = '#E0144C';
};

const setScore = function (data) {
  score--;
  document.querySelector('.score').textContent = score;
  message.textContent =
    data > sectretNumber ? `Number to hight` : `Number to low`;
};
///////////////////////////////////////////////////////

let sectretNumber = Math.trunc(Math.random() * 20 + 1);
let message = document.querySelector('.message');
let score = 20;
let higherScore = 0;
console.log(sectretNumber);
document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    message.textContent = 'No number';
    //When player wins
  } else if (guess === sectretNumber) {
    if (score > higherScore) {
      higherScore = score;
      document.querySelector('.higherScore').textContent = higherScore;
    }
    document.querySelector('.score').textContent = score;
    message.textContent = `Correct Number`;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = `${sectretNumber}`;
  }
  ///When guest is wrong
  else if (guess !== sectretNumber) {
    // When user us to high
    if (score > 1) {
      setScore(guess);
    } else {
      YouLost();
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.number').textContent = `?`;
  score = 20;
  sectretNumber = Math.trunc(Math.random() * 20 + 1);
  console.log(sectretNumber);
  message.textContent = `Start guessing...`;
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
});

//testa
