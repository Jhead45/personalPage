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
        
        <div className="homeContainer">
            <div className='flex-column justify-content-center align-self-center w-100'>
                <h1 className='display-3 myColor text-center'>Full Stack<br />Developer</h1>
            </div>
            <div className='flex-column justify-content-center align-items-center w-100'>
            <img src={headshot} className='w-100 h-100' />

            </div>
        </div>)
    }
}

export default Home;