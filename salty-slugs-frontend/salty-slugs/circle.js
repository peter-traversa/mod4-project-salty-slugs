var circle = new Konva.Circle({
    x: 100,
    y: 100,
    radius: 10,
    fill: 'green',
    stroke: 'black',
    strokeWidth: 2
    });
    
    circle.on('xChange', function() {
        console.log('position change');
    });
    
    
