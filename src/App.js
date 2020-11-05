import React from 'react';
import './App.css';

class App extends React.Component  {
  constructor(props) {
    super(props);

    this.state = {
      placeholder: null
    }
  }
  render() {
    return (
        <div>
          Hello world
        </div>
    )
  }
}

export default App;
