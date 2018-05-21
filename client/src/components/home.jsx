import React, { Component } from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router-dom';
import headshot from '../images/headshot.png';


class Home extends Component {

    constructor(props) {
        super(props);
    }
    
    render() {
        return(           
        
        <div className="container">
            <div className='row displayColor theBox'>
                <div className='col-md-6 d-flex justify-content-center flex-column align-items-center '>
                <h1 className='display-3 myColor text-center'>Full Stack<br />Developer</h1>
            </div>
            <div className='col-md-6 d-flex justify-content-center align-items-center'>
            <img src={headshot} className='w-100 h-100 projectImg' />
            </div>
            </div>
        </div>)
    }
}

export default Home;