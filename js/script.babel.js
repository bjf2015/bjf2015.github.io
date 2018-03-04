'use strict';

var cardsArray = [{

  'name': 'ariel',
    'img': 'img2/ariel.png',
  },
  {
    'name': 'bday',
    'img': 'img2/bday.png',
  },
  {
    'name': 'belle',
    'img': 'img2/belle.png',
  },
  {
    'name': 'concert',
    'img': 'img2/concert.png',
  },
  {
    'name': 'cool_shades',
    'img': 'img2/cool_shades.png',
  },
  {
    'name': 'daddydaughter',
    'img': 'img2/daddydaughter.png',
  },
  {
    'name': 'disney',
    'img': 'img2/disney.png',
  },
  {
  'name': 'donna',
  'img': 'img2/donna.png'
}, {
  'name': 'grandma',
  'img': 'img2/grandma.png'
}, {
  'name': 'grandpa',
  'img': 'img2/grandpa.png'
}, {
  'name': 'karate',
  'img': 'img2/karate.png'
}, {
  'name': 'lainie',
  'img': 'img2/lainie.png'
}];

var gameGrid = cardsArray.concat(cardsArray).sort(function () {
  return 0.5 - Math.random();
});

var firstGuess = '';
var secondGuess = '';
var count = 0;
var previousTarget = null;
var delay = 1200;
var score =100;
var sound = "http://dev.interactive-creation-works.net/1/1.ogg";

var game = document.getElementById('game');
var grid = document.createElement('section');
grid.setAttribute('class', 'grid');
game.appendChild(grid);

gameGrid.forEach(function (item) {
  var name = item.name,
      img = item.img;


  var card = document.createElement('div');
  card.classList.add('card');
  card.dataset.name = name;

  var front = document.createElement('div');
  front.classList.add('front');

  var back = document.createElement('div');
  back.classList.add('back');
  back.style.backgroundImage = 'url(' + img + ')';

  grid.appendChild(card);
  card.appendChild(front);
  card.appendChild(back);
});

var match = function match() {
  var selected = document.querySelectorAll('.selected');
  selected.forEach(function (card) {
    card.classList.add('match');
  });
};


var resetGuesses = function resetGuesses() {
  firstGuess = '';
  secondGuess = '';
  count = 0;

  var selected = document.querySelectorAll('.selected');
  selected.forEach(function (card) {
    card.classList.remove('selected');
  });
};

grid.addEventListener('click', function (event) {

  var clicked = event.target;
  score = score - 1;
  console.log(score);
  document.getElementById("score").innerHTML = score;

  if (clicked.nodeName === 'SECTION' || clicked === previousTarget || clicked.parentNode.classList.contains('selected')) {
    return;
  }

  if (count < 2) {
    count++;
    if (count === 1) {
      firstGuess = clicked.parentNode.dataset.name;
      console.log(firstGuess);
      clicked.parentNode.classList.add('selected');
    } else {
      secondGuess = clicked.parentNode.dataset.name;
      console.log(secondGuess);
      clicked.parentNode.classList.add('selected');
    }

    if (firstGuess && secondGuess) {
      if (firstGuess === secondGuess) {
        setTimeout(match, delay);
      }
      setTimeout(resetGuesses, delay);
    }
    previousTarget = clicked;
  }
});
