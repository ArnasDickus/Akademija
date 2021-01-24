import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { Unsubscribe } from 'redux';
import { FirebaseUserType } from 'redux/user/user.types';

import Header from './components/header/header.component';
import Home from './pages/home/home.page';
import Login from './pages/login/login.page';
import Register from './pages/register/register.page';
import Footer from './components/footer/footer.component';
import ForgotPasswordPage from './pages/forgot-password/forgot-password.page';
import classes from './App.module.scss';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { selectCurrentUser } from './redux/user/user.selector';
import { setCurrentUser } from './redux/user/user.actions';
import AllRoutesEnum from './core/enums/allRoutes.enum';
import CategoriesPage from './pages/courses/pages/categories/categories.page';
import CoursesPage from './pages/courses/pages/courses/courses.page';
import SectionPage from './pages/courses/pages/sections/sections.page';
import SectionRedirectPage from './pages/courses/pages/section-redirect/section-redirect.page';
import LearnerHome from './pages/learner-home/learner-home';
import ProfileSettings from './pages/profile-settings/profile-settings';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
class App extends React.Component<any> {
  unsubscribeFromAuth: Unsubscribe | undefined;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const userRef: any = await createUserProfileDocument(userAuth);

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        userRef.onSnapshot((snapShot: { id: string; data: () => any }) => {
          this.props.setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      }
      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    this.unsubscribeFromAuth();
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  render() {
    return (
      <div className={classes.site}>
        <Header />
        <div className={classes.siteContent}>
          <Switch>
            <Route
              path="/"
              render={() =>
                this.props.currentUser ? <Redirect to={`/${AllRoutesEnum.PROFILE}`} /> : <Home />
              }
              exact
            />
            <Route component={CategoriesPage} path={`/${AllRoutesEnum.COURSES}`} exact />
            <Route component={CoursesPage} path={`/${AllRoutesEnum.COURSES}/:a`} exact />
            <Route
              component={SectionRedirectPage}
              path={`/${AllRoutesEnum.COURSES}/:a/:b/`}
              exact
            />
            <Route component={SectionPage} path={`/${AllRoutesEnum.COURSES}/:a/:b/:id`} exact />
            <Route
              path={`/${AllRoutesEnum.LOGIN}`}
              render={() =>
                this.props.currentUser ? <Redirect to={`/${AllRoutesEnum.PROFILE}`} /> : <Login />
              }
            />
            <Route
              path={`/${AllRoutesEnum.REGISTER}`}
              render={() =>
                this.props.currentUser ? (
                  <Redirect to={`/${AllRoutesEnum.PROFILE}`} />
                ) : (
                  <Register />
                )
              }
            />
            <Route
              path={`/${AllRoutesEnum.FORGOT_PASSWORD}`}
              render={() =>
                this.props.currentUser ? (
                  <Redirect to={`/${AllRoutesEnum.PROFILE}`} />
                ) : (
                  <ForgotPasswordPage />
                )
              }
            />
            <Route
              path={`/${AllRoutesEnum.PROFILE}`}
              render={() => (!this.props.currentUser ? <Redirect to="/" /> : <LearnerHome />)}
            />
            <Route
              path={`/${AllRoutesEnum.SETTINGS}`}
              render={() => (!this.props.currentUser ? <Redirect to="/" /> : <ProfileSettings />)}
            />
          </Switch>
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector<unknown, unknown>({
  currentUser: selectCurrentUser,
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const mapDispatchToProps = (dispatch: any) => ({
  setCurrentUser: (user: FirebaseUserType) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
