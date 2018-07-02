const start = (ctx, canvas) => {
  ctx.addObject(new Rectangle({
    x: canvas.width / 2,
    y: canvas.height / 2,
    width: 100,
    height: 100,
    fillStyle: 'rgb(400, 0, 0)'
  }))
}