function roundRect(ctx, x, y, width, height, radius, fill, stroke) {

  if (typeof radius === 'number') {
    radius = {tl: radius, tr: radius, br: radius, bl: radius};
  } else {
    var defaultRadius = {tl: 0, tr: 0, br: 0, bl: 0};
    for (var side in defaultRadius) {
      radius[side] = radius[side] || defaultRadius[side];
    }
  }
  if (typeof stroke === 'number') {
    stroke = {t: stroke, b: stroke, l: stroke, r: stroke,
              tl: stroke, tr: stroke, br: stroke, bl: stroke};
  } else {
    var defaultStroke = {t: 0, b: 0, l: 0, r: 0,
                         tl: 0, tr: 0, br: 0, bl: 0};
    for (var side in defaultStroke) {
      stroke[side] = stroke[side] || defaultStroke[side];
    }
  }

  if (fill) {
    ctx.beginPath();
    ctx.moveTo(x + radius.tl, y);
    ctx.lineTo(x + width - radius.tr, y);
  
    ctx.quadraticCurveTo(x + width, y, x + width, y + radius.tr);
    ctx.lineTo(x + width, y + height - radius.br);
    ctx.quadraticCurveTo(x + width, y + height, x + width - radius.br, y + height);
    ctx.lineTo(x + radius.bl, y + height);
    ctx.quadraticCurveTo(x, y + height, x, y + height - radius.bl);
    ctx.lineTo(x, y + radius.tl);
    ctx.quadraticCurveTo(x, y, x + radius.tl, y);
    ctx.closePath();
    ctx.fill();
  }
  ctx.beginPath();
  ctx.lineWidth = stroke['t'];
  ctx.moveTo(x + radius.tl, y);
  ctx.lineTo(x + width - radius.tr, y);
  if(stroke['t']) ctx.stroke();
  ctx.lineWidth = stroke['tr'];
  ctx.beginPath();
  ctx.moveTo(x + width - radius.tr, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius.tr);  
  if(stroke['tr']) ctx.stroke();
  ctx.lineWidth = stroke['r'];
  ctx.beginPath();
  ctx.moveTo(x + width, y + radius.tr);
  ctx.lineTo(x + width, y + height - radius.br);
  if(stroke['r']) ctx.stroke();
  ctx.lineWidth = stroke['br'];
  ctx.beginPath();
  ctx.moveTo(x + width, y + height - radius.br);
  ctx.quadraticCurveTo(x + width, y + height, x + width - radius.br, y + height);
  if(stroke['br']) ctx.stroke();
  ctx.lineWidth = stroke['b'];
  ctx.beginPath();
  ctx.moveTo(x + width - radius.br, y + height);
  ctx.lineTo(x + radius.bl, y + height);
  if(stroke['b']) ctx.stroke();
  ctx.beginPath();
  ctx.lineWidth = stroke['bl'];
  ctx.moveTo(x + radius.bl, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - radius.bl);
  if(stroke['bl']) ctx.stroke();
  ctx.beginPath();
  ctx.lineWidth = stroke['l'];
  ctx.moveTo(x, y + height - radius.bl);
  ctx.lineTo(x, y + radius.tl);
  if(stroke['l']) ctx.stroke();
  ctx.beginPath();
  ctx.lineWidth = stroke['tl'];
  ctx.moveTo(x, y + radius.tl);
  ctx.quadraticCurveTo(x, y, x + radius.tl, y);
  if(stroke['tl']) ctx.stroke();
  // ctx.closePath();
  // ctx.stroke();

}

class Rectangle {
  constructor ({x, y, width, height, fillStyle, borderRadius, fill, stroke}) {
    this.x = x;
    this._x = x;
    this.y = y;
    this._y = y;
    this._width = width;
    this.width = width;
    this.height = height;
    this._height = height;
    this.fillStyle = typeof fillStyle === 'undefined' ? 'rgb(200, 0, 0)' : fillStyle;
    this.borderRadius = borderRadius || 0;
    this.stroke = stroke || {};
    this.fill = typeof fill === 'undefined' ? true : fill;
    console.log(stroke, this.stroke)
  }
  start () {}
  update () {}
  draw (ctx, canvas) {
    const oldFillStyle = ctx.fillStyle;
    ctx.fillStyle = this.fillStyle;
    // ctx.fillRect(this.x - this._width / 2, this.y - this._height * 0.5, this._width, this._height);
    roundRect(ctx, this._x, this._y, this._width, this._height, this.borderRadius, this.fill, this.stroke);
    ctx.fillStyle = oldFillStyle;
  }
}