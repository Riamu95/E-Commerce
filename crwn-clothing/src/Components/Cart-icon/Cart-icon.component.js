import React from 'react';
import { ReactComponent as ShoppingIcon} from '../../Assets/shopping-bag.svg';
import './Cart-icon.styles.scss';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../Redux/Cart/cart-actions';
import { selectCarItemsCount } from '../../Redux/Cart/cart.selectors';

const CartIcon = ({itemCount, toggleCartHidden}) =>  {
    return(
        <div className='cart-icon' onClick = {toggleCartHidden }>
            <ShoppingIcon className='shopping-icon' />
                <span className='item-count'> {itemCount} </span>
            </div>
    );   
};

const mapDispatchtoProps = (dispatch) => ({
    toggleCartHidden : () => dispatch(toggleCartHidden())
});

const mapStateToProps = state => 
({
    itemCount : selectCarItemsCount(state)
});

export default connect (mapStateToProps, mapDispatchtoProps)(CartIcon);

