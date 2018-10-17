import React, { Component } from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router-dom';
import profile from '../images/profile.png';
import github from '../images/github.png';
import linkedin from '../images/linkedin.png';

class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container">
                <div className="row displayColor theBox">
                    <div className="col-md-6 d-flex justify-content-center flex-column align-items-center ">
                        <h1 className="display-4 myColor text-center" id='secondTitle'>
                            Full Stack<br />Developer
                        </h1><br />
                        <div className="d-inline mt-5">
                            <a href="https://github.com/Jhead45" target="_blank"><img src={github} id="github" className='mr-3' alt='github' /></a>
                            <a href="https://www.linkedin.com/in/justin-head" target="_blank"><img src={linkedin} id="linkedin" className="ml-3" alt='linkedin' /></a>
                        </div>
                    </div>
                    <div className="col-md-6 d-flex justify-content-center align-items-center">
                        <img
                            src={profile}
                            className="w-100 h-100 projectImg2 mb-5"
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
