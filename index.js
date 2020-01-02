import React from 'react';
import ReactDOM from 'react-dom';
import TodoItem from './TodoItem';

const todos = [
  {
    id: 1,
    checked: false,
    data: 'Do this'
  },
  {
    id: 2,
    checked: true,
    data: 'Do that'
  },
  {
    id: 3,
    checked: false,
    data: 'Do this and that'
  }
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: 'Marton',
      todos: todos
    };
    this.ids = this.state.todos.length + 1;
    this.addElement = this.addElement.bind(this);
    this.updateChecked = this.updateChecked.bind(this);
    this.removeElement = this.removeElement.bind(this);
  }

  render() {
    const components = this.state.todos.map(todo => (
      <TodoItem
        key={todo.id}
        todo={todo}
        updateChecked={this.updateChecked}
        remove={this.removeElement}
      />
    ));
    return (
      <div className='todo-list'>
        <header>
          <h1 className='title'>This is {this.state.name}'s todo list</h1>
          <button onClick={this.addElement} className='add-element'>
            Add element
          </button>
        </header>
        {components}
      </div>
    );
  }

  addElement() {
    this.setState(oldState => ({
      ...oldState,
      todos: [
        ...oldState.todos,
        {
          id: this.ids++,
          checked: Math.random() > 0.4,
          data: 'Do this'
        }
      ]
    }));
  }

  removeElement(id) {
    this.setState(oldState => ({
      ...oldState,
      todos: oldState.todos.filter(todo => todo.id !== id)
    }));
  }

  updateChecked(id) {
    this.setState(oldState => ({
      ...oldState,
      todos: oldState.todos.map(todo => ({
        ...todo,
        checked: todo.id === id ? !todo.checked : todo.checked
      }))
    }));
  }
}

const root = document.getElementById('root');
ReactDOM.render(<App />, root);
