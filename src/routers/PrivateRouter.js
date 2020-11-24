import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom';

export const PrivateRouter = ({
    isLoggedIn,
    component: Component,
    ...rest
}) => {

    return (
        <Route 
            {...rest}
            component={(props) => (
                (isLoggedIn)
                    ? <Component { ...props } />
                    : (<Redirect to="/auth/login" />)
            )}
        />
    )
}

PrivateRouter.protTypes = {
    isLoggedIn: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}