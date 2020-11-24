import React from 'react';
import Header from "./components/header/header.component";
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from "./pages/home/home.page";
import Courses from "./pages/courses/courses.page";
import Login from "./pages/login/login.page";
import Register from "./pages/register/register.page";
import Footer from "./components/footer/footer.component";
import ForgotPasswordPage from "./pages/forgot-password/forgot-password.page";
import classes from './App.module.scss';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "./redux/user/user.selector";
import { setCurrentUser } from "./redux/user/user.actions";
import { connect } from 'react-redux';
import { Unsubscribe } from "redux";

class App extends React.Component<any>  {
  unsubscribeFromAuth: Unsubscribe | undefined;

    componentDidMount() {
        const { setCurrentUser } = this.props;

        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
            if (userAuth) {
                const userRef: any = await createUserProfileDocument(userAuth);

                userRef.onSnapshot((snapShot: { id: string; data: () => any; }) => {
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
      // @ts-ignore
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
                    <Route path="/login" render={() => this.props.currentUser
                        ? (<Redirect to={"/"} /> ) : (<Login />)}/>
                    <Route path="/register" render={() => this.props.currentUser
                        ? (<Redirect to={"/"} /> ) : (<Register />)}/>
                    <Route path="/forgot-password" component={ ForgotPasswordPage } />
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

const mapDispatchToProps = (dispatch: any) => ({
    setCurrentUser: (user: any) => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
