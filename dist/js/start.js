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
  ctx.gravityPoint = canvas.height * 0.8 - 80;

  let map = {}; // You could also use an array
  const onEvent = function(e){
    e = e || event; // to deal with IE
    map[e.keyCode] = e.type == 'keydown';
    if(map['37']) {
      brownElefant.walking = true
      brownElefant.mirror(true)
    }

    if(map['39']) {
      brownElefant.walking = true
      brownElefant.mirror(false)
    }
    if(map['38']) {
      brownElefant.jump(ctx, canvas)
    }

    if(e.type === 'keyup' && (e.keyCode === 39 || e.keyCode === 37)){
      brownElefant.walking = false;
    }
  }
  document.addEventListener("keydown", onEvent);
  document.addEventListener("keyup", onEvent);
}