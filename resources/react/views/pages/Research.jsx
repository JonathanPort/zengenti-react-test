import React from 'react';
import ViewHeader from './../../components/ViewHeader';
import ViewFooter from './../../components/ViewFooter';

export default class Research extends React.Component
{

    render() {

        return (

            <div className="view--research">

                <ViewHeader />

                <div className="wrap">
                    <h1>This is the "Research" page.</h1>
                </div>

                <ViewFooter />

            </div>

        );

    }

}
