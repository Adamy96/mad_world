class Dancer {
  constructor(x, y, srcY) {

    this.x = x;
    this.y = y;
    this.imgWidth = 3959; // Largura da sprite
    this.imgHeight = 1006; // Altura da sprite
    this.cols = 7; // Numero de sprites na horizontal
    this.rows = 2; // Numero de linhas na sprite
    this.frameWidth = this.imgWidth / this.cols; // Largura de cada "bloco" da sprite
    this.frameHeight = this.imgHeight / this.rows; // Altura de cada "bloco" da sprite
    this.curFrame = 0; // Frame atual
    this.srcX = 0; // Posição X da sprite que irá começar o "corte" de um bloco
    this.srcY = srcY * this.frameHeight; // Posição Y da sprite que irá começar o "corte" de um bloco
    this.lastSrcY = 2 * this.frameHeight;
    this.updateFrameSpeed = 0.07;
  }

  dance() {
    this.curFrame += this.updateFrameSpeed; // Isso serve pra 'retardar' o update nos frames do this
    this.srcX = (Math.floor(this.curFrame) % this.cols) * this.frameWidth;
    ctx.drawImage(cDancer, this.srcX, this.srcY, this.frameWidth, this.frameHeight, this.x, this.y, 250, 250);
  }
}