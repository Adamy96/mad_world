class Obstacle {
  constructor(x, y, speedX, speedY, size) {
    this.x = x;
    this.y = y;
    this.speedX = speedX;
    this.speedY = speedY;
    this.size = size;
  }

}

// heroHit(enemy) {
//   return (this.posX < enemy.posX + enemy.size)
//     && (this.posX + this.size > enemy.posX)
//     && (this.posY < enemy.posY + enemy.size)
//     && (this.posY + this.size > enemy.posY);
// }