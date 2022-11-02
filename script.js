'use strict';

const sectretNumber = Math.trunc(Math.random() * 20 + 1);
let message = document.querySelector('.message');
let score = 20;
console.log(sectretNumber);
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    message.textContent = 'No number';
    //Whwn player wins
  } else if (guess === sectretNumber) {
    score++;
    document.querySelector('.score').textContent = score;
    message.textContent = `Correct Number`;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = `${sectretNumber}`;
    // When user us to high
  } else if (guess > sectretNumber) {
    if (score > 1) {
      score--;
      document.querySelector('.score').textContent = score;
      message.textContent = `Number to hight`;
    } else {
      message.textContent = `You lost the game`;
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = '#E0144C';
    }
    //When user is to low
  } else if (guess < sectretNumber) {
    if (score > 1) {
      score--;
      document.querySelector('.score').textContent = score;
      message.textContent = `Number to low`;
    } else {
      message.textContent = `You lost the game`;
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = '#E0144C';
    }
  }
});
