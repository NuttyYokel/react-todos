import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      description: '',
      isFriendly: true,
      gender: '',
      color: 'red'
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type='text'
          placeholder='First Name'
          name='firstName'
          onChange={this.handleChange}
          value={this.state.firstName}
        />
        <input
          type='text'
          placeholder='First Name'
          name='lastName'
          onChange={this.handleChange}
          value={this.state.lastName}
        />
        <br />
        <textarea
          placeholder='Short description'
          name='description'
          onChange={this.handleChange}
          value={this.state.description}
        />
        <br />
        <label>
          <input
            type='checkbox'
            name='isFriendly'
            checked={this.state.isFriendly}
            onChange={this.handleChange}
          />
          Is friendly
        </label>
        <br />
        <label>
          <input
            type='radio'
            name='gender'
            value='female'
            checked={this.state.gender === 'female'}
            onChange={this.handleChange}
          />
          Female
        </label>

        <label>
          <input
            type='radio'
            name='gender'
            value='male'
            checked={this.state.gender === 'male'}
            onChange={this.handleChange}
          />
          Male
        </label>
        <br />
        <label>Your favourite color</label>
        <select
          value={this.state.color}
          onChange={this.handleChange}
          name='color'
        >
          <option value='red'>Red</option>
          <option value='green'>Green</option>
          <option value='blue'>Blue</option>
          <option value='yellow'>Yellow</option>
        </select>

        <h3>
          You are {this.state.isFriendly ? 'a' : 'not a'} friendly
          {this.state.gender ? ' ' + this.state.gender : ' person'}
          {this.state.firstName ? ' called ' + this.state.firstName : ''}, who
          likes the color {this.state.color}.
        </h3>

        <button>Submit</button>
      </form>
    );
  }

  handleChange(event) {
    let { value, name, type, checked } = event.target;
    if (type === 'checkbox') {
      value = checked;
    }
    this.setState(oldState => ({
      ...oldState,
      [name]: value
    }));
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('submitting', this.state);
  }
}

const root = document.getElementById('root');
ReactDOM.render(<App />, root);
