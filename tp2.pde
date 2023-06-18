// alejo soiza 
// tp2 comision 1
// https://youtu.be/Cal0v-SBwqA video explicativo 
int cant = 16;
int cantb = 14;
int anchob = 90;
float altob = 14.28571;
int anchomax = 80;

PImage ilusion;
boolean animacionIniciada = false;
boolean animacionDetenida = false;

void setup() {
  size(800, 400);
  ilusion = loadImage("imagen1.jpg");
}

void draw() {
  background(0);

  image(ilusion, 0, 0, 400, 400);
  translate(400, 0);

  fill(0, 255, 0);
  rectMode(CENTER);
  translate(200, 200);
  noStroke();

  for (int r = 0; r < 4; r++) {
    pushMatrix();
    rotate(PI * 0.5 * r);
    translate(0, -altob / 2);
    for (int c = 0; c < cantb; c++) {
      if (c % 2 == 0) {
        fill(0); //Color negro para rectángulos pares
      } else {
        fill(255); //Color blanco para rectángulos impares
      }
      rect(0, altob * c, altob * c * 2, altob);
    }
    popMatrix();
  }

  cantb = 15; 
  // Dibuja los rectángulos más grandes en las esquinas
  for (int r = 0; r < 4; r++) {
    pushMatrix();
    rotate(PI * 0.5 * r);
    translate(0, -altob / 2);
    for (int c = 0; c < cantb; c++) {
      if (c % 2 == 1) {
        fill(0);
      } else {
        fill(255);
      }
      if (anchomax < altob * c * 2) {
        rect(0, altob * c, anchomax, altob);
      } else {
        rect(0, altob * c, altob * c * 2, altob);
      }
    }
    popMatrix();
  }

  if (animacionIniciada && !animacionDetenida) {
    // Cambiar colores
    int color1 = color(255, 11, 3);
    int color2 = color(236, 113, 255);
    int currentColor = lerpColor(color1, color2, abs(sin(frameCount * 0.1)));

    
    for (int r = 0; r < 4; r++) { // Dibujar rectángulos con animación
      pushMatrix();
      rotate(PI * 0.5 * r);
      translate(0, -altob / 2);
      for (int c = 0; c < cantb; c++) {
        if (c % 2 == 0) {
          fill(currentColor);
        } else {
          fill(255 - red(currentColor), 255 - green(currentColor), 255 - blue(currentColor));
        }
        if (anchomax < altob * c * 2) {
          rect(0, altob * c, anchomax, altob);
        } else {
          rect(0, altob * c, altob * c * 2, altob);
        }
      }
      popMatrix();
    }
  }
}

void keyPressed() {
  if (!animacionIniciada) {
    animacionIniciada = true;
  } else if (key == 's' || key == 'S') {
    animacionDetenida = !animacionDetenida;
  }
}
