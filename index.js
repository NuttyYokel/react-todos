import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
      character: {}
    };
  }

  componentDidMount() {
    this.setState(oldState => ({ ...oldState, isLoading: true }));
    fetch('https://swapi.co/api/people/1')
      .then(response => response.json())
      .then(data => {
        this.setState({
          character: data,
          isLoading: false
        });
      });
  }

  render() {
    return (
      <div>
        {this.state.isLoading ? 'Loading...' : this.state.character.name}
      </div>
    );
  }
}

const root = document.getElementById('root');
ReactDOM.render(<App />, root);
