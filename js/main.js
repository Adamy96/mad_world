window.onload = () => {
  

  // ================================= CRIANDO OS PERSONAGENS ===========================

  // Instanciando o player
  const player = new Character('CookiexT');
  let cplayer = new Image();
  cplayer.src = './img/mainChar_Sprite(Move&Idle)2.svg';

  // ================================ FUNÇÕES DE DESENHO ================================


  let interval = setInterval(() => {

  if (player.y > canvas.height || player.health <= 0) gameOver = true;

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

  // eventListeners

  controller = {
    left: false,
    right: false,
    up: false,
  
    keyListener: (e) => {
      let key_state = (e.type === 'keydown') ? true : false;
  
      switch(e.keyCode) {
        case 65: // tecla A
        case 37: // seta esquerda
          controller.left = key_state;
          break;
  
        case 68: // tecla D
        case 39: // seta direita
          controller.right = key_state;
          break;
  
        case 87: // tecla W
        case 38: // seta cima
          controller.up = key_state;
          break;
  
        case 13: // tecla ENTER
          backgroundMusic.play();
          hideGame.classList.remove('hideGame');
          hideGame.classList.add('showGame');
          h1.classList.add('h1_fadeOut');
      }
    }
  }
  
  document.onkeyup = (e) => {
  
    if (!player.jumping) {
      switch (e.keyCode) {
        case 65: // tecla A
        case 37: // seta esquerda
          player.srcY = 3 * player.frameHeight; // Update da sprite
          player.updateFrameSpeed = 0.07;
          break;
  
        case 68: // tecla D
        case 39: // seta direita
          player.srcY = 2 * player.frameHeight; // Update da sprite
          player.updateFrameSpeed = 0.07;
          break;
      }
    }
  }
  
  addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  })
  
  document.querySelector('#canvas').addEventListener('click', () => {
    player.shoots.push(new Bullet (mouse.x, mouse.y, 10, 10));
  
    console.log(player.shoots);
  });
  
  window.addEventListener('keydown', controller.keyListener);
  window.addEventListener('keyup', controller.keyListener);
};
