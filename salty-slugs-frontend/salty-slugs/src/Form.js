import React from 'react'
import styled from 'styled-components';

const StyledForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`

const Input = styled.input`
    width: 280px;
    height: 50px;
    background: rgba(57, 63, 84, 0.8);
    border: none;
    font-size: 12pt;
    color: #7881A1
    padding-left: 25px;
    margin-bottom: 40px;
    transition: all .5s;

    border-radius: 4px;
    :focus {
      width: 300px;
      outline: none;
      color: #BFD2FF;
    }

`

class Form extends React.Component {

  state = {
    username: 'Choose Gamer Tag and Press Enter'
  }

  handleResetInput = () => {
    this.setState({
      username: ''
    })
  }

  handleChange = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.persistUser(this.state.username)
    this.handleResetInput();
    this.props.removeForm();
  }

  render(){
    return(
      <StyledForm onSubmit={this.handleSubmit}>
        <Input placeholder="Choose Gamer Tag and Press Enter" onClick={this.handleResetInput} onChange={this.handleChange} type='text' value={this.state.username} />
      </ StyledForm>
    )
  }

}

export default Form
