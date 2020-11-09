import React from 'react'
import { Route,  BrowserRouter as Router, Switch } from 'react-router-dom'
import { JounalApp } from '../JounalApp'
import { AuthRouter } from './AuthRouter'

export const AppRouter = () => {
    return (
        <Router>
            <Switch>
                <Route path="/auth" component={AuthRouter} />
                <Route exact path="/" component={JounalApp} />
            </Switch>
        </Router>
    )
}
