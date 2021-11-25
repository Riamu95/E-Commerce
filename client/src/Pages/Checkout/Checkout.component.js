import React from 'react';
import { connect } from 'react-redux';
import { selectCartItems, selectCartPrice } from '../../Redux/Cart/cart.selectors';
import CheckoutItem from '../../Components/Checkout-Item/Checkout-Item.component';
import StripeButton from '../../Components/StripeButton/StripeButton.component'
import { TotalContainer, CheckoutPageContainer, ButtonContainer, Test, CheckoutHeaderContainer, HeaderBlockContainer } from './CheckoutPage.styles.jsx';


const CheckoutPage = ({items, cartPrice}) => 
{
  return(
           <CheckoutPageContainer className='checkout-page'>
               <CheckoutHeaderContainer className='checkout-header'>
                    <HeaderBlockContainer className='checkout-block'>
                        <span> Product </span>
                    </HeaderBlockContainer>
                    <HeaderBlockContainer className='checkout-block'>
                        <span> Description </span>
                    </HeaderBlockContainer>
                    <HeaderBlockContainer className='checkout-block'>
                        <span> Size </span>
                    </HeaderBlockContainer>
                    <HeaderBlockContainer className='checkout-block'>
                        <span> Quantity </span>
                    </HeaderBlockContainer>
                    <HeaderBlockContainer className='checkout-block'>
                        <span> Price </span>
                    </HeaderBlockContainer>
                    <HeaderBlockContainer className='checkout-block'>
                        <span> Remove </span>
                    </HeaderBlockContainer>
                </CheckoutHeaderContainer>
                {
                     items.map( item => <CheckoutItem key={item.id} item={item}/>)
                }
                <TotalContainer className='TotalContainer'>
                    <span>Total : ${cartPrice}</span>
                </TotalContainer>
                <Test className='test'>
                    *Please use the following test card details for payments*
                    <br/>
                    Card Number : 4242 4242 4242 4242 EXP : 02/27 CVC : 123
                </Test>
                <ButtonContainer className='button'>
                    <StripeButton price={cartPrice}/>
                </ButtonContainer>
            </CheckoutPageContainer>
        );

};


const mapStateToProps = state => ({
    items : selectCartItems(state),
    cartPrice : selectCartPrice(state)
});

export default connect(mapStateToProps,null)(CheckoutPage);