import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import DemoDisplay from './demoDisplay';

class Demos extends Component {
        constructor(props) {
            super(props);
            this.state = { demos: '' };
        }


        handleClick(value) {
            this.setState({ demos: value });
        }

        render() {
        return (
            <div className='container'>
                <div className='row displayColor theBox '>
                <div className="btn-group-vertical col-md-2 pr-0 pl-0" role="group" aria-label="Basic example">
                    <button type="button" className="btn btn-secondary h-100 vBtn"
                    onClick={() => this.handleClick('Blog Spot!')}>Blog Spot!</button>
                    <button type="button" className="btn btn-secondary h-100 vBtn "
                    onClick={() => this.handleClick('Chirper!')}>Chirper!</button>
                    <button type="button" className="btn btn-secondary h-100 vBtn" id='sideNav'
                    onClick={() => this.handleClick('Jelly Drop')}>Jelly Drop</button>
                </div>
                    <DemoDisplay value={this.state.demos}/>
                </div>
            </div>
        )
    }
}


export default Demos;