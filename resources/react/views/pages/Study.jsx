import React from 'react';
import ViewHeader from './../../components/ViewHeader';
import ViewFooter from './../../components/ViewFooter';

export default class Study extends React.Component
{

    render() {

        return (

            <div className="view--study">

                <ViewHeader />

                <div className="wrap">
                    <h1>This is the "Study" page.</h1>
                </div>

                <ViewFooter />

            </div>

        );

    }

}
