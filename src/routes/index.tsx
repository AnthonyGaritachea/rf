import React from 'react';
import { useRoutes } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { useContext } from 'react';

import { AuthContext } from '../context/AuthContext';
import Login from '../pages/Login';
import Register from '../pages/Register';

const CustomRouter = () => {
    const user = useContext(AuthContext);
    let routes;

    if (user) {
        routes = useRoutes([
            {
                path: '/home',
                element: <p>home page</p>
            },
            {
                path: '*',
                element: <p>404 Not Found</p>
            }
        ]);
    } else {
        routes = useRoutes([
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '*',
                element: <Navigate to="/login" />
            }
        ]);
    }

    return routes;
};

export default CustomRouter;
