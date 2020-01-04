import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <section>
        <header>zi header</header>
        <main>main</main>
        <footer>zi footer</footer>
      </section>
    );
  }
}

const root = document.getElementById('root');
ReactDOM.render(<App />, root);
