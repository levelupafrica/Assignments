import React, { Component } from 'react';
import styled from "styled-components";


const Title = styled.div`
  padding: 50px;
  background-color: #66CCFF;
  font-family: sans-serif;


`;
const Name = styled.button`
padding: 10px;
font-size: 16px;
margin: 10px;
margin-right: 0px;
background-color: #0066FF;
color: #FFF;
border: 2px solid #0066FF;
`;

const ToStyle = styled.input`
padding: 10px;
font-size: 16px;
border: 2px solid #FFF;
width: 165px;
`;

class TodoList extends Component {
  render() {
    return (
      <Title className="todoListMain">
        <div className="header">
          <form>
            <ToStyle placeholder="Task" />
            <Name type="submit"> Add Task </Name>
          </form>
        </div>
      </Title>
    )
  }
}

export default TodoList