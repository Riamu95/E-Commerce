import React from 'react';
import { connect } from 'react-redux';
import { selectCartItems, selectCartPrice } from '../../Redux/Cart/cart.selectors';
import CheckoutItem from '../../Components/Checkout-Item/Checkout-Item.component';
import '../Checkout/Checkout.styles.scss';


const CheckoutPage = ({items, cartPrice}) => 
{
  return(
            <div className='checkout-page'>
                <div className='checkout-header'>
                    <div className='checkout-block'>
                        <span> Product </span>
                    </div>
                    <div className='checkout-block'>
                        <span> Description </span>
                    </div>
                    <div className='checkout-block'>
                        <span> Quantity </span>
                    </div>
                    <div className='checkout-block'>
                        <span> Price </span>
                    </div>
                    <div className='checkout-block'>
                        <span> Remove </span>
                    </div>
                </div>
                {
                     items.map( item => <CheckoutItem key={item.id} item={item}/>)
                }
                <div className='total'>
                    <span>Total : ${cartPrice}</span>
                </div>
            </div>
        );

};


const mapStateToProps = state => ({
    items : selectCartItems(state),
    cartPrice : selectCartPrice(state)
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps,mapDispatchToProps)(CheckoutPage);