let counter = 0;

const update = (ctx, canvas) => {
  if(ctx.brownElefant.x - 50 <= canvas.width / 2) {
    ctx.brownElefant.walking = false;
  } 
  if(ctx.grayElefant.x + 80 >= canvas.width / 2) {
    ctx.grayElefant.walking = false;
  } 
}