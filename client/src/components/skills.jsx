import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import SkillDisplay from './skillDisplay';


class Skills extends Component {
        constructor (props) {
            super(props);
            this.state = { skills: '' };
        }

        handleClick(value) {
            this.setState({ skills: value });
        }



        render() {
            console.log(this.state);
        return (

            <div className="homeContainer">
            <div className="btn-group-vertical buttonGroup h-100" role="group" aria-label="Basic example">
                    <button type="button" className="btn btn-secondary h-100 vBtn" value='languages' 
                        onClick={() => this.handleClick('languages')}>Languages</button>
                    <button type="button" className="btn btn-secondary h-100 vBtn" value='framework' 
                        onClick={() => this.handleClick('frameworks')}>Libraries <br />& Frameworks</button>
                    <button type="button" className="btn btn-secondary h-100 vBtn" value='concepts' 
                        onClick={() => this.handleClick('concepts')}> Concepts</button>
                    <button type="button" className="btn btn-secondary h-100 vBtn" value='databases' 
                        onClick={() => this.handleClick('databases')}>Databases</button>
                    <button type="button" className="btn btn-secondary h-100 vBtn" value='methods' 
                        onClick={() => this.handleClick('methods')}>Development <br /> Methodologies</button>
                    <button type="button" className="btn btn-secondary h-100 vBtn" value='environments' 
                        onClick={() => this.handleClick('environments')}>Development<br /> Environments</button>


                </div>

               
                <div>
                    <SkillDisplay value={this.state.skills}/>
                </div>
            </div>
     
               
        )
    }
}

export default Skills;