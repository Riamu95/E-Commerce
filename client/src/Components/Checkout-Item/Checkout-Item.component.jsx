import React from "react";
import  {  CheckoutItemContainer, ImageContainer, Image, NameContainer , 
QuantityContainer, SizeContainer, PriceContainer, ArrowContainer, RemoveButtonContainer } from './CheckoutItem.styles.jsx';
import { removeCartItem, addCartItem, decrementCartQuantity } from "../../Redux/Cart/cart-actions";
import { useDispatch } from "react-redux";

const CheckoutItem = ({item}) => 
{
    const { imageUrl, name, quantity, price, id, size} = item;
    const dispatch = useDispatch();
    console.log('Url : ',imageUrl);
    return(
        <CheckoutItemContainer className='checkout-item'>
            <ImageContainer className='image-container'>
                <Image src={imageUrl} alt='item'/>
            </ImageContainer>
            <NameContainer className="name">{name}</NameContainer>
            <SizeContainer className="size">{size}</SizeContainer>
            <QuantityContainer className="quantity">
                <ArrowContainer onClick={() => quantity > 1 ? dispatch(decrementCartQuantity(item)) : dispatch(removeCartItem(id)) } className='arrow'>&#10094;</ArrowContainer>
                {quantity}
                <ArrowContainer onClick={() => dispatch(addCartItem(item)) } className='arrow'>&#10095;</ArrowContainer>
            </QuantityContainer>
            <PriceContainer className="price">{price}</PriceContainer>
            <RemoveButtonContainer className='remove-button' onClick={ () => dispatch(removeCartItem(id))}>&#10005;</RemoveButtonContainer>
        </CheckoutItemContainer>
    );
}


export default CheckoutItem;