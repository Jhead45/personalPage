import React, { Component, Fragment } from 'react';
// import { StripeProvider, Elements } from 'react-stripe-elements';

// import InjectedCheckoutForm from './checkoutForm'; // must be a child of Elements wrapper

class Freelance extends Component {

    render() {
        return (
            <div className='homeContainer'>
                <div className="btn-group-vertical btnGroup2 w-100" role="group" aria-label="Basic example">
                    <button type="button" className="btn btn-secondary vBtn2">Look Up Job</button>
                    <button type="button" className="btn btn-secondary vBtn2">Make Payment</button>
                </div>
            </div>
        );
    }

}

export default Freelance;