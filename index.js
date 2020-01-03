import React from 'react';
import ReactDOM from 'react-dom';
import Game from './Game';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false
    };
    this.toggleLogin = this.toggleLogin.bind(this);
  }

  render() {
    return (
      <section className='app-container'>
        <header>
          <nav>menu items</nav>
          <section className='login-container'>
            {this.state.isLoggedIn && <a className='username'>username</a>}
            <a className='login' onClick={this.toggleLogin}>
              {this.state.isLoggedIn ? 'Log out' : 'Log in'}
            </a>
          </section>
        </header>
        <main>
          {this.state.isLoggedIn ? (
            <Game />
          ) : (
            <h2 className='login-page'>Please log in</h2>
          )}
        </main>
        <footer>zi footer</footer>
      </section>
    );
  }

  toggleLogin() {
    this.setState(oldState => ({ isLoggedIn: !oldState.isLoggedIn }));
  }
}

const root = document.getElementById('root');
ReactDOM.render(<App />, root);
