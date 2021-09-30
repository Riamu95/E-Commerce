import Button from '../Button/Button.component';
import './CartDropdown.styles.scss';
import { connect  } from 'react-redux';
import CartItem   from '../Cart-Item/Cart-Item.component';
import { selectCartItems } from '../../Redux/Cart/cart.selectors';
const CartDropdown = ({items}) => 
{
    return(
        <div className='cart-dropdown'>
           <div className='cart-items'>
            {
                items.map( item => <CartItem key={item.id} item={item}/>)
            }
            </div>
            <Button>CHECKOUT</Button>
        </div>
    );
};

const mapStateToProps = state => ({
    items : selectCartItems(state)
});

export default connect(mapStateToProps, null)(CartDropdown);