import Button from '../Button/Button.component';
import './CartDropdown.styles.scss';
import { connect  } from 'react-redux';
import CartItem   from '../Cart-Item/Cart-Item.component';

const CartDropdown = ({items}) => 
{
    return(
        <div className='cart-dropdown'>
           <div className='cart-items'/>
            {
                items.map( item => <CartItem key={item.id} item={item}/>)
            }
            <Button> GO TO CHECKOUT </Button>
        </div>
    );
};

const mapStateToProps = ({cart: { cartItems }}) => ({
    items : cartItems
});

export default connect(mapStateToProps, null)(CartDropdown);