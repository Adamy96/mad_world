class Bullet {
  constructor(x, y, mouseX, mouseY, size, damage = 10) {
    this.damage = damage;
    this.x = x;
    this.y = y;
    this.speedX = ((mouseX - x) / (Math.abs((mouseX - x)) + Math.abs((mouseY - y)))) * 10;
    this.speedY = ((mouseY - y) / (Math.abs((mouseX - x)) + Math.abs((mouseY - y)))) * 10;
    this.size = size;
  }

  move() {
    this.x += this.speedX;
    this.y += this.speedY;
  }

  checkColisionRectangle(rectangle) { // return true if colide
    return (this.x < rectangle.x + rectangle.width)
    && (this.x + this.size > rectangle.x)
    && (this.y < rectangle.y + rectangle.height)
    && (this.y + this.size > rectangle.y)
  }
}