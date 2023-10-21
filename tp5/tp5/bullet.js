class Bullet {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  show() {
    fill(255, 0, 0);
    ellipse(this.x, this.y, 5, 5);
  }

  move() {
    this.y -= 5;
  }

  hits(obstacle) {
    let d = dist(this.x, this.y, obstacle.x, obstacle.y);
    return d < 12.5;
  }
}
