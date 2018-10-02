import React, { Component } from 'react';
import './App.css';
import Form from './Form';
import styled from 'styled-components';
import {Stage,Layer,Rect} from 'react-konva';
import {mazeWallDimensions} from './data.js';
import MazeImage from './MazeImage.js'

class App extends Component {

  state = {
    active: true,
    slugX:870,
    slugY:90
  }

  removeForm = () => {
    this.setState({
      active: false
    })
  }

  persistUser = (username) => {
    fetch('http://localhost:3000/api/v1/users', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: username
      })
    }).then(function (response) { console.log(response); })
  }

  renderMazeWalls = () => {
    return mazeWallDimensions.map((wall)=>{
      return <Rect x={wall.x}
                   y={wall.y}
                   width={wall.width}
                   height={wall.height}
                   fill={'pink'}/>
    })
  }


  renderSlug = () => {
    return <Rect x={this.state.slugX}
                 y={this.state.slugY}
                 width={ 50}
                 height={ 50}
                 fill='pink'
                 stroke='black'
                 strokeWidth={1} />
  }

  // renderHitLayer = () => {
  //   return <Rect x={0}
  //                y={0}
  //                width={window.innerWidth}
  //                height={window.innerHeight}/>
  // }

  newSlugXY = (e) => {
    this.setState({
      slugX:e.clientX-25,
      slugY:e.clientY-25
    })
  }

  render() {
    return (this.state.active ? 
      < Form persistUser={this.persistUser} removeForm={this.removeForm} /> 
      : 
      <Stage width={window.innerWidth} 
             height={window.innerHeight}>
        <Layer onMouseMove={this.newSlugXY}>
          <MazeImage />
          {this.renderMazeWalls()}
          {this.renderSlug()}
        </Layer>
      </Stage>
      )
    }

    componentDidUpdate(){
      document.querySelector('canvas').addEventListener('mousemove',this.newSlugXY)}
  


}

export default App;
