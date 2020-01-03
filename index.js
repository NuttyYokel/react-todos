import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  render() {
    return (
      <form>
        <input
          type='text'
          placeholder='First Name'
          name='firstName'
          onChange={this.handleChange}
          value={this.state.firstName}
        ></input>
        <input
          type='text'
          placeholder='First Name'
          name='lastName'
          onChange={this.handleChange}
          value={this.state.lastName}
        ></input>
      </form>
    );
  }

  handleChange(event) {
    const value = event.target.value;
    const name = event.target.name;
    this.setState(oldState => ({
      ...oldState,
      [name]: value
    }));
  }
}

const root = document.getElementById('root');
ReactDOM.render(<App />, root);
