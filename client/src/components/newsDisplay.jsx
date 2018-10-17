import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Covalence from '../images/covalence.png';
import Infiltrate from '../images/infiltrate.png';
import SouthEastPHP from '../images/sephp.png';
import SeptMeetup from '../images/meetup1.jpg';
import OctMeetup from '../images/meetup2.jpg';



const NewsDisplay = (props) => {
    console.log(props.value);

    switch (props.value) {
        case 'June':
            return (
                <Fragment>
                    <div className=" col-md-10 myColor d-flex flex-column justify-content-center align-items-center">
                    <h1 className="">June 25, 2018</h1>
                        <p className="mt-0">
                            Hired by Infiltrate LLC as a Junior Developer. Must learn PHP for the LAMP stack.
                        </p>
                        <br />
                        <img src={Infiltrate} id="infiltrate" />
                        
                        <h1 className="mt-4">June 8, 2018</h1>
                        <p className="">
                            Graduated from Covalence 10 Week in person Boot Camp.
                        </p>
                        <img src={Covalence} id="covalence" />
        
                    </div>
                </Fragment>
            );
            break;
        case 'August':
            return (
                <Fragment>
                    <div className=" col-md-10 myColor d-flex flex-column justify-content-center align-items-center">
                        <h1>August 16 - 17, 2018</h1>
                        <p className="mb-0">
                            Attended first tech conference, Southeast PHP.
                        </p>
                        <br />
                        <img src={SouthEastPHP} id="sephp" />
                        <h1 className="mt-4">August 8, 2018</h1>
                        <p>
                            I wrote a blog that was published by Covalence <br /> 
                            Check it out <a href="https://covalence.io/blog/i-spoke-my-employers-language-but-i-couldnt-write-it/" target="_blank">here</a>.
                        </p>

                    
                    </div>
                </Fragment>
            );
            break;
            case 'September':
            return (
                <Fragment>
                    <div className=" col-md-10 myColor d-flex flex-column justify-content-center align-items-center">
                        <h1>September 19, 2018</h1>
                        <p className="mb-0">
                            Started having mentor sessions with Covalence Students / Alumni.
                        </p>
                        <h1>September 11 - 15 2018</h1>
                        <p className="mb-0">
                            First trip to Silicon Valley for work.
                        </p>
                        <h1>September 8, 2018</h1>
                        <p>
                            Co-Founded and hosted first Covalence Nashville Meetup for Alumni and Students.
                        </p>
                        <a target="_blank" href={SeptMeetup}><img src={SeptMeetup} id="septMeetup" /></a>
                        
                    </div>
                </Fragment>
            );
            break;
            case 'October':
            return (
                <Fragment>
                    <div className=" col-md-10 myColor d-flex flex-column justify-content-center align-items-center">
                        <h1>October 13, 2018</h1>
                        <p className="mb-0">
                            Co-Hosted second Nashville Covalence Meetup. Covalence's CEO Matt Landers flew in as a special guest
                            and we had some guests from Birmingham visit.
                        </p>
                        <br />
                        <a target="_blank" href={OctMeetup}><img src={OctMeetup} id="octMeetup" /></a>
                 
   
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

export default NewsDisplay;
