'use strict';

(() => {
  const canvas = document.getElementById('canvas');
  
  if(canvas.getContext) {
    const ctx = canvas.getContext('2d');
    ctx.objects = [];
    ctx.addObject = (object) => ctx.objects.push(object)

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      draw(); 
    }

    window.addEventListener('resize', resizeCanvas, false);

    const draw = () => {
      ctx.objects.forEach((object) => {
        object.update(ctx, canvas);
      })
      update(ctx, canvas);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.objects.forEach((object) => {
        object.draw(ctx, canvas);
      })

      ctx.counter = (ctx.counter || 0) + 1
      requestAnimationFrame(draw);
    }

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    start(ctx, canvas);

    ctx.objects.forEach((object) => {
      object.start(ctx, canvas);
    })
    resizeCanvas();
  }
})()