import React, { Component } from 'react';
import Main from './components/Main'
import './App.css'

class App extends Component {
  render() {
    return (
       <>
        <h1 className = "heading_style"> 🎰 Welcome to
       <span style = {{fontWeight:'bold'} ,{backgroundColor:"#d2dbdd"}}> Slot machine game</span> 🎰 </h1>
       <Main />
       </> 
    )
  }
}

export default App;
