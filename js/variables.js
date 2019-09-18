let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let hideGame = document.querySelector('.hideGame');
let h1 = document.querySelector('h1');
let h2 = document.querySelector('h2');

let startBtn = document.createElement('button');
startBtn.setAttribute('class', 'btnStart');

let backgroundMusic = new Audio();
backgroundMusic.src = './sounds/Alone.mp3';
backgroundMusic.loop = 'true';
backgroundMusic.autoplay = 'true';

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

let currentMap = 3;

let gameOver = false;