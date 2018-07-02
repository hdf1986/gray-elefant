class Elefant {
  constructor ({x, y, color}) {
    this.x = x;
    this.y = y;
    this.color = color;
  }
  start (ctx, canvas) {
    this.body = new Rectangle({
      x: 0,
      y: 0,
      width: 52,
      height: 50,
      borderRadius: {tl: 25},
      fill: true,
      stroke: 3,
      fillStyle: this.color
    })
    this.head = [new Rectangle({
      x: 20,
      y: -10,
      width: 47,
      height: 43,
      borderRadius: 20,
      fill: true,
      stroke: 3,
      fillStyle: this.color
    }), new Rectangle({
      x: 52,
      y: 11,
      width: 15,
      height: 30,
      fill: true,
      stroke: {r: 3, br: 3, b: 3, bl: 3},
      borderRadius: {br: 3},
      fillStyle: this.color
    }), new Rectangle({
      x: 48,
      y: 26,
      width: 8,
      height: 15,
      fill: true,
      stroke: {l: 3, bl: 3, b: 3, tl: 3, t: 3, tr: 3},
      borderRadius: {bl: 3, tl: 3, tr: 3},
      fillStyle: this.color
    }),
    new Rectangle({
      x: 41,
      y: 5,
      width: 7,
      height: 8,
      borderRadius: {tl: 3, tr: 3},
      fill: true,
      stroke: 2,
      fillStyle: 'white'
    }), new Rectangle({
      x: 46,
      y: 11,
      width: 1,
      height: 1,
      fill: true,
      stroke: 3,
      borderRadius: 1,
      fillStyle: 'white'
    }), new Rectangle({
      x: 60,
      y: 15,
      width: 5,
      height: 1,
      fill: true,
      stroke: 1,
      borderRadius: 1,
      fillStyle: 'black'
    }), new Rectangle({
      x: 60,
      y: 20,
      width: 5,
      height: 1,
      fill: true,
      stroke: 1,
      borderRadius: 1,
      fillStyle: 'black'
    }), new Rectangle({
      x: 60,
      y: 25,
      width: 5,
      height: 1,
      fill: true,
      stroke: 1,
      borderRadius: 1,
      fillStyle: 'black'
    })
    ];
    this.objects = [
      this.body,
      ...this.head
    ]
  }
  update (ctx, canvas) {
    this.objects.forEach(object => {
      object._x = this.x + object.x
      object._y = this.y + object.y

    })
  }
  draw (ctx, canvas) {
    this.objects.forEach(object => object.draw(ctx, canvas))
  }
}