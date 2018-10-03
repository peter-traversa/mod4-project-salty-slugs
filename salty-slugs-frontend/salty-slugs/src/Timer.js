import React from 'react'
import styled from 'styled-components';

const StyledTimer = styled.p`
  font-size: 50px;
  color: purple;
`

class Timer extends React.Component{

  state = {
    count: 30
  }

  tick = () => {
    if(this.state.count === 0) {
      clearInterval(this.countdown)
    } else {
      this.setState({
        count: this.state.count - 0.1
      })
    }
  }

  startTimer = () => {
    this.countdown = setInterval(this.tick, 100)
  }

  render(){
    return(
      <div>
        < StyledTimer onClick={this.startTimer}> {this.state.count} </StyledTimer >
      </div>
    )
  }

}

export default Timer
