import React from 'react';

class MemeGenerator extends React.Component {
  constructor() {
    super();
    this.state = {
      topText: '',
      bottomText: '',
      randomImage: 'http://i.imgflip.com/1bij.jpg',
      allMemeImgs: []
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.generate = this.generate.bind(this);
  }

  componentDidMount() {
    this.loadImages();
  }

  loadImages() {
    fetch('https://api.imgflip.com/get_memes')
      .then(response => response.json())
      .then(response => {
        this.setState({ allMemeImgs: response.data.memes });
      });
  }

  handleInputChange(event) {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  }

  generate(event) {
    event.preventDefault();
    const { allMemeImgs } = this.state;
    const url = allMemeImgs[Math.floor(Math.random() * allMemeImgs.length)].url;
    this.setState({ randomImage: url });
  }

  render() {
    return (
      <main>
        <section className='image-container'>
          <img src={this.state.randomImage}></img>
          <span className='top text'>
            <h3>{this.state.topText}</h3>
          </span>
          <span className='bottom text'>
            <h3>{this.state.bottomText}</h3>
          </span>
        </section>
        <section className='input-container'>
          <form className='meme-form' onSubmit={this.generate}>
            <input
              placeholder='Top Text'
              name='topText'
              value={this.state.topText}
              onChange={this.handleInputChange}
            ></input>
            <input
              placeholder='Bottom Text'
              name='bottomText'
              value={this.state.bottomText}
              onChange={this.handleInputChange}
            ></input>
            <button>Generate</button>
          </form>
        </section>
      </main>
    );
  }
}

export default MemeGenerator;
