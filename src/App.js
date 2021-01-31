import './App.css';
import React, { Component } from "react";
import UserInfo from "./components/UserInfo"

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <UserInfo/>
      </div>
    )
  }
}

export default App;
