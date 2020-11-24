import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom'
import { JournalScreen } from '../components/jounal/JournalScreen';
import { firebase } from '../firebase/firebase-config';
import { AuthRouter } from './AuthRouter';
import 'firebase/auth';
import { useDispatch } from 'react-redux';
import { login } from '../actions/auth';
import { PrivateRouter } from './PrivateRouter';
import { PublicRouter } from './PublicRouter';


export const AppRouter = () => {

    const dispatch = useDispatch();
    const [checking, setChecking] = useState(true)
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
            if (user?.uid) {
                dispatch(login(user.uid, user.displayName));
                setIsLoggedIn(true);
            } else {
                setIsLoggedIn(false);
            }

            setChecking(false);
        });

    }, [dispatch, setChecking, setIsLoggedIn]);

    if (checking) return (<h1>Espere...</h1>);

    return (
        <Router>
            <Switch>
                <PublicRouter isLoggedIn={isLoggedIn} path="/auth" component={AuthRouter} />
                <PrivateRouter isLoggedIn={isLoggedIn} exact path="/" component={JournalScreen} />
                <Redirect to="/auth/login" />
            </Switch>
        </Router>
    )
}
