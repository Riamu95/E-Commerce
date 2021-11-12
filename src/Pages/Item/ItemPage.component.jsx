import React, { useState } from "react";
import { useParams, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { getItem } from "../../Redux/Shop/shop.selector";
import { addCartItem } from "../../Redux/Cart/cart-actions";
import Button from "../../Components/Button/Button.component";
import ItemSize from "../../Components/ItemSize/ItemSize.component";
import { selectCurrentUser } from "../../Redux/User/user.selector";
import { ItemContainer, ProductName, ProductInfoContainer, ProductPrice, Product, AddItemFail } from './ItemPage.styles.jsx';

const ItemPage = () =>
{
    const { collectionId, itemId } = useParams();
    const  item  = useSelector((state) => getItem(collectionId, Number(itemId))(state));
    console.log('item : ', item);
    const   currentUser  = useSelector((state) => selectCurrentUser(state));
    console.log('User  : ', currentUser);
    const dispatch = useDispatch();
    const history = useHistory();

    const [size , setSize] = useState('Medium');
    const [imageUrl] = useState(item[0].imageUrl);
    const [name] = useState(item[0].name);
    const [price] = useState(item[0].price);
    const [id] = useState(item[0].id);
    const [ user] = useState(currentUser);


    const onSizeChange = (event) => {
       setSize(event.target.value);
    };

    const addItem = () => {
        user ? 
           dispatch(addCartItem({ id : id, name : name,  imageUrl : imageUrl, price : price, size : size}))
        :
            history.push('/signin'); 
    }

    return(
        <ItemContainer>
            <Product>
                <img src={imageUrl} alt=''/>
                <span className='name'>{name}</span>
            </Product>

            <ProductInfoContainer>
            <ItemSize onChange={onSizeChange} />
            <span className='Quantity'>Quantity : </span>
                <ProductPrice>Price : ${price}</ProductPrice>
                <Button onClick={() => addItem() } inverted > Add Item </Button>
            </ProductInfoContainer>
        </ItemContainer>
    );
};
export default ItemPage;