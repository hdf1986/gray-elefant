class Rectangle {
  constructor ({x, y, width, height, fillStyle}) {
    this.x = x;
    this.y = y;
    this._width = width;
    this.width = width;
    this.height = height;
    this._height = height;
    this.fillStyle = fillStyle || 'rgb(200, 0, 0)';
  }
  start () {}
  update () {}
  draw (ctx, canvas) {
    ctx.fillStyle = this.fillStyle;
    ctx.fillRect(this.x - this._width / 2, this.y - this._height * 0.5, this._width, this._height);
  }
}