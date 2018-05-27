import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import BlogSpot from '../images/BlogSpot.png';
import Chirper from '../images/Chirper.png';

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
        case 'Coming Soon!':
            return <div />;
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
