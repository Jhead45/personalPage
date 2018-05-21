import React, { Component } from 'react';
import { injectStripe } from 'react-stripe-elements';
import { postCharge } from '../services/stripeService';
import CardSection from './cardSection';

class CheckoutForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            customerName: ''
        }
    }

    async handleSubmit(e) {
        e.preventDefault();
        try {
            let tokenObj = await this.props.stripe.createToken({name: this.state.customerName });
            await postCharge({ id: tokenObj.token.id, amount: this.props.value });
        } catch (e) {
            console.log(e);
        }
    }

    handleNameInput(e) {
        this.setState({ customerName: e.target.value });
    }

    render() {
            console.log(this.props.value);
        return (
            <div className='row theBox2 fullWidth mt-5 ml-5 mr-5'>
            <div className='col-md-12'>
            <div className='d-flex flex-column justify-content-center align-items-center mt-0 removePadding w-100'>
            <table className="table table-striped table-sm-responsive displayColor2 addBorders mb-0 w-100">
                <tbody>
                    <tr><td colSpan='2'><h1 className='font-weight-bold mb-0 text-center'>Make A Payment</h1></td></tr>
                    <tr><td>Amount Due:</td>
                        <td>{this.props.value}</td>
                    </tr>
                </tbody>
            </table>
            <form className='bg-light addBorders border-dark w-100 mt-0' onSubmit={(e) => this.handleSubmit(e)}>
                <input className='w-100 fullWidth' onChange={(e) => this.handleNameInput(e)} placeholder="Name" htmlFor="name" id="name" />
                <CardSection />
                <div className='moveBtn'><button className='btn-block btn-primary'>SUBMIT</button></div>
            </form>
            </div>
            </div>
            </div>
            
        );
    }
}

export default injectStripe(CheckoutForm);
