import React from 'react'
import styled from 'styled-components';

const Input = styled.input`
  border: 1px;
  border-radius: 20px;
  font-size: 16px;
  padding: 10px;
  opacity: 0.7;
  width: 80px;
  background-color: DodgerBlue;
  transition: all .5s;

  :focus { outline: none;
          width: 150px; }
`

class Form extends React.Component {

  state = {
    username: ''
  }

  handleChange = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.persistUser(this.state.username)
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <label>Gamer Tag</label>
        <Input onChange={this.handleChange} type='text' value={this.state.username} />
      </form>
    )
  }

}

export default Form
