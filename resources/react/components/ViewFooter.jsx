import React from 'react';
import Tweet from './Tweet';

export default class ViewFooter extends React.Component
{

    render() {

        return (

            <footer className='view-footer'>



                <div className="view-footer__inner">

                    <img className="view-footer__bg-image"
                         src="images/footer-bg.png"
                         alt="" />

                    <div className="view-footer__main">

                        <a className="view-footer__logo"
                           href='/'
                        >
                            <img src="images/logo.svg" alt="" />
                        </a>

                        <div className="view-footer__socials">
                            <a className="view-footer__social" href='twitter'>
                                <img src="images/twitter-pink.png" alt="" />
                            </a>
                            <a className="view-footer__social" href='linkedin'>
                                <img src="images/linkedin-pink.png" alt="" />
                            </a>
                            <a className="view-footer__social" href='google'>
                                <img src="images/google-pink.png" alt="" />
                            </a>
                            <a className="view-footer__social" href='facebook'>
                                <img src="images/facebook-pink.png" alt="" />
                            </a>
                        </div>

                    </div>

                    <div className="view-footer__tweet">

                        <Tweet userName="Ludlow University"
                               userHandle="@ludlowuni"
                               userAvatar="images/logo-emblem.svg"
                               tweetBody="Ludlow university students enjoying a selfie after the 2019 #campuspaintrun. A total of £4913.14 was raised for multiple charities.  #runformoney."
                               tweetDate="11:44 AM · Jul 10, 2019"
                         />

                    </div>

                </div>

            </footer>

        );

    }

}
