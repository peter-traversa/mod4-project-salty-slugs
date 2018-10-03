import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Konva from 'konva';
import {Stage,Layer} from 'react-konva';
import Slug from './Slug'
import {mazeWallDimensions} from './data'
import Maze from './Maze'
import Form from './Form'
import Timer from './Timer'
import MazeImage from './MazeImage'
import {mazeWallDimensions} from './data.js'
import { Rect, Stage, Layer } from 'react-konva';



class App extends Component {
  state = {
    gameHasStarted:false,
    formActive:true,
    mouseShouldMove:false,
    slugX:90,
    slugY:80,
    slugWidth:20,
    slugHeight:20,
    mazeOpacity:.5,
    slugOpacity:.5,
    formOpacity:1,
    playerTime:0
  }

  // styles = {
  //   main: {
  //     margin: 0,
  //     padding: 0,
  //     display: 'flex',
  //     flexDirection: 'row'
  //   }
  // }

  removeForm = () => {
    this.setState({
      formActive: false
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

  startGame = () => {
    this.setState({
      gameHasStarted:true
    })
  }

  render() {
    
    return (
      
        
        <div>
          <Stage width={1000} height={1000} style={{position:'absolute'}}>
            <Layer>
              <Slug slugX={this.state.slugX} slugY={this.state.slugY}
                slugWidth={this.state.slugWidth} slugHeight={this.state.slugHeight} 
                opacity={this.state.slugOpacity}/>
              <Maze mazeWallDimensions={mazeWallDimensions} opacity={this.state.mazeOpacity}/>
            </Layer>
          </Stage>
          <Form style={{position:'absolute'}}vertical-align='top'persistUser={this.persistUser} removeForm={this.removeForm}
            opacity={this.state.opacity} startGame={this.startGame} />
          <Timer collisions={this.state.collisions}/>
        </div>
    )
  }


  collisionTest = () => {
   const collisionHappened =  mazeWallDimensions.some((wall) => {
    return (this.state.slugX < wall.x + wall.width &&
            this.state.slugX + this.state.slugWidth > wall.x &&
            this.state.slugY < wall.y + wall.height &&
            this.state.slugY + this.state.slugHeight > wall.y)})
      
    if(collisionHappened){
      this.setState({
        mouseShouldMove:false,
        collisions:this.state.collisions+1
      })

    }
}
  
  moveSlug = (e) => {
    this.setState({
      slugX: e.clientX-5,
      slugY: e.clientY
    })
  }

<<<<<<< HEAD
  render() {
    return (this.state.active ? 
      < Form persistUser={this.persistUser} removeForm={this.removeForm} /> 
      : 
      <div id='post-login-app' >
          <Stage width={window.innerWidth} 
             height={window.innerHeight}>
          <Layer onMouseMove={this.newSlugXY}>
            {this.renderMazeWalls()}
            {this.renderSlug()}
          </Layer>
        </Stage>
        <Timer />
      </div>
      )
    }
=======
  sendSlugHome = () => {
    this.setState({
      slugX: 650,
      slugY: 190
    })
  }
>>>>>>> gardiner

  mouseShouldReset = (e) => {
    if ((e.clientX > 630 && e.clientX < 700) && (e.clientY > 60 && e.clientY < 150)) {
      this.setState({mouseShouldMove:true});
    }
  }
  
  componentDidMount(){
    const canvas = document.querySelector('.konvajs-content')

    canvas.addEventListener('mousemove', (e) => {
      this.mouseShouldReset(e);
      this.collisionTest();
      if(this.state.gameHasStarted && this.state.mouseShouldMove){
        this.moveSlug(e);
      } else {
        this.sendSlugHome(e);
      }

      if(this.state.gameHasStarted && this.state.mouseShouldMove){
        if ((e.clientX > 630 && e.clientX < 700) && (e.clientY > 660 && e.clientY < 750)) {
          console.log('you won!')
        }
      }
      
    })



    

  } // end of componentDidMount function

}

export default App;
