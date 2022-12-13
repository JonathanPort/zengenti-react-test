import React from 'react';
import { Outlet, Link } from "react-router-dom";

export default class ViewHeader extends React.Component
{

    render() {

        return (

            <header className='view-header'>

                <div className="view-header__inner">

                    <Link className="view-header__logo" to="/">
                        <img src="images/logo.svg"
                             alt="Ludlow University" />
                    </Link>

                    <div className="view-header__right">

                        <nav className="view-header__nav">

                            <ul>
                                <li>
                                    <Link to="/study">Study</Link>
                                </li>
                                <li>
                                    <Link to="/research">Research</Link>
                                </li>
                                <li>
                                    <Link to="/about-us">About us</Link>
                                </li>
                            </ul>

                        </nav>

                        <img className="view-header__search-toggle"
                             src="images/search-pink.svg"
                             alt="" />

                        <div className="view-header__menu-toggle">
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>

                    </div>

                </div>

            </header>

        );

    }

}
