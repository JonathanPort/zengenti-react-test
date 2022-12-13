import React from 'react';
import ViewHeader from './../../components/ViewHeader';
import ViewFooter from './../../components/ViewFooter';

export default class Example extends React.Component
{

    render() {

        return (

            <div className="view--example">

                <ViewHeader />

                <h1>This is an example page.</h1>

                <ViewFooter />

            </div>

        );

    }

}
