class Schyte {
  constructor(x, y, speedX, speedY, sizeX, sizeY) {
    this.x = x;
    this.y = y;
    this.speedX = speedX;
    this.speedY = speedY;
    this.sizeX = sizeX;
    this.sizeY = sizeY;
  }

  update() {
    this.x += this.speedX;
  }
}