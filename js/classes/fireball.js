class fireBall {
  constructor(x, y, speedX, speedY, size, damage) {
    this.x = x;
    this.y = y;
    this.speedX = speedX;
    this.speedY = speedY;
    this.size = size;
    this.damage = damage;
  }

  move() {
    this.speedY += 0.1;
    this.x += this.speedX;
    this.y += this.speedY;
  }
}