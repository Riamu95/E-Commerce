import React from 'react';
import { ReactComponent as ShoppingIcon} from '../../Assets/shopping-bag.svg';
import './Cart-icon.styles.scss';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../Redux/Cart/cart-actions';

const CartIcon = ({toggleCartHidden}) =>  {
    return(
        <div className='cart-icon' onClick = {toggleCartHidden }>
            <ShoppingIcon className='shopping-icon' />
                <span className='item-count'> 0 </span>
            </div>
    );   
};

const mapDispatchtoProps = (dispatch) => ({
    toggleCartHidden : () => dispatch(toggleCartHidden())
});



export default connect (null, mapDispatchtoProps)(CartIcon);

