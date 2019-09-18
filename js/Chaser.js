class Chaser {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.speedX = 0.7;
    this.speedY = 0.3;
    this.damage = 10;
    this.currentHealth = this.maxHealth = 200;
    this.width = this.height = 2.5 * tile1.size;
  }

  move(player) {
    this.x += this.speedX;
    this.y += this.speedY;

    let distanceX = this.x - player.x;
    let distanceY = this.y - player.y;

    if (distanceX > 0) {
      this.speedX = -0.7;
    } else {
      this.speedX = 0.3;
    }

    if (distanceY > 0) {
      this.speedY = -0.7;
    } else {
      this.speedY = 0.3;
    } 
  }
}