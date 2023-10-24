class Bala {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.ancho = 80;
    this.altura = 70;
    this.Imagen = loadImage ('data/disparo.png');
  }

  show() {
    fill(255, 0, 0);
    ellipse(this.x, this.y, 5, 5);
    image(this.Imagen, this.x-20, this.y-40, 40, 35);
  }

  move() {
    this.y -= 5;
  }

  hits(obstacle) {
    let d = dist(this.x, this.y, obstacle.x, obstacle.y);
    return d < 12.5;
  }
}
