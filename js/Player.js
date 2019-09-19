class Character {

  constructor(name) {
    // Status
    this.name = name;
    this.health = 100;
    this.size = 100;
    this.speedX = 0;
    this.speedY = 0;
    this.jumping = false;

    // Posicionamento
    this.x = this.ox = 20; // Posição X inicial
    this.y = this.oy = canvas.height - this.size - tile1.size + this.speedY; // (Editar para o tamanho do bloco inicial)

    this.img = new Image();
    this.imgWidth = 4185; // Largura da sprite
    this.imgHeight = 2020; // Altura da sprite
    this.cols = 8; // Numero de sprites na horizontal
    this.rows = 4; // Numero de linhas na sprite
    this.frameWidth = this.imgWidth / this.cols; // Largura de cada "bloco" da sprite
    this.frameHeight = this.imgHeight / this.rows; // Altura de cada "bloco" da sprite
    this.curFrame = 0; // Frame atual
    this.srcX = 0; // Posição X da sprite que irá começar o "corte" de um bloco
    this.srcY = 2 * this.frameHeight; // Posição Y da sprite que irá começar o "corte" de um bloco
    this.lastSrcY = 2 * this.frameHeight;
    this.updateFrameSpeed = 0.07;
  }

  update() {
    this.curFrame += this.updateFrameSpeed; // Isso serve pra 'retardar' o update nos frames do this
    this.srcX = (Math.floor(this.curFrame) % this.cols) * this.frameWidth;

    this.ox = this.x;
    this.oy = this.y;

    this.speedY += 0.1;// Gravidade
    this.x += this.speedX;
    this.y += this.speedY;
    this.speedX *= 0.98; // Fricção
    this.speedY *= 0.98; // Fricção

    if (this.x < 0) {
      this.x = 0.1;
      this.speedX *= -1;
    }

    if (controller.up && this.jumping == false) { // Pulo
      playerJump.play();
      this.speedY = -8; // -= 7
      this.jumping = true;
    }

    if (controller.left) { // Andar para esquerda
      this.srcY = 1 * this.frameHeight;
      this.updateFrameSpeed = 0.1;
      this.speedX -= 0.035;
      if (this.x < 0) this.speedX = 0;
    }

    if (controller.right) { // Andar para direita
      this.srcY = 0 * this.frameHeight;
      this.updateFrameSpeed = 0.1;
      this.speedX += 0.035;
      if (currentMap === 3 && this.x + this.size > canvas.width - 5) this.speedX = 0;
    }

    // Passando do mapa 0 para o mapa 1
    if (currentMap == 0 && this.x + this.size > canvas.width) {
      // ctx.save(); Atualizar pra salvar a vida do personagem dps
      currentMap = 1;
      this.y -= 0.1;
      this.x = 10;
    }

    // Passando do mapa 1 para o mapa 2
    if (currentMap == 1 && this.x + this.size > canvas.width) {
      // ctx.save(); Atualizar pra salvar a vida do personagem dps
      currentMap = 2;
      this.y -= 0.1;
      this.x = 0.1;
    } 

    // Passando do mapa 2 para o mapa 3 (Boss)
    if (currentMap == 2 && this.x + this.size > canvas.width) {
      currentMap = 3;
      this.y = canvas.height - tile1.size;
      this.x = 10;
    }
  }

  draw(img) {
    ctx.drawImage(img, this.srcX, this.srcY, this.frameWidth, this.frameHeight, this.x, this.y, this.size, this.size);
  }

  setBottom(b) { this.y = b - this.size;}
  setLeft(l)   { this.x = l;}
  setRight(r)  { this.x = r - this.size;}
  setTop(t)    { this.y = t;}

  handleColision(obstacle) {
    if (this.y + this.size < obstacle.y || this.y > obstacle.y + obstacle.size || this.x > obstacle.x + obstacle.size || this.x + this.size < obstacle.x) return;
  
    if (this.x + this.size >= obstacle.x && this.ox + this.size < obstacle.x) {
      this.setRight(obstacle.x - 0.1);
    } else if (this.x <= obstacle.x + obstacle.size && this.y + this.size <= obstacle.y) {
      this.setLeft(obstacle.x + obstacle.size + 0.1); // nunca entra nele
    } else if (this.y + this.size >= obstacle.y && this.oy < obstacle.y) {
      this.setBottom(obstacle.y - 0.1);
      this.jumping = false;
    } else if (this.y <= obstacle.y + obstacle.size && this.oy > obstacle.y + obstacle.size) {
      this.setTop(obstacle.y + this.size + 0.1);
      this.speedY = 0;
    }
  }

  checkColisionRectangle(rectangle) { // return true if colide
    return (this.x < rectangle.x + rectangle.width)
    && (this.x + this.size > rectangle.x)
    && (this.y < rectangle.y + rectangle.height)
    && (this.y + this.size > rectangle.y)
  }

  checkColisionSphere(sphere) {
    return (this.x < sphere.x + sphere.size / 2)
    && (this.x + this.size > sphere.x - sphere.size / 2)
    && (this.y < sphere.y + sphere.size / 2)
    && (this.y + this.size > sphere.y - sphere.size / 2)
  }
}
// }