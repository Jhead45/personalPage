import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import BlogSpot from '../images/BlogSpot.png';
import Chirper from '../images/Chirper.png';


const DemoDisplay = (props) => {
console.log(props.value);

    switch(props.value) {
        case 'Blog Spot!':
            return(
            <div className='projectBox h-100'>
                <img src={BlogSpot} className='h-100 projectImg' />
                <div className='divProject justify-content-center'>
                    <h1 className=''>Blog Spot!</h1>
                    <p className=''>This project was completed using ReactJS, NodeJS / Express, and MySQL.<br />
                    This site will allow users to sign up and post blogs. Guests and other users can all view the blogs, but only the author
                    will have edit and delete options. A test mailgun system is set up for messaging, and a stripe account is in test for $10 donations.</p><br />
                    <a href='https://floating-tundra-51790.herokuapp.com/' target='_blank' className='btn btn-primary w-100 '><p>View Site</p></a>

                </div>
               
            </div>)
            break;
        case 'Chirper!':
                return(
                <div className='projectBox h-100'>
                    <img src={Chirper} className='h-100 projectImg' />
                    <div className='divProject justify-content-center'>
                        <h1>Chirper!</h1>
                        This project was completed using ReactJS, NodeJS / Express, and MySQL.<br />
                        This site is set up to allow a certain people to visit and leave chat messages to communicate. The messages are stored in the 
                        database and accessed with API calls. No authentication was used in this project in order to demonstrate functionality.
                        <a href='https://agile-retreat-61795.herokuapp.com/' target='_blank' className='btn btn-primary w-100'><p>View Site</p></a>
    
                    </div>
                    
                </div>)
            break;
        case 'Coming Soon!':
                return(
                    <div>

                    </div>)
            break;       
        default:
                return(
                    <div>
                        <h1>Click Section to View Previous Projects.</h1>
                    </div>)
    }

    }


export default DemoDisplay;