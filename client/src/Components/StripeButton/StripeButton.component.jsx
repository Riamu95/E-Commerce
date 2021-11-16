import React from "react";
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeButton = ({price}) => {

    const StripePrice = price * 100;
    const pubKey = 'pk_test_51JigUYFjZpiVmaGB4fANiTnHmxYCZab8uiMwSWg5LgbKS0tJjMGQBATuaf6gA6BGYfHjJGLQpsdfYGGdwp69Y8Lu00QWDCqY7k';
                    
    
    const onToken = (token) => {
        console.log(' Token' , token);
        axios({
            url : 'payment',
            method : 'post',
            data : {
                amount : StripePrice,
                token : token
            }
        }).then(res => {
            console.log('Response : ' , res);
            alert('Payment Successful!' , res);
        }).catch (error => {
            console.log('Payment Error', JSON.parse(error));
            alert(' There was an issue with your payment. Please make sure you use the',
            'right credit card');
        });
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