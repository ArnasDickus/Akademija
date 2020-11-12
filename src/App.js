import React from 'react';
import Header from "./components/header/header.component";
import { Switch, Route } from 'react-router-dom';
import Home from "./pages/home/home.page";
import Courses from "./pages/courses/courses.page";
import Footer from "./components/footer/footer.component";
import classes from './App.module.scss';
import LoginRegister from "./pages/login-register/login-register.page";

class App extends React.Component  {
  constructor(props) {
    super(props);

    this.state = {
      placeholder: null
    }
  }
  render() {
    return (
    <div className={classes.site}>
        <Header />
            <div className={classes.siteContent}>
                <Switch>
                    <Route path="/" exact={true} component={Home}  />
                    <Route path="/courses" component={Courses} />
                    <Route path="/login-register" component={LoginRegister}/>
                </Switch>
            </div>
        <Footer />
    </div>
    )
  }
}

export default App;
