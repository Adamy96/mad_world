class Character {

  constructor(name) {
    // Status
    this.name = name;
    this.health = 100;
    this.size = 110;
    this.speedX = 0;
    this.speedY = 0;
    this.jumping = false;

    // Posicionamento
    this.x = 20; // Posição X inicial
    this.y = canvas.height - this.size - tile1.size + this.speedY; // (Editar para o tamanho do bloco inicial)

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

    // Projéteis criados pelo jogador
    this.shoots = [];
  }

  update() {
    this.curFrame += this.updateFrameSpeed; // Isso serve pra 'retardar' o update nos frames do this
    this.srcX = (Math.floor(this.curFrame) % this.cols) * this.frameWidth;

    this.speedY += 0.1;// Gravidade
    this.x += this.speedX;
    this.y += this.speedY;
    this.speedX *= 0.98; // Fricção
    this.speedY *= 0.98; // Fricção

    for (let i = 0; i < this.shoots.length; i++) { // Atualizando os 'ataques' lançados
      ctx.beginPath();
      ctx.fillStyle = 'rgba(255, 0, 0, .8)';
      ctx.arc(this.shoots[i].x, this.shoots[i].y, this.shoots[i].size, 0, Math.PI * 2);
      ctx.fill();

      // Deletando os 'ataques'
      if (this.shoots[i].x < 0 || this.shoots[i].x > canvas.width || this.shoots[i].y < 0 || this.shoots[i].y > canvas.height - tile1.size) {
        this.shoots.splice(i, 1);
      }
    }

    if (controller.up && this.jumping == false) { // Pulo
      this.speedY -= 10; // 7
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
    }

    if (this.y > canvas.height - tile1.size - this.size) { // Resetando o pulo
      this.jumping = false;
      this.y = canvas.height - tile1.size - this.size - 0.1;
      this.speedY = 0;
    }

    if (currentMap == 0 && this.x + this.size > canvas.width) {
      currentMap = 1;
      this.y -= 0.1;
      this.x = 20;
    } 
  }

  draw(img) {
    ctx.drawImage(img, this.srcX, this.srcY, this.frameWidth, this.frameHeight, this.x, this.y, this.size, this.size);
  }

  checkColision(player, obstacle) { // return true if colide
    return (player.x < obstacle.x + obstacle.size)
    && (player.x + player.size > obstacle.x)
    && (player.y < obstacle.y + obstacle.size)
    && (player.y + player.size > obstacle.y)
  }
}
