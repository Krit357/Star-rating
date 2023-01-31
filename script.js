'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnSubmit = document.querySelector('.btn-submit');
const circles = document.querySelectorAll('.rating');
const btnback = document.querySelector('.btn-back');

let textScore = document.querySelector('.text-score');

circles.forEach((rating, i) => {
  rating.onclick = function () {
    let currentCircleLevel = i + 1;
    textScore.innerText = `You selected ${currentCircleLevel} of 5`;

    if (rating !== currentCircleLevel[i]) {
      rating.classList.add('active');
      btnSubmit.disabled = false;
    }

    btnback.addEventListener('click', function () {
      overlay.classList.add('hidden');
      modal.classList.remove('hidden');
      rating.classList.remove('active');
      btnSubmit.disabled = true;
    });
  };
});
btnSubmit.addEventListener('click', function () {
  modal.classList.add('hidden');
  overlay.classList.remove('hidden');
});
