const mirroredRectangle = (mirrored, obj,args, posRotate = true) => {
  if(!mirrored) return new Rectangle(args);
  let rect = new Rectangle(args)
  const radius = {
    tl: 'tr',
    tr: 'tl',
    bl: 'br',
    br: 'bl'
  }
  const stroke = {
    l: 'r',
    r: 'l',
    b: 'b',
    t: 't',
    br: 'bl',
    bl: 'br',
    tl: 'tr',
    tr: 'tl',
  }
  if(args.borderRadius && typeof args.borderRadius !== 'number') {
    const originalRadius = {...args.borderRadius};
    
    Object.keys(radius).forEach(key =>{
      rect.borderRadius[key] = originalRadius[radius[key]]
    })
  }

  if(args.stroke && typeof args.stroke !== 'number') {
    const originalStroke = {...args.stroke};
    
    Object.keys(stroke).forEach(key =>{
      args.stroke[key] = originalStroke[stroke[key]]
    })
  }
  rect.x = obj.x/10 - args.x - args.width;

  return rect;
}