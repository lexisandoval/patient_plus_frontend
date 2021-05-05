import React from 'react'
import './App.css';
import Login from './components/Login'

class App extends React.Component {

  componentDidMount() {
    fetch("http://localhost:3002/api/v1/users/1")
    .then(response => response.json())
    .then(console.log)
  }

  render() {
    return (
      <Login/>
    );
  }
}

export default App;
