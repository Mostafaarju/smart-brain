import React, { Component } from 'react';
import './App.css';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Logo from './components/Logo/Logo';
import Navigation from './components/Navigation/Navigation';
import Rank from './components/Rank/Rank';

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      input: '',
    };
  }

  onInputChange = event => {
    console.log(event);
  };

  render() {
    return (
      <div className='App'>
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm />
      </div>
    );
  }
}

export default App;
