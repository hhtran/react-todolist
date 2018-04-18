import React, { Component } from 'react';
import logo from './logo.svg';
import './TodoList.css';
import TodoItem from "./TodoItem";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: ["Meet with Melissa", "Meet with John", "Meet with Kateline"],
      fieldBuffer: "",
      clearedItems: []
    };
  }

  onSubmit = (event) => {
    event.preventDefault();
    const { fieldBuffer, items, clearedItems } = this.state;

    if (fieldBuffer === "") {
      return;
    }

    this.setState({
      items: [...items, fieldBuffer],
      clearedItems: [...clearedItems],
      fieldBuffer: ""
    })
  }

  onCheck = (index, checked) => {
    const { clearedItems, items } = this.state;

    if (checked) {
      const itemValue = this.state.items[index];
      this.setState({
        items: [...items.slice(0, index), ...items.slice(index + 1)],
        clearedItems: [...clearedItems, itemValue]
      });
    } else {
      const itemValue = this.state.clearedItems[index];
      this.setState({
        items: [...items, itemValue],
        clearedItems: [...clearedItems.slice(0, index), ...clearedItems.slice(index + 1)]
      });
    }
  }

  render() {
    return (
      <div className="TodoList">
        <div style={{ minWidth: "50%" }}>
          <h1>To-do List</h1>
          <div className="list">
            {
              this.state.items.map((item, index) => {
                return <TodoItem key={item} onChange={this.onCheck} identifier={index} value={item} />
              })
            }
            {
              this.state.clearedItems.map((item, index) => {
                return <TodoItem isChecked key={item} onChange={this.onCheck} identifier={index} value={item} />
              })
            }
            <form onSubmit={this.onSubmit} style={{ width: "100%" }}>
              <input
                id="new-item-field"
                value={this.state.fieldBuffer}
                onChange={(event) => this.setState({ fieldBuffer: event.target.value })}
                placeholder="Meet with Arthur" />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default TodoList;
