canvas = document.querySelector('canvas');
c = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let mouse = {
    x: undefined,
    y: undefined
}

function shouldMouseReset(){
   return (mouse.x > 75 && mouse.x < 125) 
           && (mouse.y > 75 && mouse.y < 125);
}


addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
})

// class Slug
function Slug(x,y,width,height){
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    
    this.update = function(){
        this.draw();
    }

    this.draw = function(){
        c.beginPath();
        c.fillStyle = 'pink'
        c.fillRect(this.x,this.y,this.width,this.height);
        c.fill();
        c.closePath();
    }
}

let mouseRect;
let mazeWall;

function init(){
    mouseRect = new Slug(100, 100, 50, 50);
    mazeWall = new Slug(428, 35, 1, 128);
}

function collisionHappened(wall){
 return mouseRect.x < wall.x + wall.width &&
        mouseRect.x + mouseRect.width > wall.x &&
        mouseRect.y < wall.y + wall.height &&
        mouseRect.y + mouseRect.height > wall.y 
}

let didMouseReset = true;

function animate(){
    requestAnimationFrame(animate);
    c.clearRect(0,0,innerWidth,innerHeight)
    mazeWall.update();
    mouseRect.x = mouse.x-20;
    mouseRect.y = mouse.y-20;
    if(collisionHappened(mazeWall)){
        init();
        didMouseReset = false;
    }
    mouseRect.update();
}


init();
animate();


// function animate(){
//     requestAnimationFrame(animate);
//     c.clearRect(0,0,canvas.width,canvas.height);
//     // maze1.update();
//     slug1.x = mouse.x;
//     slug1.y = mouse.y;
//     slug1.update();
// }

// init();
// animate();