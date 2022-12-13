import React from 'react';
import PropTypes from 'prop-types';

export default class ServiceCard extends React.Component
{


    static propTypes() {

        return {
            heading: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired,
        };

    }


    render() {

        return (

            <article className='service-card'>

                <div className="service-card__bg">

                    <img className="service-card__bg-img"
                         src={this.props.image}
                         alt="" />

                </div>

                <div className="service-card__content">

                    <a className="service-card__link"
                       href={this.props.url}>
                        {this.props.heading}
                        <img src="images/arrow-right-pink.png" alt="" />
                    </a>

                    <p className="service-card__description">
                        {this.props.description}
                    </p>

                </div>

            </article>

        );

    }

}
