  // ================================= CRIANDO OS PERSONAGENS ===========================

  // Instanciando o player
  const player = new Character('CookiexT');
  let cplayer = new Image();
  cplayer.src = './img/mainChar_Sprite(Move&Idle)2.svg';

  // ================================ FUNÇÕES DE DESENHO ================================

if (!gameOver) {
  console.log('ok');
  let interval = setInterval(() => {

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
  }, 5); 
}
