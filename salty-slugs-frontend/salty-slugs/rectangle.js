var rect = new Konva.Rect({
    x: 300,
    y: 300,
    width: 40,
    height: 20,
    fill: 'green',
    stroke: 'black',
    strokeWidth: 4
  });
 
  rect.draggable('true')

 rect.on('mouseout',function(){
     console.log('Mouse left rectangle!')
 })
 
 rect.on('mouseenter',function(){
     console.log('Mouse entered rectangle!')
 })

 rect.on('mouseover',function(){
     console.log('working')
 })