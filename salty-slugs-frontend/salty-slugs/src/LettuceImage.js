import React, { Component } from 'react';
import Konva from 'konva';
import { render } from 'react-dom';
import { Stage, Layer, Image } from 'react-konva';

class LettuceImage extends Component {
  state = {
    image: null
  };
  componentDidMount() {
    const image = new window.Image();
    image.src = '../salty-slugs/public/RomaineLettuce.png';
    image.onload = () => {
      this.setState({
        image: image
      });
    };
  }

  render() {
    return <Image image={this.state.image} />;
  }
}

export default LettuceImage