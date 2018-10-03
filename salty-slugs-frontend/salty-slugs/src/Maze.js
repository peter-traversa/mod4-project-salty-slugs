import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Konva from 'konva';
import { Stage, Layer, Rect } from 'react-konva';


class Maze extends React.Component {
    constructor(props){
        super(props);
        this.state={
            opacity:1
        }
    }
    renderMaze = () => {
        return this.props.mazeWallDimensions.map((wall)=>{
            return <Rect x={wall.x}
                         y={wall.y}
                         width={wall.width}
                         height={wall.height}
                         fill='pink'
                         opacity={this.props.opacity}
                         />
                            })
                        }
                    
    render(){
       
        return(
            this.renderMaze()
        );
    }
}

export default Maze