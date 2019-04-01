import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import TitleComponent from './MyTitleComponent'

import InputComponent from './MyInputComponent'


class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      title: 'Workshop Title Bar Chart'
    }

    this.onTitleChange = this.onTitleChange.bind(this)

  }

  onTitleChange(newTitle){
    console.log('update')
    this.setState({
      title: newTitle
    })
  }

  render() {

    return (
      <div className="App">
        <TitleComponent title={this.state.title} />
        <InputComponent title={this.state.title} onInputChange={this.onTitleChange} />
        

      </div>
    );
  }


 
}

export default App;






