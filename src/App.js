import React from 'react';
import Header from "./components/header/header.component";
import { Switch, Route} from 'react-router-dom';
import Home from "./pages/home/home.page";
import Courses from "./pages/courses/courses.page";
import Footer from "./components/footer/footer.component";

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
        <Footer />
    </div>
    )
  }
}

export default App;
