import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import BlogSpot from '../images/BlogSpot.png';
import Chirper from '../images/Chirper.png';
import phonescreen from '../images/phonescreen.png';

const DemoDisplay = (props) => {
    console.log(props.value);

    switch (props.value) {
        case 'Blog Spot!':
            return (
                <Fragment>
                    <div className="col-md-6 d-flex justify-content-center align-items-center">
                        <img src={BlogSpot} className="projectImg" />
                    </div>
                    <div className=" col-md-4 myColor d-flex flex-column justify-content-center align-items-center">
                        <h1 className="">Blog Spot!</h1>
                        <p className="">
                            This project was completed using ReactJS, NodeJS /
                            Express, and MySQL.<br />
                            This site will allow users to sign up and post
                            blogs. Guests and other users can all view the
                            blogs, but only the author will have edit and delete
                            options. A test mailgun system is set up for
                            messaging, and a stripe account is in test for $10
                            donations.
                        </p>
                        <br />
                        <a
                            href="https://floating-tundra-51790.herokuapp.com/"
                            target="_blank"
                            className="btn btn-primary  ">
                            <p>View Site</p>
                        </a>
                    </div>
                </Fragment>
            );
            break;
        case 'Chirper!':
            return (
                <Fragment>
                    <div className="col-md-6 d-flex justify-content-center align-items-center">
                        <img src={Chirper} className="projectImg" />
                    </div>
                    <div className=" col-md-4 myColor d-flex flex-column justify-content-center align-items-center">
                        <h1>Chirper!</h1>
                        <p>
                            This project was completed using ReactJS, NodeJS /
                            Express, and MySQL.<br />
                            This site is set up to allow a certain people to
                            visit and leave chat messages to communicate. The
                            messages are stored in the database and accessed
                            with API calls. No authentication was used in this
                            project in order to demonstrate functionality.
                        </p>
                        <br />
                        <a
                            href="https://agile-retreat-61795.herokuapp.com/"
                            target="_blank"
                            className="btn btn-primary ">
                            <p>View Site</p>
                        </a>
                    </div>
                </Fragment>
            );
            break;
        case 'Jelly Drop':
            return (
                <Fragment>
                    <div className="col-md-6 d-flex justify-content-center align-items-center">
                        <img src={phonescreen} className="projectImg3" />
                    </div>
                    <div className=" col-md-4 myColor d-flex flex-column justify-content-center align-items-center">
                        <h1>Jelly Drop</h1>
                        <p>
                            Jelly Drop is a mobile app game created with React
                            Native, Node.JS, Express, and MySQL.
                            This game allows users to drop and pick up "jelly
                            beans" on a map and gain points. The points system
                            is made up of various API routes to interact with
                            the database scores. Scores and ranks are displayed
                            on profile pages by using a variety of SQL queries
                            and indexing through arrays. CRON jobs are set in
                            the server to trigger daily, weekly, and monthly
                            events for the game.
                        </p>
                        <br />
                        <button
                            type="button"
                            className="btn btn-primary"
                            data-toggle="modal"
                            data-target="#exampleModal">
                            Watch Interview
                        </button>

                        <div
                            className="modal fade"
                            id="exampleModal"
                            tabIndex="-1"
                            role="dialog"
                            aria-labelledby="exampleModalLabel"
                            aria-hidden="true">
                            <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5
                                            className="modal-title"
                                            id="exampleModalLabel">
                                            Jelly Drop Interview
                                        </h5>
                                        <button
                                            type="button"
                                            className="close"
                                            data-dismiss="modal"
                                            aria-label="Close">
                                            <span aria-hidden="true">
                                                &times;
                                            </span>
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                    <iframe width="100%" height="315" src="https://www.youtube.com/embed/iklqWMsDH2I?start=656" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                                    </div>
                                    <div className="modal-footer">
                                        <button
                                            type="button"
                                            className="btn btn-secondary"
                                            data-dismiss="modal">
                                            Close
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Fragment>
            );
            break;
        default:
            return (
                <Fragment>
                    <div className="col-md-10 myColor d-flex justify-content-center align-items-center">
                        <h1 className="w-100 text-center">
                            Click Section to View Previous Projects.
                        </h1>
                    </div>
                </Fragment>
            );
    }
};

export default DemoDisplay;
