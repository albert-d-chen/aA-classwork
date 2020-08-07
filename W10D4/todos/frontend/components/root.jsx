import React from 'react';
import { Provider } from 'react-redux';
import App from './app'

const Root = ({store}) => {

    return (
        // provider
        <Provider store={store}>
            <App />
        </Provider>
        // <p> Root render </p>
    );

};

export default Root;