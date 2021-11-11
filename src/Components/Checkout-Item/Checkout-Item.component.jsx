import React from "react";
import './Checkout-Item.styles.scss';
import { removeCartItem, addCartItem, decrementCartQuantity } from "../../Redux/Cart/cart-actions";
import { useDispatch } from "react-redux";

const CheckoutItem = ({item}) => 
{
    const { imageUrl, name, quantity, price, id, size} = item;
    const dispatch = useDispatch();
    
    return(
        <div className='checkout-item'>
            <div className='image-container'>
                <img src={imageUrl} alt='item'/>
            </div>
            <span className="name">{name}</span>
            <span className="size">{size}</span>
            <span className="quantity">
                <div onClick={() => quantity > 1 ? dispatch(decrementCartQuantity(item)) : dispatch(removeCartItem(id)) } className='arrow'>&#10094;</div>
                {quantity}
                <div onClick={() => dispatch(addCartItem(item)) } className='arrow'>&#10095;</div>
            </span>
            <span className="price">{price}</span>
            <div className='remove-button' onClick={ () => dispatch(removeCartItem(id))}>&#10005;</div>
        </div>
    );
}


export default CheckoutItem;