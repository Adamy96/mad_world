class MarioGhost {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.speedX = 0.8;
    this.speedY = 0.8;
    this.currentHealth = 50;
    this.maxHealth = 50;
    this.width = 75;
    this.height = 67
    this.damage = 10;

    this.srcX = 0;
    this.srcY = 0;
    this.cols = 1; // Numero de sprites na horizontal
    this.rows = 2; // Numero de linhas na sprite
    this.imgWidth = 371;
    this.imgHeight = 662;
    this.frameWidth = this.imgWidth / this.cols; // Largura de cada "bloco" da sprite
    this.frameHeight = this.imgHeight / this.rows; // Altura de cada "bloco" da sprite
  }

  move(player) {
    let distanceX = this.x - player.x;
    let distanceY = this.y - player.y;

    if (distanceX > 0) {
      this.speedX = -0.8;
      this.srcY = 1 * this.frameHeight;
    } else {
      this.speedX = 0.8;
      this.srcY = 0;
    }

    if (distanceY > 0) {
      this.speedY = -0.8;
    } else {
      this.speedY = 0.8;
    }

    if (this.speedX < 0 && player.srcY !== 0  * player.frameHeight && player.srcY !== 2 * player.frameHeight ) {
      this.x += this.speedX;
      this.y += this.speedY;
    }
    if (this.speedX > 0 && player.srcY !== 1  * player.frameHeight && player.srcY !== 3 * player.frameHeight ) {
      this.x += this.speedX;
      this.y += this.speedY;
    }
  }
}