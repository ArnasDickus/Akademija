import React from 'react';
import Header from "./components/header/header.component";


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
          <Header />
          Hello world
        </div>
    )
  }
}

export default App;
