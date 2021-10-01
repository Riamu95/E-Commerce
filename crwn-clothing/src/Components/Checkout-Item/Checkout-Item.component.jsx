import React from "react";
import './Checkout-Item.styles.scss';
import { removeCartItem } from "../../Redux/Cart/cart-actions";
import { connect } from "react-redux";
const CheckoutItem = ({item : { imageUrl, name, price, quantity, id}, removeItem}) => 
{
    return(
        <div className='checkout-item'>
            <div className='image-container'>
                <img src={imageUrl} alt='item'/>
            </div>
            <span className="name">{name}</span>
            <span className="quantity">{quantity}</span>
            <span className="price">{price}</span>
            <div className='remove-button' onClick={ () => removeItem(id)}>&#10005;</div>
        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    removeItem : (id) =>  dispatch(removeCartItem(id))
});

export default connect(null,mapDispatchToProps)(CheckoutItem);