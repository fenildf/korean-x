import React from 'react';
import ReactDOM from 'react-dom';
import routes from './routes/routes';

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(
        routes,
        document.getElementById('app')
    );
});