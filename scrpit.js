// hide prizes until 10 clicks
let items = document.getElementById('drinks').style.display = 'none';

// get score

let score = 0;
const scoreDisplay = document.getElementById('score');

// make button click to accumulate score
const play = document.getElementById('container');
play.addEventListener('click', function(clickEvent) {
    if(clickEvent.target.matches('#clicker')) {
        score++;
        scoreDisplay.innerText = score;
    }
    if(score >= 10) {
        drinks.style.display = 'block';
    }
});

// subtract score per item purchased

let score1 = [];
const score1Display = document.getElementById('score');
const buy = document.getElementsByClassName('one');
document.addEventListener('click', function(clickEvent) {
     
     if(clickEvent.target.matches('#one')) {
         score1= score -= 5;
         score1Display.innerText = score1;
     } 
     
});

let score2 = [];
const score2Display = document.getElementById('score');
const buy2 = document.getElementsByClassName('two');
document.addEventListener('click', function(clickEvent) {
     
     if(clickEvent.target.matches('#two')) {
         score2= score -= 15;
         score2Display.innerText = score2;
     }
});

let score3 = [];
const score3Display = document.getElementById('score');
const buy3 = document.getElementsByClassName('three');
document.addEventListener('click', function(clickEvent) {
     
     if(clickEvent.target.matches('#three')) {
         score3= score -= 30;
         score3Display.innerText = score3;
     }
});

let score4 = [];
const score4Display = document.getElementById('score');
const buy4 = document.getElementsByClassName('four');
document.addEventListener('click', function(clickEvent) {
     
     if(clickEvent.target.matches('#four')) {
         score4= score -= 50;
         score4Display.innerText = score4;
     } 
});

let score5 = [];
const score5Display = document.getElementById('score');
const buy5 = document.getElementsByClassName('five');
document.addEventListener('click', function(clickEvent) {
     
     if(clickEvent.target.matches('#five')) {
         score5= score -= 100;
         score5Display.innerText = score5;
     }
});

// show buy buttons when certain points reached
// let items = document.getElementById('#drinks > p:second-of-type').style.diplay = 'block';