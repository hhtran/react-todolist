import React, { Component } from 'react';
import logo from './logo.svg';
import './TodoList.css';

class TodoList extends Component {
  render() {
    return (
      <div className="TodoList">
        <header className="TodoList-header">
          <img src={logo} className="TodoList-logo" alt="logo" />
          <h1 className="TodoList-title">Welcome to React</h1>
        </header>
        <p className="TodoList-intro">
          To get started, edit <code>src/TodoList.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default TodoList;
