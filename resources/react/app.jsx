import React from 'react';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import routes from './routes';
import { BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { showAppLoadingIndicator } from './actions';
import AppLoadingIndicator from './containers/AppLoadingIndicator';
import ViewHeader from './components/ViewHeader';
import ViewFooter from './components/ViewFooter';

export default class App extends React.Component
{

    render() {

        const reactRouter = createBrowserRouter(routes);


        // this.props.store.dispatch(showAppLoadingIndicator);


        return (

            <div className="app-container">

                <RouterProvider router={reactRouter} />

                <AppLoadingIndicator loaderVisibility="" />

            </div>

        );

    }

}
