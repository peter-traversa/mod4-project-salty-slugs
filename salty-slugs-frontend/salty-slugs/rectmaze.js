canvas = document.querySelector('canvas');
c = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let mazeWalls = [];

let mouseShouldMove = true;

let mouse = {
    x: undefined,
    y: undefined
};

function shouldMouseReset(){
   if  ((mouse.x > 870 && mouse.x < 920) && (mouse.y > 90 && mouse.y < 140)){
        mouseShouldMove = true;
    }
}

addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
    shouldMouseReset();
    animate();
});

// class Slug
function Slug(x,y,width,height){
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    
    this.update = function(){
        this.draw();
    };

    this.draw = function(){
        c.beginPath();
        c.fillStyle = 'pink';
        c.fillRect(this.x,this.y,this.width,this.height);
        c.fill();
        c.closePath();
    };
}

let mouseRect;

function init(){
    mouseRect = new Slug(870, 90, 50, 50);
    mazeWall = new Slug(428, 35, 1, 128);
    mazeWall2 = new Slug(428, 163, 256, 1);
    mazeWall3 = new Slug(684, 163, 1, 128);
    mazeWall4 = new Slug(812, 163, 128, 1);
    mazeWall5 = new Slug(812, 163, 1, 256);
    mazeWall6 = new Slug(428, 419, 384, 1);
    mazeWall7 = new Slug(428, 291, 1, 128);
    mazeWall8 = new Slug(428, 291, 128, 1);
    mazeWall9 = new Slug(428, 547, 1, 128);
    mazeWall10 = new Slug(428, 547, 256, 1);
    mazeWall11 = new Slug(812, 547, 128, 1);
    mazeWall12 = new Slug(300, 35, 640, 1);
    mazeWall13 = new Slug(300, 35, 1, 640);
    mazeWall14 = new Slug(940, 35, 1, 640);
    mazeWall15 = new Slug(300, 675, 640, 1);
    mazeWalls = [mazeWall, mazeWall2, mazeWall3, mazeWall4, mazeWall5, mazeWall6, mazeWall7, mazeWall8, mazeWall9, mazeWall10, mazeWall11, mazeWall12, mazeWall13, mazeWall14, mazeWall15];
}

function collisionHappened(mazeWalls){
    return mazeWalls.some(wall => 
        mouseRect.x < wall.x + wall.width &&
        mouseRect.x + mouseRect.width > wall.x &&
        mouseRect.y < wall.y + wall.height &&
        mouseRect.y + mouseRect.height > wall.y);
}

function animate(){
    if (mouseShouldMove === true){
        requestAnimationFrame(animate);
        c.clearRect(0,0,innerWidth,innerHeight);
        mazeWall.update();
        mazeWall2.update();
        mazeWall3.update();
        mazeWall4.update();
        mazeWall5.update();
        mazeWall6.update();
        mazeWall7.update();
        mazeWall8.update();
        mazeWall9.update();
        mazeWall10.update();
        mazeWall11.update();
        mazeWall12.update();
        mazeWall13.update();
        mazeWall14.update();
        mazeWall15.update();
        mouseRect.x = mouse.x-30;
        mouseRect.y = mouse.y-30;
        if(collisionHappened(mazeWalls)){
            init();
            mouseShouldMove = false;
        }
        mouseRect.update();
    }
}

init();
animate();