import React, { Component } from 'react';

class TodoItem extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <section className={this.getClass(this.props.todo.checked)}>
        <input
          type='checkbox'
          checked={this.props.todo.checked}
          onChange={() => this.props.updateChecked(this.props.todo.id)}
        />
        <span className='todo-data'>{this.props.todo.data}</span>
        <span
          className='remove-element'
          onClick={() => this.props.remove(this.props.todo.id)}
        >
          +
        </span>
      </section>
    );
  }

  getClass(checked) {
    return checked ? 'todo-item' : 'todo-item not-done';
  }
}

export default TodoItem;
