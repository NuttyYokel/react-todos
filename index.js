import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <section className='app-container'>
        <header>
          <nav>menu items</nav>
          <a className='login'>Log in</a>
        </header>
        <main>Some content</main>
        <footer>zi footer</footer>
      </section>
    );
  }
}

const root = document.getElementById('root');
ReactDOM.render(<App />, root);
