import React from 'react';
import Header from "./components/header/header.component";
import { Switch, Route } from 'react-router-dom';
import Home from "./pages/home/home.page";
import Courses from "./pages/courses/courses.page";
import Footer from "./components/footer/footer.component";
import classes from './App.module.scss';
import LoginRegister from "./pages/login-register/login-register.page";
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "./redux/user/user.selector";
import { setCurrentUser } from "./redux/user/user.actions";
import { connect } from 'react-redux';

class App extends React.Component  {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null
    }
  }
  unsubscribeFromAuth = undefined;

    componentDidMount() {
        const { setCurrentUser } = this.props;

        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
            if (userAuth) {
                const userRef = await createUserProfileDocument(userAuth);

                userRef.onSnapshot(snapShot => {
                    this.props.setCurrentUser({
                        id: snapShot.id,
                        ...snapShot.data()
                    })
                });
            }
            setCurrentUser(userAuth);
        });
    }

  componentWillUnmount() {
      this.unsubscribeFromAuth();
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

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
})

const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
