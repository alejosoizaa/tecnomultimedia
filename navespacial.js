class naveespacial {
  constructor() {
    this.x = width / 2;
    this.y = height - 20;
     this.ancho = 70;
    this.altura = 30;
    this.Imagen = loadImage ('data/nave.png');
  }

  show() {
     noFill();
    noStroke();
    rect(this.x, this.y-40, 20, 20);
    image(this.Imagen, this.x +3, this.y-40, this.ancho, this.altura);
  }

  move() {
    if (keyIsDown(LEFT_ARROW) && this.x > 0) {
      this.x -= 5;
    }
    if (keyIsDown(RIGHT_ARROW) && this.x < width - 20) {
      this.x += 5;
    }
  }

  hits(obstacle) {
    let d = dist(this.x, this.y, obstacle.x, obstacle.y);
    return d < 20;
  }
}
