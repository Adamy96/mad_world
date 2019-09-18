class Schyte {
  constructor(x, y, speedX, speedY, width, damage) {
    this.x = x;
    this.y = y;
    this.speedX = speedX;
    this.speedY = speedY;
    this.width = this.height = width;
    this.damage = damage;

    this.srcX = 0;
    this.srcY = 0;
    this.imgWidth = 3940;
    this.imgHeight = 719;
    this.cols = 10;
    this.rows = 2;
    this.frameWidth = this.imgWidth / this.cols;
    this.frameHeight = this.imgHeight / this.rows;
    this.updateFrameSpeed = 0.4;
    this.curFrame = 0;

  }

  move() {
    this.curFrame += this.updateFrameSpeed;
    this.srcX = (Math.floor(this.curFrame) % this.cols) * this.frameWidth;

    this.x += this.speedX;
  }
}