import React, { Component } from 'react';
import Konva from 'konva';
import { Stage, Layer, Rect } from 'react-konva';

class MyRect extends React.Component {
    constructor(props){
        super(props);
        this.state={
            x:'hi'
        }
    }

    render(){
        return(<Rect x={this.props.slugX} 
                     y={this.props.slugY} 
                     width={this.props.slugWidth} 
                     height={this.props.slugHeight} 
                     fill='red'
                     opacity={this.props.opacity}/>)
    }


}

export default MyRect