class Spacecraft {
  constructor() {
    this.x = width / 2;
    this.y = height - 20;
  }

  show() {
    fill(0, 0, 255);
    rect(this.x, this.y, 20, 20);
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
