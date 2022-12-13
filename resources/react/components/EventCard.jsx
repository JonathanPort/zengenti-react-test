import React from 'react';
import PropTypes from 'prop-types';

export default class EventCard extends React.Component
{


    static propTypes() {

        return {
            heading: PropTypes.string.isRequired,
            dayNumber: PropTypes.int.isRequired,
            monthShort: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired,
        };

    }


    render() {

        return (

            <article className='event-card'>

                <div className="event-card__bg">

                    <img className="event-card__bg-img"
                         src={this.props.image}
                         alt="" />

                </div>

                <div className="event-card__date">

                    <span className="event-card__date-day">
                        {this.props.dayNumber}
                    </span>

                    <span className="event-card__date-month">
                        {this.props.monthShort}
                    </span>

                </div>

                <a className="event-card__link"
                   href={this.props.url}>
                    {this.props.heading}
                </a>

            </article>

        );

    }

}
