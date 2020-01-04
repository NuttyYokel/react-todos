import React from 'react';
import Header from './Header';
import MemeGenerator from './MemeGenerator';

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <section className='app-container'>
        <Header />
        <MemeGenerator />
      </section>
    );
  }
}

export default App;
