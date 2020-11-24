import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom';

export const PublicRouter = ({
    isLoggedIn,
    component: Component,
    ...rest
}) => {
    return (
        <Route 
            {...rest}
            component={(props) => (
                (isLoggedIn)
                    ? (<Redirect to="/" />)
                    : (<Component { ...props } />)
            )}
        />
    )
}

PublicRouter.protTypes = {
    isLoggedIn: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}