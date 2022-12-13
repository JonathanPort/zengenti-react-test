import React from 'react';
import ViewHeader from './../../components/ViewHeader';
import ViewFooter from './../../components/ViewFooter';
import ServiceCard from '../../components/ServiceCard';
import EventCard from '../../components/EventCard';



/**
 * I come from PHP background so I just defaulted to class based components
 * as it's kinda like PHP, I can learn the other way if the team works
 * that way.
 */
export default class Home extends React.Component
{

    render() {

        return (

            <div className="view--home">

                <ViewHeader />

                {/*
                    I would usually extract these to dedicated components with their
                    own props if real life project. I would guage whether these
                    components are re-usable and whether it's worth putting in
                    the extra time to flesh them out. For now they are fine here
                    but say I had more designs or basic knowledge of the rest of
                    the project, I would consider making these into dedicated
                    components.
                */}
                { this.renderHero() }
                { this.renderServices() }
                { this.renderCtaBanner() }
                { this.renderEvents() }

                <ViewFooter />

            </div>

        );

    }


    renderHero() {

        return (
            <div className='hero'>

                <div className="hero__inner">

                    <div className="hero__content">

                        <a className="hero__breadcrumbs" href='/'>
                            Home
                        </a>

                        <h1 className="hero__h1">
                            Student Life
                        </h1>

                        <h3 className="hero__h3">
                            There is so much going on at Ludlow University, both on and off campus.
                        </h3>

                        <div className="hero__cite">

                            <h4>Lisa Smith</h4>

                            <span>Student, BSc (Hons) Computer Games Design</span>

                        </div>

                        <a className="hero__cta btn btn--primary" href='/'>
                            View student stories
                        </a>

                    </div>

                    <div className="hero__image">
                        <img src="images/hero-img.png" alt="" />
                    </div>

                </div>

            </div>
        );

    }


    renderServices() {

        let lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.';

        return (
            <div className='services'>

                <div className="services__inner">

                    <ServiceCard heading="Activities and clubs"
                                 description={ lorem }
                                 image="/images/service-1.jpg"
                                 url="/services/activities" />

                    <ServiceCard heading="Accommodation"
                                 description={ lorem }
                                 image="/images/service-2.jpg"
                                 url="/services/accommodation" />

                    <ServiceCard heading="Chat to a student"
                                 description={ lorem }
                                 image="/images/service-3.jpg"
                                 url="/services/chat-to-a-student" />

                    <ServiceCard heading="Support"
                                 description={ lorem }
                                 image="/images/service-4.jpg"
                                 url="/services/support" />

                    <ServiceCard heading="Life in Ludlow"
                                 description={ lorem }
                                 image="/images/service-5.jpg"
                                 url="/services/life-in-ludlow" />

                </div>

            </div>
        );

    }


    renderCtaBanner() {

        return (
            <div className='cta-banner'>

                <div className="cta-banner__bg">
                    <img className="cta-banner__bg-img"
                         src="images/banner-image.jpg"
                         alt="" />
                </div>

                <div className="cta-banner__inner">

                    <h3 className="cta-banner__heading">
                        Come along to one of our Open Days and find out everything you need to know about the campus, courses, and facilities
                    </h3>

                    <a className="cta-banner__cta btn btn--primary-white"
                       href='/'>
                        Book an Open Day
                    </a>

                </div>

            </div>
        );

    }


    renderEvents() {

        return (
            <div className='events'>

                <div className="events__inner">

                    <div className="events__top">

                        <h3 className="events__heading">
                            Upcoming events
                        </h3>

                        <a className="events__cta btn btn--primary"
                           href='/'>
                            View all events
                        </a>

                    </div>


                    <div className="events__grid">

                        <EventCard heading="Ludlow campus rock festival 2019"
                                   dayNumber="01"
                                   monthShort="Aug"
                                   image="/images/event-1.jpg"
                                   url="/events/1" />

                        <EventCard heading="2019 game design exhibition"
                                   dayNumber="14"
                                   monthShort="Aug"
                                   image="/images/event-2.jpg"
                                   url="/events/2" />

                        <EventCard heading="Study collaboration session"
                                   dayNumber="21"
                                   monthShort="Aug"
                                   image="/images/event-3.jpg"
                                   url="/events/3" />

                    </div>

                </div>

            </div>
        );

    }

}
