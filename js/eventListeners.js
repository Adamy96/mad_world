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
        if (!gameOver) {
          hideGame.classList.remove('hideGame');
          hideGame.classList.add('showGame');
          h1.classList.add('h1_fadeOut');
        }

        if (gameOver) {
          ctx.restore();
          gameOver = false;
        }
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