let counter = 0;

let map = {}; // You could also use an array
const update = (ctx, canvas) => {
  const onEvent = function(e){
    e = e || event; // to deal with IE
    map[e.keyCode] = e.type == 'keydown';
    if(map['37']) {
      ctx.brownElefant.walking = true
      ctx.brownElefant.mirror(true)
    }

    if(map['39']) {
      ctx.brownElefant.walking = true
      ctx.brownElefant.mirror(false)
    }
    if(map['38']) {
      ctx.brownElefant.jump(ctx, canvas)
    }

    if(e.type === 'keyup' && (e.keyCode === 39 || e.keyCode === 37)){
      ctx.brownElefant.walking = false;
    }
  }
  if(!ctx.freeWalk && ctx.brownElefant.x - 50 <= canvas.width / 2) {
    ctx.brownElefant.walking = false;
    ctx.freeWalk = true
    document.addEventListener("keydown", onEvent);
    document.addEventListener("keyup", onEvent);
  } 
  if(ctx.grayElefant.x + 80 >= canvas.width / 2) {
    ctx.grayElefant.walking = false;
  } 
}