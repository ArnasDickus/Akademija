import React from 'react';
import Header from "./components/header/header.component";
import {Switch, Route, Redirect} from 'react-router-dom';
import Home from "./pages/home/home.page";
import Login from "./pages/login/login.page";
import Register from "./pages/register/register.page";
import Footer from "./components/footer/footer.component";
import ForgotPasswordPage from "./pages/forgot-password/forgot-password.page";
import classes from './App.module.scss';

import {auth, createUserProfileDocument} from './firebase/firebase.utils';
import {createStructuredSelector} from "reselect";
import {selectCurrentUser} from "./redux/user/user.selector";
import {setCurrentUser} from "./redux/user/user.actions";
import {connect} from 'react-redux';
import {Unsubscribe} from "redux";
import AllRoutesEnum from "./core/enums/allRoutes.enum";
import CategoriesPage from "./pages/courses/pages/categories/categories.page";
import CoursesPage from "./pages/courses/pages/courses/courses.page";
import SectionPage from "./pages/courses/pages/sections/sections.page";

class App extends React.Component<any> {
    unsubscribeFromAuth: Unsubscribe | undefined;

    componentDidMount() {
        const {setCurrentUser} = this.props;

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
                <Header/>
                <div className={classes.siteContent}>
                    <Switch>
                        <Route path="/" exact={true} component={Home}/>
                        <Route exact path={`/${AllRoutesEnum.COURSES}`} component={CategoriesPage}/>
                        <Route exact path={`/${AllRoutesEnum.COURSES}/:id`} component={CoursesPage}/>
                        <Route exact path={`/${AllRoutesEnum.COURSES}/:id/:id`} component={SectionPage}/>

                        <Route path={`/${AllRoutesEnum.LOGIN}`} render={() => this.props.currentUser
                            ? (<Redirect to={"/"}/>) : (<Login/>)}/>
                        <Route path={`/${AllRoutesEnum.REGISTER}`} render={() => this.props.currentUser
                            ? (<Redirect to={"/"}/>) : (<Register/>)}/>
                        <Route path={`/${AllRoutesEnum.FORGOT_PASSWORD}`} component={ForgotPasswordPage}/>
                    </Switch>
                </div>
                <Footer/>
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
