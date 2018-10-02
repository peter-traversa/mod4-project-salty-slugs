import React from 'react';
import Konva from 'konva';
import { render } from 'react-dom';
import { Stage, Layer, Image } from 'react-konva';

class MazeImage extends React.Component {
    state = {
        image: new window.Image()
    };
    componentDidMount() {
        this.state.image.src = '../public/slug.png';
        this.state.image.onload = () => {
            // calling set state here will do nothing
            // because properties of Konva.Image are not changed
            // so we need to update layer manually
            this.imageNode.getLayer().batchDraw();
        };
    }

    render() {
        return (
            <Image
                image={this.state.image}
                y={250}
                ref={node => {
                    this.imageNode = node;
                }}
            />
        );
    }
}

export default MazeImage;