import React from "react";
import StripeCheckout from 'react-stripe-checkout';

const StripeButton = ({price}) => {

    const StripePrice = price * 100;
    const pubKey = 'pk_test_51JigUYFjZpiVmaGB4fANiTnHmxYCZab8uiMwSWg5LgbKS0tJjMGQBATuaf6gA6BGYfHjJGLQpsdfYGGdwp69Y8Lu00QWDCqY7k';
    const onToken = (token) => {
        alert('Payment Successful');
    };

    return(
        <StripeCheckout 
        label= ' Pay Now'
        name = 'Crwn Clotthing ltd'
        billingAddress
        shippingAddress
        image='https://svgshare.com/i/Cuz.svg'
        description= {`Your total is $ ${price}`}
        amount={StripePrice}
        token={onToken}
        stripeKey={pubKey}/>
    );
};

export default StripeButton;