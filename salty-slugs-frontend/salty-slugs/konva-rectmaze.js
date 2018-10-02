// initialize stage & layer //

let width = window.innerWidth;
let height = window.innerHeight;

let stage = new Konva.Stage({
    container:'container',
    width:width,
    height:height
});

let layer = new Konva.Layer();
stage.add(layer);

let imageObj2 = new Image();

imageObj2.onload = function() {
  lettuce = new Konva.Image({
    x: 420,
    y: 549,
    image: imageObj2,
    width: 150,
    height: 110
  });
  layer.add(lettuce);
  stage.add(layer);
};
imageObj2.src = '../salty-slugs/public/RomaineLettuce.png';

let slugImage

let imageObj = new Image();

imageObj.onload = function() {
  slugImage = new Konva.Image({
    x: 780,
    y: 40,
    image: imageObj,
    width: 200,
    height: 150
  });
  layer.add(slugImage);
  stage.add(layer);
};
imageObj.src = '../salty-slugs/public/slug.png';


let box = new Konva.Rect({
    x:870,
    y:90,
    width:60,
    height:60,
    fill:'white',
    stroke:'white',
    strokeWidth:1,
    // draggable:true
});

layer.add(box);

let mazeWalls = [];

mazeWalls.push(new Konva.Rect({ x:428, y:35, width:1, height:128, fill: 'pink', stroke: 'pink', strokeWidth: 1, draggable: false }))
mazeWalls.push(new Konva.Rect({ x:428, y:163, width:256, height:1, fill: 'pink', stroke: 'pink', strokeWidth: 1, draggable: false }))
mazeWalls.push(new Konva.Rect({ x:684, y:163, width:1, height:128, fill: 'pink', stroke: 'pink', strokeWidth: 1, draggable: false }))
mazeWalls.push(new Konva.Rect({ x:812, y:163, width:128, height:1, fill: 'pink', stroke: 'pink', strokeWidth: 1, draggable: false }))
mazeWalls.push(new Konva.Rect({ x:812, y:163, width:1, height:256, fill: 'pink', stroke: 'pink', strokeWidth: 1, draggable: false }))
mazeWalls.push(new Konva.Rect({ x:428, y:419, width:384, height:1, fill: 'pink', stroke: 'pink', strokeWidth: 1, draggable: false }))
mazeWalls.push(new Konva.Rect({ x:428, y:291, width:1, height:128, fill: 'pink', stroke: 'pink', strokeWidth: 1, draggable: false }))
mazeWalls.push(new Konva.Rect({ x:428, y:291, width:128, height:1, fill: 'pink', stroke: 'pink', strokeWidth: 1, draggable: false }))
mazeWalls.push(new Konva.Rect({ x:428, y:547, width:1, height:128, fill: 'pink', stroke: 'pink', strokeWidth: 1, draggable: false }))
mazeWalls.push(new Konva.Rect({ x:428, y:547, width:256, height:1, fill: 'pink', stroke: 'pink', strokeWidth: 1, draggable: false }))
mazeWalls.push(new Konva.Rect({ x:812, y:547, width:128, height:1, fill: 'pink', stroke: 'pink', strokeWidth: 1, draggable: false }))
mazeWalls.push(new Konva.Rect({ x:300, y:35, width:640, height:1, fill: 'pink', stroke: 'pink', strokeWidth: 1, draggable: false }))
mazeWalls.push(new Konva.Rect({ x:300, y:35, width:1, height:640, fill: 'pink', stroke: 'pink', strokeWidth: 1, draggable: false }))
mazeWalls.push(new Konva.Rect({ x:940, y:35, width:1, height:640, fill: 'pink', stroke: 'pink', strokeWidth: 1, draggable: false }))
mazeWalls.push(new Konva.Rect({ x:300, y:675, width:640, height:1, fill: 'pink', stroke: 'pink', strokeWidth: 1, draggable: false }))

mazeWalls.forEach((rect) => {
    layer.add(rect);
})

const finishWall = new Konva.Rect({ x:440 , y:549 , width:1, height:128, fill: 'white', stroke: 'white', strokeWidth: 1, draggable: false });

layer.add(finishWall)

// define event logic //

let mouseShouldMove = false;

let mouse = {
    x: undefined,
    y: undefined
}

function mouseShouldReset(){
    if ((mouse.x > 870 && mouse.x < 920) && (mouse.y > 90 && mouse.y < 140)) {
        mouseShouldMove = true
    } 
}

stage.on('mousemove',function(e){
        mouse.x = e.evt.clientX;
        mouse.y = e.evt.clientY;
})

function updateSlug(box, slugImage){
    box.setX(mouse.x-30);
    box.setY(mouse.y-30);
    slugImage.setX(mouse.x-100);
    slugImage.setY(mouse.y-80);
    layer.draw();
}

function returnSlugToStart(box, slugImage){
    mouseShouldMove = false;
    box.setX(870);
    box.setY(90);
    slugImage.setX(780);
    slugImage.setY(40);
    layer.draw();
}

function collisionHappened(mazeWalls) {
    return mazeWalls.some(wall =>
        box.attrs.x < wall.attrs.x + wall.attrs.width &&
        box.attrs.x + box.attrs.width > wall.attrs.x &&
        box.attrs.y < wall.attrs.y + wall.attrs.height &&
        box.attrs.y + box.attrs.height > wall.attrs.y)
}

function finishTheGame() {
  return box.attrs.x < finishWall.attrs.x + finishWall.attrs.width &&
    box.attrs.x + box.attrs.width > finishWall.attrs.x &&
    box.attrs.y < finishWall.attrs.y + finishWall.attrs.height &&
    box.attrs.y + box.attrs.height > finishWall.attrs.y
}

let slugOnCursor = new Konva.Animation(function (frame) {
    mouseShouldReset();
    if(mouseShouldMove){
        if(collisionHappened(mazeWalls)){
            returnSlugToStart(box, slugImage);
            return;
        }
        if(finishTheGame()){
          mouseShouldMove = false;
        }
        updateSlug(box, slugImage);
    }
}, layer);


layer.draw();
slugOnCursor.start();

// add shape-objects onto the layer & add layer onto the stage //