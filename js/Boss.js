class Boss {
  constructor(x, y, width, height) {
    this.maxHealth = 2000;
    this.currentHealth = 2000;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;

    this.schytes1 = [];
    this.schytes2 = [];
    this.lavas = [];
  }

  pattern100() {
    let rndNum = Math.floor(Math.random() * 10);

    if (rndNum < 2.5) {
      this.schytes1.push(new Schyte(canvas.width, canvas.height - 3.5 *  tile1.size, -7, 0, 1.5 * tile1.size, 5));
    } else if (rndNum < 5) {
      this.schytes1.push(new Schyte(canvas.width, canvas.height - 5.5 *  tile1.size, -7, 0, 1.5 * tile1.size, 5));
    } else if (rndNum < 7.5) {
      this.schytes1.push(new Schyte(canvas.width, canvas.height - 7.5 *  tile1.size, -7, 0, 1.5 * tile1.size, 5));
    } else {
      this.schytes1.push(new Schyte(canvas.width, canvas.height - 9.5 *  tile1.size, -7, 0, 1.5 * tile1.size, 5));
    }

    for (let i = 0; i < this.schytes1.length; i++) {
      if (this.schytes1[i].x < -20) this.schytes1.splice(i, 1);
    }

  }

  pattern75() {
    let rndNum = Math.floor(Math.random() * 10);

    if (rndNum < 2.5) {
      this.schytes2.push(new Schyte(canvas.width, canvas.height - 3.5 *  tile1.size, -7, 0, 1.5 * tile1.size, 10));
    } else if (rndNum < 5) {
      this.schytes2.push(new Schyte(canvas.width, canvas.height - 5.5 *  tile1.size, -7, 0, 1.5 * tile1.size, 10));
    } else if (rndNum < 7.5) {
      this.schytes2.push(new Schyte(canvas.width, canvas.height - 7.5 *  tile1.size, -7, 0, 1.5 * tile1.size, 10));
    } else {
      this.schytes2.push(new Schyte(canvas.width, canvas.height - 9.5 *  tile1.size, -7, 0, 1.5 * tile1.size, 10));
    }

    for (let i = 0; i < this.schytes2.length; i++) {
      if (this.schytes2[i].x < -150 && this.schytes2[i].speedX < 1) this.schytes2[i].speedX *= -1;
      if (this.schytes2[i].x > canvas.width + 20) this.schytes2.splice(i, 1);
    }
  }

  pattern50() {
    let rndNum = Math.floor(Math.random() * 10);

    if (rndNum < 2.5) {
      this.schytes2.push(new Schyte(canvas.width, canvas.height - 3.5 *  tile1.size, -7, 0, 1.5 * tile1.size, 10));
    } else if (rndNum < 5) {
      this.schytes2.push(new Schyte(canvas.width, canvas.height - 5.5 *  tile1.size, -7, 0, 1.5 * tile1.size, 10));
    } else if (rndNum < 7.5) {
      this.schytes2.push(new Schyte(canvas.width, canvas.height - 7.5 *  tile1.size, -7, 0, 1.5 * tile1.size, 10));
    } else {
      this.schytes2.push(new Schyte(canvas.width, canvas.height - 9.5 *  tile1.size, -7, 0, 1.5 * tile1.size, 10));
    }

    for (let i = 0; i < this.schytes2.length; i++) {
      if (this.schytes2[i].x < -150 && this.schytes2[i].speedX < 1) this.schytes2[i].speedX *= -1;
      if (this.schytes2[i].x > canvas.width + 20) this.schytes2.splice(i, 1);
    }
  }

  pattern25(counter) {
    let rndNum = Math.floor(Math.random() * 10);

    if (rndNum < 2.5) {
      this.schytes2.push(new Schyte(canvas.width, canvas.height - 3.5 *  tile1.size, -7, 0, 1.5 * tile1.size, 10));
    } else if (rndNum < 5) {
      this.schytes2.push(new Schyte(canvas.width, canvas.height - 5.5 *  tile1.size, -7, 0, 1.5 * tile1.size, 10));
    } else if (rndNum < 7.5) {
      this.schytes2.push(new Schyte(canvas.width, canvas.height - 7.5 *  tile1.size, -7, 0, 1.5 * tile1.size, 10));
    } else {
      this.schytes2.push(new Schyte(canvas.width, canvas.height - 9.5 *  tile1.size, -7, 0, 1.5 * tile1.size, 10));
    }

    for (let i = 0; i < this.schytes2.length; i++) {
      if (this.schytes2[i].x < -150 && this.schytes2[i].speedX < 1) this.schytes2[i].speedX *= -1;
      if (this.schytes2[i].x > canvas.width + 20) this.schytes2.splice(i, 1);
    }
  }
}
