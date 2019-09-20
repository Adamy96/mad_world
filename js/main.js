  // ================================= CRIANDO OS PERSONAGENS ===========================

  // Instanciando o player
  const player = new Character('CookiexT');
  let cplayer = new Image();
  cplayer.src = './img/mainChar_movements.svg';

  

  // ================================ FUNÇÕES DE DESENHO ================================

function startGame() {
  let interval;
  let called = 0;

  if (!gameOver && !victory) {
    interval = setInterval(() => {
  
    if (player.y > canvas.height || player.health <= 0) {
      playerDie.play();
      gameOver = true;
    }
  
    if (gameOver === true) {
      clearInterval(interval);
      hideGame.classList.add('hideGame');
      hideGame.classList.remove('showGame');
      h2.classList.add('h2_fadeIn');
    }
  
    if (victory && called === 0) {
      called += 1;
      ctx.clearRect(0,0,canvas.width, canvas.height);
      clearInterval(interval);
      victoryEnd();
    }
  
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  
    // Background geral
    backgroundSmoke1.move();
    backgroundSmoke1.draw();
    ctx.fillStyle = 'rgba(5, 12, 31, .9)';
    ctx.fillRect(0, 0, canvas.width, canvas.height)
  
    // Criando os obstáculos no array
    if(!maps[currentMap].obstaclesCreated) {
      maps[currentMap].createObstacles();
      maps[currentMap].obstaclesCreated = true;
    }
  
    maps[currentMap].draw(player);
  
    // Desenhando o player
    player.update();
    player.draw(cplayer);
    mouse.drawCrosshair();
    }, 12); 
  }
}

let victoryEnd = function() {
  console.log('called');
  haunted.src = './sounds/victoryMusic.wav';

  let dancers = [];
  dancers.push(new Dancer(2 * tile1.size, canvas.height - 6 * tile1.size, 1));
  dancers.push(new Dancer(canvas.width - 6.5 * tile1.size, canvas.height - 6 * tile1.size, 0));

  setInterval(() => {
    ctx.clearRect(0,0,canvas.width, canvas.height);

    ctx.fillStyle = 'rgb(0,0,0)';
    ctx.beginPath();
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fill();

    ctx.font = "80px Chilanka";
    ctx.fillStyle = 'rgba(255, 255, 255, .8)';
    ctx.fillText(`Congratulations!!`, 7 * tile1.size, canvas.height - 10 * tile1.size);
    ctx.font = "60px Chilanka";
    ctx.fillText(`You defeated all your fears`, 6 * tile1.size, canvas.height - 7.5 * tile1.size);


    for (let i = 0; i < dancers.length; i++) {
      dancers[i].update();
      dancers[i].dance();
    }
  }, 5);
}