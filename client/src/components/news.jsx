import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
// import DemoDisplay from './demoDisplay';
import NewsDisplay from './newsDisplay';

class News extends Component {
        constructor(props) {
            super(props);
            this.state = { News: '' };
        }


        handleClick(value) {
            this.setState({ News: value });
        }

        render() {
        return (
            <div className='container'>
                <div className='row displayColor theBox '>
                <div className="btn-group-vertical col-md-2 pr-0 pl-0" role="group" aria-label="Basic example">
                    <button type="button" className="btn btn-secondary h-100 vBtn"
                    onClick={() => this.handleClick('October')}>October 2018</button>
                    <button type="button" className="btn btn-secondary h-100 vBtn"
                    onClick={() => this.handleClick('September')}>September 2018</button>
                    <button type="button" className="btn btn-secondary h-100 vBtn"
                    onClick={() => this.handleClick('August')}>August 2018</button>
                    <button type="button" className="btn btn-secondary h-100 vBtn" id='sideNav'
                    onClick={() => this.handleClick('June')}>June 2018</button>
                </div>
                    <NewsDisplay value={this.state.News}/>
                </div>
            </div>
        )
    }
}


export default News;