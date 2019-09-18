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

  draw: (player) => {
    // FUNDO "CAVERNA"
    ctx.drawImage(backgroundImg2, 0, 0, canvas.width, canvas.height - tile1.size);

    // Obstáculos
    for (let i = 0; i < maps[currentMap].obstacles.length; i++) {
      ctx.drawImage(cTile1, maps[currentMap].obstacles[i].x, maps[currentMap].obstacles[i].y, maps[currentMap].obstacles[i].size, maps[currentMap].obstacles[i].size);
      player.handleColision(maps[currentMap].obstacles[i]);
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
  fireBalls: [],
  lava: [],
  obstaclesCreated: false,
  count: 0,

  createObstacles: () => {
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

    maps[1].lava.push(new Lava (10 * tile1.size, (canvas.height - 2 * tile1.size) + 10, 15 * tile1.size, tile1.size));
  },

  draw: (player) => {
    // FUNDO "CAVERNA"
    ctx.drawImage(backgroundImg2, 0, 0, canvas.width, canvas.height - tile1.size);

    // Obstáculos
    for (let i = 0; i < maps[1].obstacles.length; i++) {
      ctx.drawImage(cTile1, maps[1].obstacles[i].x, maps[1].obstacles[i].y, maps[1].obstacles[i].size, maps[1].obstacles[i].size);
      player.handleColision(maps[currentMap].obstacles[i]);
      
    }

    // Lava
    for (let i = 0; i < maps[1].lava.length; i++) {
      ctx.beginPath();
      ctx.drawImage(cLava, maps[1].lava[i].x, maps[1].lava[i].y, maps[1].lava[i].width, maps[1].lava[i].height)
      if (player.checkColisionRectangle(maps[1].lava[i])) {
        player.health -= maps[1].lava[i].damage;
      }
    }
    
    ctx.font = "50px Chilanka";
    ctx.fillStyle = 'rgba(255 ,255 ,255 , .6)';
    ctx.fillText("You will never get over your fears", 5 * tile1.size, 3 * tile1.size);

    ctx.font = "25px Chilanka";
    ctx.fillText(`${player.health.toFixed(1)} / 100`, player.x + 10, player.y - 30);
    ctx.fillStyle = 'rgb(60, 60, 60)';
    ctx.fillRect(player.x + 10, player.y - 20, 100, 10);
    ctx.fillStyle = 'rgb(255, 0, 0)';
    ctx.fillRect(player.x + 10, player.y - 20, player.health, 10);
    
    maps[1].count += 1;

    if (maps[1].count % 300 === 0) {
      maps[1].fireBalls.push(new FireBall(15.5 * tile1.size, canvas.height - 2 * tile1.size, 0, -8, 25, 0.1));
      maps[1].fireBalls.push(new FireBall(20.5 * tile1.size, canvas.height - 2 * tile1.size, 0, -8, 25, 0.1));
    }
    
    for (let i = 0; i < maps[1].fireBalls.length; i++) {
      ctx.beginPath();
      ctx.arc(maps[1].fireBalls[i].x, maps[1].fireBalls[i].y, maps[1].fireBalls[i].size, 0, Math.PI * 2);
      ctx.fill();
      maps[1].fireBalls[i].move();
      if (player.checkColisionSphere(maps[1].fireBalls[i])) { // Player colidindo com as fireBalls
        player.health -= maps[1].fireBalls[i].damage;
        maps[1].fireBalls.splice(i, 1);
      }
      if (maps[1].fireBalls[i].y > canvas.height - 2 * tile1.size) { // Excluindo as fireBalls que sairem do mapa
        maps[1].fireBalls.splice(i, 1);
      }
    }
  }

}, { // <<<<<<<<<<<<<<<<<<<<<<<<<<<< MAP 2 >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  obstacles: [],
  fireBalls: [],
  lava: [],
  obstaclesCreated: false,
  count: 0,

  createObstacles: () => {
    for (let i = 0; i < 2; i++) {
      for (let j = 0; j < 4; j++) { // Base esquerda
        maps[2].obstacles.push(new Obstacle(i * tile1.size, canvas.height - (j + 1) * tile1.size, 0, 0, tile1.size));
      }
    }

    // Chão
    for (let i = 0; i < 23; i++) {
      maps[2].obstacles.push(new Obstacle((i + 1) * tile1.size, canvas.height - (1 * tile1.size), 0, 0, tile1.size));
    }

    // Plataformas
    for (let i = 0; i < 4; i++) {
      maps[2].obstacles.push(new Obstacle((i + 1) * 5 * tile1.size, canvas.height - (5 * tile1.size), 0, 0, tile1.size));
      console.log(maps[2].obstacles[maps[2].obstacles.length - 1]);
    }

    for (let i = 0; i < 4; i++) {
      maps[2].obstacles.push(new Obstacle(24 * tile1.size, canvas.height - (i + 1) * tile1.size, 0, 0, tile1.size));
    }

    maps[2].lava.push(new Lava (2 * tile1.size, (canvas.height - 2 * tile1.size) + 10, 22 * tile1.size, tile1.size));
  },

  draw: (player) => {
    // FUNDO "CAVERNA"
    ctx.drawImage(backgroundImg2, 0, 0, canvas.width, canvas.height - tile1.size);

    // Obstáculos
    for (let i = 0; i < maps[2].obstacles.length; i++) {
      ctx.drawImage(cTile1, maps[2].obstacles[i].x, maps[2].obstacles[i].y, maps[2].obstacles[i].size, maps[2].obstacles[i].size);
      player.handleColision(maps[currentMap].obstacles[i]);
    }

    // Lava
    for (let i = 0; i < maps[2].lava.length; i++) {
      ctx.beginPath();
      ctx.fillStyle = 'rgb(255, 0, 0)';
      ctx.drawImage(cLava, maps[2].lava[i].x, maps[2].lava[i].y, maps[2].lava[i].width, maps[2].lava[i].height)
      if (player.checkColisionRectangle(maps[2].lava[i])) {
        player.health -= maps[2].lava[i].damage;
      }
    }

    if (maps[2].count % 300 === 0) {
      maps[2].fireBalls.push(new FireBall(3.5 * tile1.size, canvas.height - 2 * tile1.size, 0, -8, 25, 0.1));
      maps[2].fireBalls.push(new FireBall(8.5 * tile1.size, canvas.height - 2 * tile1.size, 0, -8, 25, 0.1));
      maps[2].fireBalls.push(new FireBall(13.5 * tile1.size, canvas.height - 2 * tile1.size, 0, -8, 25, 0.1));
      maps[2].fireBalls.push(new FireBall(18.5 * tile1.size, canvas.height - 2 * tile1.size, 0, -8, 25, 0.1));
      maps[2].fireBalls.push(new FireBall(22.5 * tile1.size, canvas.height - 2 * tile1.size, 0, -8, 25, 0.1));
    }

    if (maps[2].count % 900 === 0) {
      maps[2].fireBalls.push(new FireBall(canvas.width, canvas.height - 6 * tile1.size, -6, -0, 25));
      maps[2].fireBalls.push(new FireBall(canvas.width, canvas.height - 6 * tile1.size, -6, -0, 25));
      maps[2].fireBalls.push(new FireBall(canvas.width, canvas.height - 6 * tile1.size, -6, -0, 25));
      maps[2].fireBalls.push(new FireBall(canvas.width, canvas.height - 6 * tile1.size, -6, -0, 25));
      maps[2].fireBalls.push(new FireBall(canvas.width, canvas.height - 6 * tile1.size, -6, -0, 25));
    }

    maps[2].count += 1;

    for (let i = 0; i < maps[2].fireBalls.length; i++) {
      ctx.beginPath();
      ctx.arc(maps[2].fireBalls[i].x, maps[2].fireBalls[i].y, maps[2].fireBalls[i].size, 0, Math.PI * 2);
      ctx.fill();
      maps[2].fireBalls[i].move();
      if (player.checkColisionSphere(maps[2].fireBalls[i])) { // Player colidindo com as fireBalls
        player.health -= maps[2].fireBalls[i].damage;
        maps[2].fireBalls.splice(i, 1);
      }
      if (maps[2].fireBalls[i].y > canvas.height - 2 * tile1.size) { // Excluindo as fireBalls que sairem do mapa
        maps[2].fireBalls.splice(i, 1);
      }
    }
    
    ctx.font = "50px Chilanka";
    ctx.fillStyle = 'rgba(255 ,255 ,255 , .6)';
    ctx.fillText("They will haunt you forever", 7 * tile1.size, 3 * tile1.size);

    ctx.font = "25px Chilanka";
    ctx.fillText(`${player.health.toFixed(1)} / 100`, player.x + 10, player.y - 30);
    ctx.fillStyle = 'rgb(60, 60, 60)';
    ctx.fillRect(player.x + 10, player.y - 20, 100, 10);
    ctx.fillStyle = 'rgb(255, 0, 0)';
    ctx.fillRect(player.x + 10, player.y - 20, player.health, 10);

  }
}, { // <<<<<<<<<<<<<<<<<<<<<<<<<<<< MAP 3 >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  obstacles: [],
  fireBalls: [],
  lava: [],
  obstaclesCreated: false,
  count: 0,

  createObstacles: () => {
    for (let i = 0; i < 25; i++) { // Chão
      maps[3].obstacles.push(new Obstacle(i * tile1.size, canvas.height - tile1.size, 0, 0, tile1.size));
    }

    maps[3].obstacles.push(new Obstacle(2 * tile1.size, canvas.height - 4 *  tile1.size, 0, 0, tile1.size));
    maps[3].obstacles.push(new Obstacle(6 * tile1.size, canvas.height - 6 * tile1.size, 0, 0, tile1.size));
    maps[3].obstacles.push(new Obstacle(10 * tile1.size, canvas.height - 8 * tile1.size, 0, 0, tile1.size));
    maps[3].obstacles.push(new Obstacle(14 * tile1.size, canvas.height - 6 * tile1.size, 0, 0, tile1.size));
    maps[3].obstacles.push(new Obstacle(18 * tile1.size, canvas.height - 4 * tile1.size, 0, 0, tile1.size));
  },

  draw: (player) => {
    // FUNDO "CAVERNA"
    ctx.drawImage(backgroundImg2, 0, 0, canvas.width, canvas.height - tile1.size);

    // Obstáculos
    for (let i = 0; i < maps[3].obstacles.length; i++) {
      ctx.drawImage(cTile1, maps[3].obstacles[i].x, maps[3].obstacles[i].y, maps[3].obstacles[i].size, maps[3].obstacles[i].size);
      player.handleColision(maps[currentMap].obstacles[i]);
    }

    

    // Frase
    ctx.font = "50px Chilanka";
    ctx.fillStyle = 'rgba(255 ,255 ,255 , .6)';
    ctx.fillText("Unless you DEFEAT them!", 7 * tile1.size, 3 * tile1.size);
  }
}];