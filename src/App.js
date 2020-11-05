import React from 'react';
import Header from "./components/header/header.component";
import { Switch, Route} from 'react-router-dom';
import Home from "./pages/home/home.page";
import Courses from "./pages/courses/courses.page";

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
                <Switch>
                    <Route path="/" exact={true} component={Home}  />
                    <Route path="/courses" component={Courses} />
                </Switch>
        </div>
    )
  }
}

export default App;
