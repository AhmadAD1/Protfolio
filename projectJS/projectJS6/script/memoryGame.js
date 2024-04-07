// const { set } = require("react-hook-form");

const cards = document.querySelectorAll('.card');
let firstCard = null, secondCard = null, canclick = true;
let score = 0;
shuffle();
cards.forEach(cards => {
    cards.addEventListener('click', handleCardClick);
})
function handleCardClick() {
    if (!canclick) return;
    if (this.classList.contains('flip')) return;
    this.classList.add('flip');
    if (!firstCard) {
        firstCard = this;
    }
    else if (!secondCard) {
        secondCard = this;

    }
    let img1 = firstCard ? firstCard.firstElementChild.src : null;
    let img2 = secondCard ? secondCard.firstElementChild.src : null;
    if (img1 && img2) {
        canclick = false;
        if (img1 === img2) {

            firstCard.removeEventListener('click', handleCardClick);
            secondCard.removeEventListener('click', handleCardClick);
            firstCard = null;
            secondCard = null;

            canclick = true;
            score++;
            if (score === 8) {
                gameover();
            }

        }
        else {
            mistakes1++;

            setTimeout(() => {
                firstCard.classList.remove('flip');
                secondCard.classList.remove('flip');
                firstCard = null;
                secondCard = null;
                canclick = true;


            }, 1000);
        }
        numberOfMistakes();
    }
}
function shuffle() {
    cards.forEach(card => {
        let random = Math.floor(Math.random() * 16);
        card.style.order = random;
    })
}
function gameover() {
    setTimeout(() => {
        let ret = confirm('You Win, do you want to play again?');
        if (ret) {
            location.reload();
        };


    }
        , 1000);
}
let count1 = 0;
let mistakes1 = 0;
function time() {
    const time = document.getElementById('time');

    setInterval(function () {
        count1++;
        time.innerText = count1;
    }, 1000);
}
function resetTime() {
    const time = document.getElementById('time');
    time.innerText = 0;
    count1 = 0;
}
function numberOfMistakes() {
    const mistakes = document.getElementById('mistakes');
    mistakes.innerText = mistakes1;


}
time();
function toProject() {
    var img = document.getElementById("logo");
    img.addEventListener('click', function () {
        // Navigate to another page
        window.location.href = '../../index.html';
    });
}
toProject();



