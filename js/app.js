import Game from './game.js';

document.addEventListener('DOMContentLoaded', () => {
  require('../sass/style.scss');

  let hamborgirIndex = 0;
  let dogeIndex = 0;
  let catIndex = 0;
  const startAudio = new Audio('sounds/start.wav');
  const dogeAudio = new Audio('sounds/bark.wav');
  const hamborgirAudio = new Audio('sounds/coin.wav');
  const gameoverAudio = new Audio('sounds/gameover.wav');
  const selectAudio = new Audio('sounds/select.wav');
  let doges  = [];
  let gameSpeed = 250;
  let gameOn = true;
  const gameModes = document.querySelectorAll('.game-mode li');
  const runMode = document.querySelector('#run-mode');
  const dogeMode = document.querySelector('#doge-mode');
  let selectMenu = true;


  class Cat {
    constructor() {
      this.x = 0;
      this.y = 0;
      this.direction = 'right';
    }
  }

  class Hamborgir {
    constructor() {
      this.x = Math.floor(Math.random() * 10);
      this.y = Math.floor(Math.random() * 10);
    }
  }

  class Doge {
    constructor() {
      this.x = Math.floor(Math.random() * 10);
      this.y = Math.floor(Math.random() * 10);
    }
  }

  function start() {
    startAudio.play();
    const newGame = new Game();
    newGame.showCat();
    newGame.showHamborgir();
    newGame.startGame();
    document.addEventListener('keydown', (event) => {
      newGame.turnCat(event);
    });
  }

  document.addEventListener('keydown', (e) => {
    if ((e.which === 38 || e.which === 40) && selectMenu === true) {
      selectAudio.play();
      runMode.classList.toggle('selected');
      dogeMode.classList.toggle('selected');
    } else if (e.which === 13 && selectMenu === true) {
      selectMenu = false;
      document.querySelector('#start-game').classList.add('invisible');
      startAudio.play();
      const newGame = new Game();
      newGame.showCat();
      newGame.showHamborgir();
      newGame.startGame();
      document.addEventListener('keydown', (event) => {
        newGame.turnCat(event);
      });
    }
  });



  document.querySelector('#replay').addEventListener('click', (e) => {
    e.preventDefault();
    gameOn = true;
    gameSpeed = 250;
    document.querySelector('#over').classList.add('invisible');
    document.querySelector('#score').innerText = 0;
    startAudio.play();
    const newGame = new Game();
    newGame.showCat();
    newGame.showHamborgir();
    newGame.startGame();
    document.addEventListener('keydown', (event) => {
      newGame.turnCat(event);
    });
  })

});


// document.querySelector('#start').addEventListener('click', (e) => {
//   e.preventDefault();
//   selectMenu = false;
//   document.querySelector('#start-game').classList.add('invisible');
//   startAudio.play();
//   const newGame = new Game();
//   newGame.showCat();
//   newGame.showHamborgir();
//   newGame.startGame();
//   document.addEventListener('keydown', (event) => {
//     newGame.turnCat(event);
//   });
// })
