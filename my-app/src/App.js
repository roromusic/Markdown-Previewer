import React, { Component } from 'react';
import './App.css';


import TextInput from './components/textinput'
import Previewer from './components/previewer'



class App extends Component {
  render() {
    return (
      <div className="App">
        <TextInput />
        <Previewer />
      </div>
    );
  }
}

export default App;
