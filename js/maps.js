let maps = [{
  obstacles: [],
  obstaclesCreated: false,

  createObstacles: () => {
    // <<<<<<<<<<<<<<<<<<<<<<<<<<<< MAP 0 >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    for (let i = 0; i < 25; i++) { // Chão
      // Posição Left, posição Top, speedX, speed Y, Tamanho
      maps[0].obstacles.push(new Obstacle(i * tile1.size, canvas.height - tile1.size, 0, 0, tile1.size)); // Chão
    }
  },

  draw: () => {
    // FUNDO "CAVERNA"
    ctx.drawImage(backgroundImg2, 0, 0, canvas.width, canvas.height - tile1.size);

    // Obstáculos
    for (let i = 0; i < maps[currentMap].obstacles.length; i++) {
      ctx.drawImage(cTile1, maps[currentMap].obstacles[i].x, maps[currentMap].obstacles[i].y, maps[currentMap].obstacles[i].size, maps[currentMap].obstacles[i].size);
    }

    // INFOS
    ctx.font = "50px Chilanka";
    ctx.fillStyle = 'rgba(255 ,255 ,255 , .6)';

    ctx.fillText("Movements", 3.8 * tile1.size, 3 * tile1.size);
    ctx.drawImage(arrowKeysImg, 2 * tile1.size, 4 * tile1.size, 96 * 2, 63 * 2);
    ctx.drawImage(asdKeysImg, 7 * tile1.size, 4 * tile1.size, 96 * 2, 63 * 2);

    ctx.fillText("Attack", 18 * tile1.size, 3 * tile1.size);
    ctx.drawImage(mouseClickImg, 18.5 * tile1.size, 4 * tile1.size, 68 * 1.5, 95 * 1.5);
  },
}, { // <<<<<<<<<<<<<<<<<<<<<<<<<<<< MAP 1 >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  obstacles: [],
  fireBalls: [], // Como criar bolas de fogo que fiquem subindo?
  obstaclesCreated: false,
  count: 0,

  createObstacles: () => {
    // Map 1
    for (let i = 0; i < 25; i++) { // Chão
      // Posição Left, posição Top, speedX, speed Y, Tamanho
      maps[1].obstacles.push(new Obstacle(i * tile1.size, canvas.height - tile1.size, 0, 0, tile1.size)); // Chão
    }
    maps[1].obstacles.push(new Obstacle(9 * tile1.size, canvas.height - 2 * tile1.size, 0, 0, tile1.size));
    maps[1].obstacles.push(new Obstacle(9 * tile1.size, canvas.height - 3 * tile1.size, 0, 0, tile1.size));
    maps[1].obstacles.push(new Obstacle(8 * tile1.size, canvas.height - 2 * tile1.size, 0, 0, tile1.size));
    maps[1].obstacles.push(new Obstacle(8 * tile1.size, canvas.height - 3 * tile1.size, 0, 0, tile1.size));
  
    for (let i = 0; i < 3; i++) {
      maps[1].obstacles.push(new Obstacle((i + 11) * tile1.size, canvas.height - 4 * tile1.size, 0, 0, tile1.size));
    }

    for (let i = 0; i < 2; i++) {
      maps[1].obstacles.push(new Obstacle((i + 17) * tile1.size, canvas.height - 4 * tile1.size, 0, 0, tile1.size));
    }

    for (let i = 0; i < 3; i++) {
      maps[1].obstacles.push(new Obstacle((i + 22) * tile1.size, canvas.height - 4 * tile1.size, 0, 0, tile1.size));
    }

  },

  draw: (player) => {
    // FUNDO "CAVERNA"
    ctx.drawImage(backgroundImg2, 0, 0, canvas.width, canvas.height - tile1.size);

    // Obstáculos
    for (let i = 0; i < maps[1].obstacles.length; i++) {
      ctx.drawImage(cTile1, maps[1].obstacles[i].x, maps[1].obstacles[i].y, maps[1].obstacles[i].size, maps[1].obstacles[i].size);
    }
    
    // for (let i = 0; i < maps[1].fireBalls.length; i++) {
    //   console.log(maps[1].fireBalls[i]);
    // }

    ctx.drawImage(cLava, 10 * tile1.size, (canvas.height - 2 * tile1.size) + 10, 15 * tile1.size, tile1.size);

    ctx.font = "50px Chilanka";
    ctx.fillStyle = 'rgba(255 ,255 ,255 , .6)';
    ctx.fillText("You will never get over your fears", 5 * tile1.size, 3 * tile1.size);

    ctx.font = "25px Chilanka";
    ctx.fillText(`${player.health} / 100`, player.x + 10, player.y - 30);
    ctx.fillStyle = 'rgb(60, 60, 60)';
    ctx.fillRect(player.x + 10, player.y - 20, 100, 10);
    ctx.fillStyle = 'rgb(255, 0, 0)';
    ctx.fillRect(player.x + 10, player.y - 20, player.health, 10);
    
    maps[1].count += 1;

    if (maps[1].count % 400 === 0) {
      maps[1].fireBalls.push(new fireBall(15.5 * tile1.size, canvas.height - 2 * tile1.size, 0, -8, 25, 25));
      maps[1].fireBalls.push(new fireBall(20.5 * tile1.size, canvas.height - 2 * tile1.size, 0, -8, 25, 25))
    }
    
    for (let i = 0; i < maps[1].fireBalls.length; i++) {
      ctx.beginPath();
      ctx.arc(maps[1].fireBalls[i].x, maps[1].fireBalls[i].y, maps[1].fireBalls[i].size, 0, Math.PI * 2);
      ctx.fill();
      maps[1].fireBalls[i].move();
      if (maps[1].fireBalls[i].y > canvas.height - 2 * tile1.size) {
        maps[1].fireBalls.splice(i, 1);
      }
    }

    // for (let i = 0; i < maps[currentMap].obstacles.length; i++) {
    //   if (player.checkColision(player, maps[currentMap].obstacles[i])) {
    //     player.y = maps[currentMap].obstacles[i].y;
    //     player.speedY = 0;
    //     // console.log('Colisao');
    //   }
    // }
    
  }
}];