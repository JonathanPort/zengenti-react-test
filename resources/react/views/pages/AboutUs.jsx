import React from 'react';
import ViewHeader from './../../components/ViewHeader';
import ViewFooter from './../../components/ViewFooter';

export default class AboutUs extends React.Component
{

    render() {

        return (

            <div className="view--about-us">

                <ViewHeader />

                <div className="wrap">
                    <h1>This is the "About Us" page.</h1>
                </div>

                <ViewFooter />

            </div>

        );

    }

}
