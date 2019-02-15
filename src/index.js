import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import App from './components/App/App';

// const store = createStore(rootReducer, {}, applyMiddleware(reduxThunk))

ReactDOM.render(
    // <Provider store = {store}>
        // <Router>
            <App />
        // </Router> //
    // </Provider>
    ,
    document.getElementById('root')
);

serviceWorker.unregister();
