let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let victory = false;
let gameOver = false;

let hideGame = document.querySelector('.hideGame');
let h1 = document.querySelector('h1');
let h2 = document.querySelector('h2');

let startBtn = document.createElement('button');
startBtn.setAttribute('class', 'btnStart');

let backgroundMusic = new Audio();
backgroundMusic.src = './sounds/Alone.mp3';
backgroundMusic.loop = 'true';
backgroundMusic.autoplay = 'true';

let playerDie = new Audio();
playerDie.src = './sounds/player_die.mp3';

let playerJump = new Audio();
playerJump.src = './sounds/jump.wav';

let lavaContact = new Audio();
lavaContact.src = './sounds/lava_splash.wav';

let chaserAppear = new Audio();
chaserAppear.src = './sounds/chaser_appear.wav';

let chaserDie = new Audio();
chaserDie.src = './sounds/chaser_die.wav';

let haunted = new Audio();
haunted.src = './sounds/haunted.mp3';

let victoryMusic = new Audio();
victoryMusic.src = './sounds/victoryMusic.wav';
victoryMusic.loop = 'true';

let ghostDie = new Audio();
ghostDie.src = './sounds/ghostDie.wav';


let explosionSound = new Audio();
explosionSound.src = './sounds/explosion.mp3';

let mouse = {
  x: canvas.width / 2,
  y: canvas.height / 2,

  drawCrosshair: function() {

    // Círculo externo
    ctx.lineWidth = '1.5';
    ctx.beginPath();
    ctx.strokeStyle = 'rgba(0, 0, 0, 1)';
    ctx.arc(this.x, this.y, 25, 0, Math.PI * 2);
    ctx.stroke();

    ctx.beginPath();
    ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    ctx.arc(this.x, this.y, 3, 0, Math.PI * 2);
    ctx.fill();

    ctx.strokeStyle = 'rgba(255, 0, 0, 1)';
    ctx.beginPath(); // Linha esquerda
    ctx.moveTo(this.x - 10, this.y);
    ctx.lineTo(this.x - 30, this.y);
    ctx.stroke();

    ctx.beginPath(); // Linha direita
    ctx.moveTo(this.x + 10, this.y);
    ctx.lineTo(this.x + 30, this.y);
    ctx.stroke();

    ctx.beginPath(); // Linha superior
    ctx.moveTo(this.x, this.y - 10);
    ctx.lineTo(this.x, this.y - 30);
    ctx.stroke();

    ctx.beginPath(); // Linha inferior
    ctx.moveTo(this.x, this.y + 10);
    ctx.lineTo(this.x, this.y + 30);
    ctx.stroke();

  }
}

let currentMap = 0;