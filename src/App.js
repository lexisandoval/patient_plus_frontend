import logo from './logo.svg';
import React from 'react'
import './App.css';

class App extends React.Component {

  componentDidMount() {
    fetch("http://localhost:3002/api/v1/users/1")
    .then(response => response.json())
    .then(console.log)
  }

  render() {
    return (
      <div>
        <p>yuh</p>
      </div>
    );
  }
}

export default App;
