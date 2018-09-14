import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard'
import Auth from './Components/Auth/Auth'
import Form from './Components/Form/Form'
import Post from './Components/Post/Post'
import Nav from './Components/Nav/Nav'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav/>
        <Dashboard/>
        <Form/>
        <Auth/>
        <Post/>
      </div>
    );
  }
}

export default App;
