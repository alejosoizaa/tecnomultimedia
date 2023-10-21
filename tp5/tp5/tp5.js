let spacecraft;
let obstacles = [];
let bullets = [];
let obstacleSpeed = 5;
let obstacleSpawnRate = 50;
let timePassed = 0;
let gameOver = false;
let gameStarted = false; // Bandera para el estado de juego
let backgroundImage; // Variable para la imagen de fondo

function setup() {
  createCanvas(400, 400);
  spacecraft = new Spacecraft();
}

function draw() {
  background(0);


  if (!gameOver) {
    if (gameStarted) { // Comprueba si el juego ha comenzado
      spacecraft.show();
      spacecraft.move();

      timePassed++;

      if (timePassed % obstacleSpawnRate === 0) {
        for (let i = 0; i < random(1, 4); i++) {
          obstacles.push(new Obstacle(random(width), 0));
        }

        if (obstacleSpeed < 5) {
          obstacleSpeed += 0.1;
        }

        if (obstacleSpawnRate > 50) {
          obstacleSpawnRate -= 10;
        }
      }

      for (let obstacle of obstacles) {
        obstacle.show();
        obstacle.move(obstacleSpeed);

        if (spacecraft.hits(obstacle)) {
          gameOver = true;
        }

        for (let bullet of bullets) {
          if (bullet.hits(obstacle)) {
            bullets.splice(bullets.indexOf(bullet), 1);
            obstacles.splice(obstacles.indexOf(obstacle), 1);
          }
        }
      }

      for (let i = bullets.length - 1; i >= 0; i--) {
        bullets[i].show();
        bullets[i].move();
      }
    } else {
      background(183, 3, 255);
    textSize(25);
    text(" pulsa para jugar", 100, 180);
     textSize(15);
    text(" Alejo Soiza ", 150, 300);
  
    }
  } else {
    textSize(32);
    fill(255, 0, 0);
    text("Game Over", width / 2 - 100, height / 2);
  }
}

function mousePressed() {
  if (!gameStarted) {
    gameStarted = true; // Iniciar el juego cuando se hace clic en la pantalla de inicio
  }
}

function keyPressed() {
  if (!gameOver && gameStarted) {
    if (key === ' ') {
      let bullet = new Bullet(spacecraft.x, spacecraft.y);
      bullets.push(bullet);
    }
  }
}
