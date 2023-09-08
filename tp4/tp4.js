//https://youtu.be/pD9qxuK_dYk
//Alejo Soiza
let estado = 0;
let personajeX;
let personajeY;
let pelotaX = [];
let pelotaY = [];
let numPelotas = 1;
let pelotaSpeed = [];
let pelotaDiameter = [];
let puntaje = 0;
let imagenes = [];
let botonReiniciarX;
let botonReiniciarY;
let botonAncho = 120; 
let botonAlto = 50;  

//cargar imágenes
function preload () {
  for (let i = 0; i < 2; i++) {
    imagenes[i] = loadImage ("data/imagen"+i+".png");
  }
}

function setup () {
  createCanvas (600, 600);
  personajeX = width / 2; //hace que el personaje inicie en el centro
  personajeY = 550; //hace que el personaje este en la parte inferior de la pantalla
  botonReiniciarX = width / 2;
  botonReiniciarY = height / 2 + 100;
  pelotasquecaen();
}

function draw () {
  if (estado == 0) {
    estado0();
  } else if (estado == 1) {
    if (keyIsDown(LEFT_ARROW)) {
      moverPersonaje('LEFT');
    }else if (keyIsDown(RIGHT_ARROW)) {
      moverPersonaje('RIGHT');
    }
    estado1();
  } else if (estado == 2) {
    estado2();
  } else if (estado == 3) {
    estado3();
  }
}

//pantalla de inicio y créditos
function estado0() {
  background(247, 211, 2);
  fill(119, 147, 126);
  rectMode(CENTER);
  rect(300, 350, 100, 50);
  textSize(40);
  textAlign(CENTER, CENTER);
  fill(0);
  text("El MONO COME BANANAS", 300, 250);
  fill(247, 211, 2);
  textSize(35);
  text("Iniciar", 300, 350);
  fill(0);
  textSize(20);
  text ("Alejo Soiza", 300, 500);
}

//juego
function estado1() {
  background(0,57,2);
    rectMode(CENTER);
    fill(108, 58, 24);
    rect(300, 590, 600, 30);
    dibujarpelotas();
    personaje();
    puntos();
    perder();
}

//pantalla cuando perdes
function estado2() {
  background(142, 19, 21);
    textAlign(CENTER, CENTER);
    textSize(40);
    text(" Perdiste \n Perdiste \n Dejaste caer las bananas ", 300, 250);
    //dibuja el botón de reinicio
    fill(126, 56, 50);
    rectMode(CENTER);
    rect(botonReiniciarX, botonReiniciarY, 120, 50);
    textSize(25);
    fill(255);
    text("Reiniciar", botonReiniciarX, botonReiniciarY);
    //verifica si se hizo clic en el botón
    if (
      mouseX > botonReiniciarX - botonAncho / 2 &&
      mouseX < botonReiniciarX + botonAncho / 2 &&
      mouseY > botonReiniciarY - botonAlto / 2 &&
      mouseY < botonReiniciarY + botonAlto / 2
    ) {
      if (mouseIsPressed) {
        //reinicia el juego al hacer clic en el botón
        estado = 0;
        puntaje = 0;
        pelotasquecaen();
      }
    } 
}

//pantalla cuando ganas
function estado3() {
  background(0,147,6);
    textAlign(CENTER, CENTER);
    textSize(35);
    text("!Ganaste!, \n el mono agarro todas las bananas", 300, 300);
    //dibuja el botón de reinicio
    fill(50, 126, 76);
    rectMode(CENTER);
    rect(botonReiniciarX, botonReiniciarY, 120, 50);
    textSize(25);
    fill(255);
    text("Reiniciar", botonReiniciarX, botonReiniciarY);
    //verifica si se hizo clic en el botón
    if (
      mouseX > botonReiniciarX - botonAncho / 2 &&
      mouseX < botonReiniciarX + botonAncho / 2 &&
      mouseY > botonReiniciarY - botonAlto / 2 &&
      mouseY < botonReiniciarY + botonAlto / 2
    ) {
      if (mouseIsPressed) {
        //reinicia el juego al hacer clic en el botón
        estado = 0;
        puntaje = 0;
        pelotasquecaen();
      }
    } 
}

//hace que el personaje se mueva en X
function moverPersonaje (direction) {
  if (direction === 'LEFT' && estado == 1) {
    personajeX -= 4;
  } else if (direction === 'RIGHT' && estado == 1) {
    personajeX += 4;
  }
}

//hace que las pelotas empiecen a caer
function pelotasquecaen() {
  for (let i = 0; i < numPelotas; i++) {
    pelotaX[i] = random(width); //posición aleatoria de la pelota en X
    pelotaY[i] = random(-400, -50); //posición Y inicial arriba de la pantalla
    pelotaSpeed[i] = 5; //velocidad 
    pelotaDiameter[i] = 50;
  }
}

//iniciar el juego
function checkMouseClick() {
  if (estado == 0 && zonaRect(300, 350, 100, 50)) {
    estado = 1;
  }
}
//verifica si el mouse esta dentro del rectángulo para iniciar
function zonaRect(x, y, w, h) {
  return mouseX > x - w / 2 && mouseX < x + w / 2 && mouseY > y - h / 2 && mouseY < y + h / 2;
}
function mouseClicked() {
  checkMouseClick();
}

//dibuja el personaje
function personaje() {
  fill(214, 204, 153);
  // ellipse(personajeX, personajeY, 40, 40);
  //calcula las coordenadas para centrar la imagen en la elipse
  let x = personajeX + imagenes[0].width / 2;
  let y = personajeY + imagenes[0].height / 2;
  image(imagenes[0], personajeX-40, personajeY-40, 80, 80); //muestra la imagen del personaje centrada en la elipse
}

//muestra el puntaje
function puntos () {
  textSize(20);
    fill(255);
    text("Puntaje: " + puntaje, 55, 30);
//cuando el contador llega a 10 ganas
    if (puntaje >= 10) {
      estado = 3; 
    }
}

//cuando la pelota colisiona con el suelo perdes
function perder () {
  if (pelotaY[0] + pelotaDiameter[0] / 2 > height - 30) {
      estado = 2;
    }
}

//dibuja las pelotas
function dibujarpelotas () {
      for (let i = 0; i < numPelotas; i++) {
      pelotaY[i] += pelotaSpeed[i];
      fill(255);
      // ellipse(pelotaX[i], pelotaY[i], 54);
      //calcula las coordenadas para centrar la imagen en la elipse
      let x = pelotaX - imagenes[1].width / 2;
      let y = pelotaY - imagenes[1].height / 2;
      image(imagenes[1], pelotaX-27, pelotaY-27, 54, 54); //muestra la imagen del personaje centrada en la elipse

      if (pelotaY[i] > height + 50) {
        //reiniciar en la parte superior
        pelotaY[i] = random(-400, -50);
        pelotaX[i] = random(width);
      }
      //cuando la pelota toca el personaje aumenta el puntaje
      if (dist(pelotaX[i], pelotaY[i], personajeX, personajeY) < (pelotaDiameter[i] + 65) / 2) {
        puntaje++;
        //resetea la pelota cuando toca al personaje
        pelotaY[i] = random(-400, -50);
        pelotaX[i] = random(width);
      }
    }
}
