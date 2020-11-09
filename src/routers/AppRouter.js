import React from 'react'
import { Route,  BrowserRouter as Router, Switch, Redirect } from 'react-router-dom'
import { JournalScreen } from '../components/jounal/JournalScreen'
import { AuthRouter } from './AuthRouter'

export const AppRouter = () => {
    return (
        <Router>
            <Switch>
                <Route path="/auth" component={AuthRouter} />
                <Route exact path="/" component={JournalScreen} />
                <Redirect to="/auth/login" />
            </Switch>
        </Router>
    )
}
