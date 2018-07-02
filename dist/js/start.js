const start = (ctx, canvas) => {
  const grass = new Rectangle({
    x: 0,
    y: canvas.height * 0.75,
    width: canvas.width,
    height: canvas.height * 0.05,
    fillStyle: '#b3d02a'
  });
  const floor = new Rectangle({
    x: 0,
    y: canvas.height * 0.8,
    width: canvas.width,
    height: canvas.height * 0.2,
    fillStyle: '#8f5833'
  });

  const grayElefant = new Elefant({
    x: 90,
    y: canvas.height * 0.5,
    color: '#c5e9fb'
  });
  
  ctx.addObject(grayElefant);
  ctx.addObject(grass);
  ctx.addObject(floor);
}