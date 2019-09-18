class Boss {
  constructor(x, y, health, sizeX, sizeY) {
    this.x = x;
    this.y = y;
    this.health = health;
    this.sizeX = sizeX;
    this.sizeY = sizeY;

    this.schytes1 = [];
    this.schytes2 = [];
    this.chasers = [];
    this.lavas = [];
  }

  pattern100(counter) {
    if (counter % 500 === 0) {
      let rndNum = Math.floor(Math.random() * 10);

      if (rndNum < 2.5) {
        this.schytes1.push(new Schyte(canvas.width, 2 *  tile1.size, -6, 0, tile1.size));
      } else if (rndNum < 5) {
        this.schytes1.push(new Schyte(canvas.width, 4 *  tile1.size, -6, 0, tile1.size));
      } else if (rndNum < 7.5) {
        this.schytes1.push(new Schyte(canvas.width, 6 *  tile1.size, -6, 0, tile1.size));
      } else {
        this.schytes1.push(new Schyte(canvas.width, 8 *  tile1.size, -6, 0, tile1.size));
      }

      for (let i = 0; i < this.schytes1.length; i++) {
        if (this.schytes1[i].x < -20) this.schytes1.splice(i, 1);
      }
    }

  }

  pattern75(counter) {

  }

  pattern50(counter) {

  }

  pattern25(counter) {

  }
}