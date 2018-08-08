const start = (ctx, canvas) => {
  ctx.grass = new Rectangle({
    x: 0,
    y: canvas.height * 0.75,
    width: canvas.width,
    height: canvas.height * 0.05,
    fillStyle: '#b3d02a'
  });
  ctx.floor = new Rectangle({
    x: 0,
    y: canvas.height * 0.8,
    width: canvas.width,
    height: canvas.height * 0.2,
    fillStyle: '#8f5833'
  });

  ctx.brownElefant = new Giraffe({
    x: -50,
    y: canvas.height * 0.8 - 80,
    color: '#b87e59',
    walking: true,
    walkingSpeed: 50
  });

  ctx.grayElefant = new Elefant({
    x: canvas.width,
    y: canvas.height * 0.8 - 80,
    color: 'lightgrey',
    mirrored: true,
    walking: true,
    walkingSpeed: 50
  });
  ctx.giraffe = new Giraffe({
    x: 100,
    y: canvas.height * 0.8 - 80,
    color: 'lightgrey',
    walking: false,
    walkingSpeed: 50
  })
  ctx.addObject(ctx.grass);
  ctx.addObject(ctx.floor);
  ctx.addObject(ctx.grayElefant);
  ctx.addObject(ctx.brownElefant);
  ctx.addObject(ctx.giraffe);
  ctx.gravityPoint = canvas.height * 0.8 - 80;

  
}