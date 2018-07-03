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
    x: 180,
    y: canvas.height * 0.8 - 80,
    color: 'lightgrey',
    walking: false
  });

  const brownElefant = new Elefant({
    x: 190,
    y: canvas.height * 0.8 - 80,
    color: '#b87e59',
    mirrored: false,
    walking: false,
    walkingSpeed: 30
  });
  ctx.addObject(grass);
  ctx.addObject(floor);
  ctx.addObject(grayElefant);
  ctx.addObject(brownElefant);



  document.addEventListener("keydown", function (e) {
    switch(e.which) {
      case 37: // left
        brownElefant.walking = true
        brownElefant.mirror(true)
      break;

      case 38: // up
      break;

      case 39: // right

        brownElefant.walking = true
        brownElefant.mirror(false)
      break;

      case 40: // down
      break;

      default: return; // exit this handler for other keys
    }
  });

  document.addEventListener("keyup", function () {
    brownElefant.walking = false
  });
}