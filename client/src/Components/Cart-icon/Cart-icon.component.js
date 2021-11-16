import React from 'react';
import { ReactComponent as ShoppingIcon} from '../../Assets/shopping-bag.svg';
import './Cart-icon.styles.scss';
import { useSelector, useDispatch } from 'react-redux';
import { toggleCartHidden } from '../../Redux/Cart/cart-actions';
import { selectCarItemsCount } from '../../Redux/Cart/cart.selectors';

const CartIcon = () =>  {

    const itemCount = useSelector((state) => selectCarItemsCount(state));
    const dispatch = useDispatch();

    return(
        <div className='cart-icon' onClick = {() => dispatch(toggleCartHidden())}>
            <ShoppingIcon className='shopping-icon' />
                <span className='item-count'> {itemCount} </span>
            </div>
    );   
};

export default CartIcon;

