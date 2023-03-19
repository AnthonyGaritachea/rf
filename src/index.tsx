import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import CustomRouter from './routes';

const App = () => {
    return (
        <BrowserRouter>
            <CustomRouter />
        </BrowserRouter>
    );
};

const container = document.getElementById('app');
if (!container) throw new Error('unable to find dom container');
const root = createRoot(container);
root.render(<App />);
