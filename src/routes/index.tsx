import React from 'react';
import { useRoutes } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

import Login from '../pages/Login';

const CustomRouter = () => {
    const user = false;
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
                path: '*',
                element: <Navigate to="/login" />
            }
        ]);
    }

    return routes;
};

export default CustomRouter;
