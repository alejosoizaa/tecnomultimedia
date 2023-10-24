class Obstacle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.ancho = 80;
    this.altura = 70;
    this.miImagen = loadImage (' data/meteorito.webp');
  }

  show() {
    noFill();
    noStroke();
    rect(this.x, this.y, 20, 20);
    image(this.miImagen,this.x-20,this.y-30,this.ancho,this.altura);
    
  }

  move(speed) {
    this.y += speed;
    if (this.y > height) {
      obstacles.splice(obstacles.indexOf(this), 1);
    }
  }
}
