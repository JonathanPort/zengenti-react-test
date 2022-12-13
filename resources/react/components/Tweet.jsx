import React from 'react';

export default class Tweet extends React.Component
{

    static propTypes() {

        return {
            userName: PropTypes.string.isRequired,
            userHandle: PropTypes.string.isRequired,
            userAvatar: PropTypes.string.isRequired,
            tweetBody: PropTypes.string.isRequired,
            tweetDate: PropTypes.string.isRequired,
        };

    }

    render() {

        return (

            <div className="tweet">

                <div className="tweet__top">

                    <div className="tweet__top-left">

                        <div className="tweet__avatar">
                            <img src={this.props.userAvatar} alt="" />
                        </div>

                        <div className="tweet__username">
                            <span>{this.props.userName}</span>
                            <a href={'https://twitter.com/'+this.props.userHandle}>
                                {this.props.userHandle}
                            </a>
                        </div>

                    </div>

                    <img className="tweet__twitter-logo"
                            src="images/twitter-blue.png" alt="" />

                </div>

                <p className="tweet__body">
                    {this.props.tweetBody}
                </p>

                <p className="tweet__date">
                    {this.props.tweetDate}
                </p>

            </div>

        );

    }

}
