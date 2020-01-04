import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      age: '',
      dietaryRestrictions: {
        lactose: false,
        gluten: false,
        peanut: false,
        kosher: false,
        vegan: false
      }
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const { name, value, type, checked } = event.target;
    if (type === 'checkbox') {
      this.setState(oldState => ({
        ...oldState,
        dietaryRestrictions: {
          ...oldState.dietaryRestrictions,
          [name]: checked
        }
      }));
    } else {
      this.setState({ [name]: value });
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
      <div className='main-container'>
        <form className='person-form' onSubmit={this.handleSubmit}>
          <input
            name='firstName'
            value={this.state.firstName}
            onChange={this.handleInputChange}
            placeholder='First Name'
          />
          <input
            name='lastName'
            value={this.state.lastName}
            onChange={this.handleInputChange}
            placeholder='Last Name'
          />
          <input
            name='age'
            value={this.state.age}
            onChange={this.handleInputChange}
            placeholder='Age'
          />

          <label>Dietary restrictions</label>
          <label>
            <input
              type='checkbox'
              name='lactose'
              onChange={this.handleInputChange}
              checked={this.state.dietaryRestrictions.lactose}
            />
            Lactose
          </label>
          <label>
            <input
              type='checkbox'
              name='gluten'
              onChange={this.handleInputChange}
              checked={this.state.dietaryRestrictions.gluten}
            />
            Gluten
          </label>
          <label>
            <input
              type='checkbox'
              name='peanut'
              onChange={this.handleInputChange}
              checked={this.state.dietaryRestrictions.peanut}
            />
            Peanut
          </label>
          <label>
            <input
              type='checkbox'
              name='kosher'
              onChange={this.handleInputChange}
              checked={this.state.dietaryRestrictions.kosher}
            />
            Kosher
          </label>
          <label>
            <input
              type='checkbox'
              name='vegan'
              onChange={this.handleInputChange}
              checked={this.state.dietaryRestrictions.vegan}
            />
            Vegan
          </label>

          <button className='submit-button'>Submit</button>
        </form>

        <section className='overview-container'>
          <h2>Entered information:</h2>
          <p>Your name: {this.state.firstName ? this.state.firstName : '?'}</p>
          <p>Your age: {this.state.age ? this.state.age : '?'}</p>
          <p>
            Your dietary restrictions:{' '}
            {Object.keys(this.state.dietaryRestrictions)
              .filter(key => this.state.dietaryRestrictions[key])
              .join(', ')}
          </p>
        </section>
      </div>
    );
  }
}

const root = document.getElementById('root');
ReactDOM.render(<App />, root);
