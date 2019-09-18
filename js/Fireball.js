class FireBall {
  constructor(x, y, speedX, speedY, size, gravity = 0) {
    this.x = x;
    this.y = y;
    this.speedX = speedX;
    this.speedY = speedY;
    this.size = size;
    this.damage = 0;
    this.gravity = gravity;
  }

  move() {
    this.speedY += this.gravity;
    this.x += this.speedX;
    this.y += this.speedY;
  }
}