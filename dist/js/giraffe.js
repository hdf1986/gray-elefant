
class Giraffe {
  constructor ({x, y, color, mirrored, walking, walkingSpeed}) {
    this.x = x;
    this.y = y;
    this.mirrored = mirrored;
    this.color = color;
    this.walking = walking;
    this.step = 0;
    this.walkingSpeed = walkingSpeed || 30;
    this._walkingSpeed = 0;
    this.verticalAcceleration = 0;
    this.verticalSpeed = 0;
    if(!this.walking) this._walkingSpeed = 0;
  }
  start (ctx, canvas) {
    this.createRects(ctx, canvas);
  }
  mirror(bool) {
    const oldMirrored = this.mirrored;
    this.mirrored = bool;
    if(oldMirrored === bool) return;
    this.createRects();
  }
  createRects (ctx, canvas) {
    this.body = mirroredRectangle(
      this.mirrored,
      this,
    {
      x: 0,
      y: 0,
      width: 52,
      height: 50,
      borderRadius: {tl: 25},
      fill: true,
      stroke: 3,
      fillStyle: this.color
    }, false)
    this.head = [mirroredRectangle(
      this.mirrored,
      this,
    {
      x: 35,
      y: -70,
      width: 47,
      height: 43,
      borderRadius: 15,
      fill: true,
      stroke: 3,
      fillStyle: this.color
    }),
    ];
    this.rearRightLeg = mirroredRectangle(
      this.mirrored,
      this,
    {
      x: 0,
      y: 47.8,
      width: 13,
      height: 10,
      fill: true,
      stroke: {r: 3, br: 3, b: 3, bl: 3, l: 3},
      borderRadius: {br: 3, bl: 3},
      fillStyle: this.color
    })
    this.rearLeftLeg = mirroredRectangle(
      this.mirrored,
      this,
    {
      x: 8,
      y: 47.8,
      width: 13,
      height: 10,
      fill: true,
      stroke: {r: 3, br: 3, b: 3, bl: 3, l: 3},
      borderRadius: {br: 3, bl: 3},
      fillStyle: this.color
    })
    this.frontRightLeg = mirroredRectangle(
      this.mirrored,
      this,
    {
      x: 29,
      y: 47.8,
      width: 13,
      height: 10,
      fill: true,
      stroke: {r: 3, br: 3, b: 3, bl: 3, l: 3},
      borderRadius: {br: 3, bl: 3},
      fillStyle: this.color
    })
    this.frontLeftLeg = mirroredRectangle(
      this.mirrored,
      this,
    {
      x: 34,
      y: 47.8,
      width: 13,
      height: 10,
      fill: true,
      stroke: {r: 3, br: 3, b: 3, bl: 3, l: 3},
      borderRadius: {br: 3, bl: 3},
      fillStyle: this.color
    })
    this.neck = mirroredRectangle(
      this.mirrored,
      this,
    {
      x: 37,
      y: -38,
      width: 15,
      height: 40,
      fill: true,
      stroke: {r: 3, l: 3, t: 3, tl: 3, tr: 3, bl: 3, br: 3},
      fillStyle: this.color
    })
    this.objects = [
      this.rearLeftLeg,
      this.frontLeftLeg,
      this.body,
      this.neck,
      ...this.head,
      this.rearRightLeg,
      this.frontRightLeg,
    ]
  }
  jump (ctx, canvas) {
    if(ctx.gravityPoint !== this.y) return;
    if(!document.getElementById('trunk').playing) document.getElementById('trunk').play();
    this.verticalAcceleration = 1;
    this.verticalSpeed = 1;
    setTimeout(() => {
      this.verticalAcceleration = 0
    }, 300);
  }
  update (ctx, canvas) {
    this.step += this._walkingSpeed;
    this.y = Math.min(ctx.gravityPoint, this.y - this.verticalSpeed);
    if(ctx.gravityPoint != this.y) this.verticalSpeed = this.verticalSpeed - 0.51 + this.verticalAcceleration;
    if(this.walking === true && this._walkingSpeed !== this.walkingSpeed) {
      this._walkingSpeed = Math.min(this.walkingSpeed, this._walkingSpeed +
        Math.sqrt(this.walkingSpeed / 10));
    } else {
      this._walkingSpeed = Math.max(0, this._walkingSpeed -
        Math.sqrt(this._walkingSpeed / 10));
    }
    this.objects.forEach(object => {
      object._x = this.x + object.x
      object._y = this.y + object.y
    })

    const sign = this.mirrored ? 1 : -1;
    const mov = 0.01;

    let rightRandom = this.walking ? Math.max(1.2 * Math.random(), 1) : 1;
    let leftRandom = this.walking ? Math.max(1.2 * Math.random(), 1) : 1;
    this.rearLeftLeg._x = this.x + this.rearLeftLeg.x + Math.cos(this.step*mov)/5 * leftRandom * sign * -10;
    this.rearLeftLeg._height = this.rearLeftLeg.height + Math.sin(this.step*mov)/5 * leftRandom * 10;

    this.rearRightLeg._x = this.x + this.rearRightLeg.x - Math.sin(this.step*mov)/5 * rightRandom * 10 * sign - 2*sign;
    this.rearRightLeg._height = this.rearRightLeg.height + Math.cos(this.step*mov)/5 * rightRandom * -10;

    this.frontLeftLeg._x = this.x + this.frontLeftLeg.x + Math.cos(this.step*mov)/5 * leftRandom * sign * -10;
    this.frontLeftLeg._height = this.frontLeftLeg.height + Math.sin(this.step*mov)/5 * leftRandom *10;

    this.frontRightLeg._x = this.x + this.frontRightLeg.x - Math.sin(this.step*mov)/5 * rightRandom *sign * 10 + 5 -2*sign;
    this.frontRightLeg._height = this.frontRightLeg.height + Math.cos(this.step*mov)/5 * rightRandom * -10;

    if(!this.walking && this._walkingSpeed == 0) return;
    this.x -= this._walkingSpeed*mov*5 *sign;
  }
  draw (ctx, canvas) {
    this.objects.forEach(object => object.draw(ctx, canvas))
  }
}