import React from "react";
import './Checkout-Item.styles.scss';
import { removeCartItem, addCartItem, decrementCartQuantity } from "../../Redux/Cart/cart-actions";
import { connect } from "react-redux";
const CheckoutItem = ({item , removeItem, IncrementItemQuantity, decrementItemQuantity}) => 
{
    const { imageUrl, name, quantity, price, id} = item;
    return(
        <div className='checkout-item'>
            <div className='image-container'>
                <img src={imageUrl} alt='item'/>
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <div onClick={() => quantity > 1 ? decrementItemQuantity(item) : removeItem(id) } className='arrow'>&#10094;</div>
                {quantity}
                <div onClick={() => IncrementItemQuantity(item)} className='arrow'>&#10095;</div>
            </span>
            <span className="price">{price}</span>
            <div className='remove-button' onClick={ () => removeItem(id)}>&#10005;</div>
        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    removeItem : (id) =>  dispatch(removeCartItem(id)),
    decrementItemQuantity : data =>  dispatch(decrementCartQuantity(data)),
    IncrementItemQuantity : data => dispatch(addCartItem(data))
});

export default connect(null,mapDispatchToProps)(CheckoutItem);