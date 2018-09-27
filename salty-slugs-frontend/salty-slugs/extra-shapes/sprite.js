// sprite
var imageObj = new Image();

imageObj.onload = function() {

    var blob = new Konva.Sprite({
    x: 50,
    y: 50,
    image: imageObj
    });

    var stage = new Konva.Stage({
        container: 'container',
        width: 500,
        height: 500
      });
    var layer = new Konva.Layer();

    return blob,stage,layer
    
}

layer.add(blob)
stage.add(layer)  
blob.start()  

imageObj.src = 'https://www.gameartguppy.com/wp-content/uploads/2014/07/mini_monster_slug.jpg'

// sprite
