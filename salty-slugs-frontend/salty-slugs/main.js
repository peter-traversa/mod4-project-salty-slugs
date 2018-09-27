



 var width = window.innerWidth;
 var height = window.innerHeight;

 var stage = new Konva.Stage({
   container: 'container',
   width: width,
   height: height
 });

 var shapesGroup = new Konva.Group({
    x: 30,
    y: 70,
    draggable: true,
    dragBoundFunc: function(pos) {
        var newY = pos.y < 50 ? 50 : pos.y;
        console.log(event.clientX,event.clientY)
        return { 
            x: pos.x,
            y: newY
        };
    }
});

// var anim = new Konva.Animation(function(frame) {
//     var time = frame.time,
//         timeDiff = frame.timeDiff,
//         frameRate = frame.frameRate;

    
//   }, layer);

//   anim.start();

    /////////////////
    var angularSpeedCW = 90;
    var animCW = new Konva.Animation(function(frame) {
        var angleDiff = frame.timeDiff * angularSpeedCW / 500;
        rect.rotate(angleDiff);
    }, layer);
    var angularSpeedCCW = -90;
    var animCCW = new Konva.Animation(function(frame) { 
        var angleDiff = frame.timeDiff * angularSpeedCCW / 500; 
        rect.rotate(angleDiff);
    }, layer);
    function startAnimation(e){
      if (e.key === 'a'){
        animCCW.start()
      }
      if (e.key === 'd'){
        animCW.start()
      }
    }

    function stopAnimation(){
      animCCW.stop() && animCW.stop()
    }

         document.addEventListener('keydown', function(e) { startAnimation(e) }, false);
     document.addEventListener('keyup', function () { stopAnimation() }, false);





var layer = new Konva.Layer();

shapesGroup.add(circle)
shapesGroup.add(rect)

layer.add(shapesGroup)

layer.add(rect);

stage.add(layer);







