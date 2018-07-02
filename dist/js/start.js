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
    y: canvas.height * 0.8 - 80,
    color: 'lightgrey',
    walking: true
  });

  const brownElefant = new Elefant({
    x: 190,
    y: canvas.height * 0.8 - 80,
    color: '#b87e59',
    mirrored: true,
    walking: true
  });
  ctx.addObject(grass);
  ctx.addObject(floor);
  ctx.addObject(grayElefant);
  ctx.addObject(brownElefant);
}