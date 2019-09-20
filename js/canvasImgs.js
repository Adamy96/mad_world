let tile1 = {
  src: '../../Programação/game/img/tile2.svg',
  size: innerWidth / 25
}

let cTile1 = new Image();
cTile1.src = tile1.src;

let cDancer = new Image();
cDancer.src = '../../Programação/game/img/mainChar_dancing.svg';

let cBoss = new Image();
cBoss.src = '../../Programação/game/img/boss.svg';

let cSchyte = new Image();
cSchyte.src = '../../Programação/game/img/schyte_sprite.svg';

let cChaser = new Image();
cChaser.src = '../../Programação/game/img/chaser.svg';

let cTunnel = new Image();
cTunnel.src = '../../Programação/game/img/mario_tunnel.svg';

let cLava = new Image();
cLava.src = '../../Programação/game/img/lava.svg';

let arrowKeysImg = new Image();
arrowKeysImg.src = '../../Programação/game/img/arrowKeys.svg';

let asdKeysImg = new Image();
asdKeysImg.src = '../../Programação/game/img/asdKeys.svg';

let mouseClickImg = new Image();
mouseClickImg.src = '../../Programação/game/img/mouseClick.svg';

let backgroundImg2 = new Image();
backgroundImg2.src = '../../Programação/game/img/background_cave.svg';


let backgroundCave = new Image();
backgroundCave.src = '../../Programação/game/img/background_cave2.svg';

let cMarioGhost = new Image();
cMarioGhost.src = '../../Programação/game/img/mario_ghost.svg';

let smokeImg = new Image();
smokeImg.src = '../../Programação/game/img/963.jpg';

let backgroundSmoke1 = {
  img: smokeImg,
  x: 0,
  speed: -1,

  move: function () {
    this.x += this.speed;
    this.x %= canvas.width;
  },

  draw: function () {
    ctx.drawImage(this.img, this.x, 0);
    if (this.speed < 0) {
      ctx.drawImage(this.img, this.x + canvas.width, 0);
    } else {
      ctx.drawImage(this.img, this.x - this.img.width, 0);
    }
  }
};