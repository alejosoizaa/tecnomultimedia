class Obstacle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  show() {
    fill(255, 0, 0);
    rect(this.x, this.y, 20, 20);
  }

  move(speed) {
    this.y += speed;
    if (this.y > height) {
      obstacles.splice(obstacles.indexOf(this), 1);
    }
  }
}
