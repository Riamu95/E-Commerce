import Button from '../Button/Button.component';
import './CartDropdown.styles.scss';
import { connect  } from 'react-redux';
import CartItem   from '../Cart-Item/Cart-Item.component';
import { selectCartItems } from '../../Redux/Cart/cart.selectors';
import { withRouter } from 'react-router-dom'; 
import { toggleCartHidden } from '../../Redux/Cart/cart-actions';

const CartDropdown = ({items, dispatch, history}) => 
{
    return(
        <div className='cart-dropdown'>
           <div className='cart-items'>
            {
                items.length ?
                items.map( item => <CartItem key={item.id} item={item}/>)
                : <span className='empty'>Your Cart Is Empty </span>
            }
            </div>
           <Button onClick={() => { history.push('/checkout') 
                                    dispatch(toggleCartHidden())
        }}>CHECKOUT</Button>
        </div>
    );
};

const mapStateToProps = state => ({
    items : selectCartItems(state)
});



export default withRouter(connect(mapStateToProps)(CartDropdown));