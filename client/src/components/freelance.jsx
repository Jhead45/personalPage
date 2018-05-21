import React, { Component, Fragment } from 'react';
import * as jobsService from '../services/jobs';
import { StripeProvider, Elements } from 'react-stripe-elements';
import InjectedCheckoutForm from './checkoutForm'; // must be a child of Elements wrapper

class Freelance extends Component {
    constructor(props) {
        super(props);
        this.state = {
            job: '',
            totalCost: 0,
            amountPaid: 0,
            amountDue: 0
        };
    }

    handleJob(job) {
        this.setState({ job });
    }

    handleClick() {
        jobsService.one(this.state.job) 
        .then((result) => {
            // console.log(result);
            this.setState({ job: result });
        })
        .catch((error) => console.log('Error'));
    }

    render() {
        // console.log(this.state.job.totalCost);
        return (
            <div className='container'>
                <div className='row displayColor theBox1'>
                    <div className='col-md-12 pl-0  w-100 pr-0'>
                        <table className="table table-striped table-sm-responsive  displayColor2 mb-0 w-100">
                        <tbody>
                        <tr><td colSpan='2'><h1 className='font-weight-bold mb-0 text-center'>Look Up A Job</h1></td></tr>

                            <tr className="w-100"><td>Total Cost:</td>
                                <td>{this.state.job.totalCost}</td>
                            </tr>
                            <tr><td>Amount Paid:</td>
                                <td>{this.state.job.amountPaid}</td>
                            </tr>
                        </tbody>
                        </table>
                        <div className='mt-0'>
                        <input onChange={ (e)  => this.handleJob(e.target.value)} placeholder='Search by Job Name' type='text' className='form-control addBorders h-100 ' required />
                        <button className='btn-block btn-primary mt-0 border-2 border-dark'
                        onClick={() => this.handleClick()}>Submit</button>
                        </div>
                    </div>

                    <StripeProvider apiKey="pk_test_x6JIHgC2syqeznKhToq8o3xs">
                        <Elements>
                            <InjectedCheckoutForm value={this.state.job.amountDue} />
                        </Elements>
                    </StripeProvider>
                    </div>             
            </div>
        );
    }

}

export default Freelance;


