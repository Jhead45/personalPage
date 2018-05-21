import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from './home';
import Skills from './skills';
import Demos from './demos';
import Contact from './contact';
import Freelance from './freelance';



class App extends Component {

    render() {
        return (
            <Router>
                <Fragment>

                        <div className='container'>
                            <div className='row'>
                            <h1 className="display-1 text-center title col-sm-12">Justin Head</h1>
                            </div>
                            <div className='row'>
                            <div className=" col-md-12">
                                <nav className="navbar navbar-dark bg-dark mb-0 h-100" id="homeNav">
                                <Link className="btn btn-dark btn-lg mt-3 ml-2 text-white" to="/">Home</Link>
                                <Link className="btn btn-dark btn-lg mt-3 ml-2 text-white" to="/skills">Skills</Link>
                                <Link className="btn btn-dark btn-lg mt-3 ml-2 text-white" to="/demos">View Past Work</Link>
                                <Link className="btn btn-dark btn-lg mt-3 ml-2 text-white" to="/contact">Contact</Link>
                                <Link className="btn btn-dark btn-lg mt-3 ml-2 text-white" to="/freelance">Freelance</Link>
                                </nav>
                            </div>
                            </div>
                        
                          
                    
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/skills" component={Skills} />
                        <Route exact path="/demos" component={Demos} />
                        <Route exact path="/contact" component={Contact} />
                        <Route exact path="/freelance" component={Freelance} />
                    </Switch>
                    </div>
                </Fragment>
            </Router>
        )
    }
}

export default App;