import React from 'react';
import ReactDOM from 'react-dom/client';
import errorView from './views/pages/error.jsx';
import Theme from './utils/Theme';
import AppView from './app.jsx';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';


/**
 * Create React Redux store
 */
const store = createStore(rootReducer);


/**
 * React App root
 */
const domRootContainer = document.querySelector('#react-root');

ReactDOM.createRoot(domRootContainer).render(
    <React.StrictMode>
        <Provider store={store}>
            <AppView />
        </Provider>
    </React.StrictMode>
);


/**
 * Detect Dark Mode
 */
// Theme.setTheme(Theme.detectSystemTheme());

// Theme.startSystemDarkModeWatcher(() => {

//     Theme.setTheme(Theme.detectSystemTheme());

// });


/**
 * Other bootstrap stuff here..
 */
