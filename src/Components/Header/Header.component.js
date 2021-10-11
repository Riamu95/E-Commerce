import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HeaderContainer, LogoContainer, Options, Option, LogoDiv } from './Header.styles';
import { ReactComponent as Logo} from '../../Assets/crown.svg';
import  CartIcon from '../Cart-icon/Cart-icon.component';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import CartDropdownComponent from '../CartDropdown/CartDropdown.component';
import { selectCurrentUser } from '../../Redux/User/user.selector';
import { selectCartHidden } from '../../Redux/Cart/cart.selectors';

const Header = ({currentUser, hidden}) => 
{
    const path =  useLocation().pathname;
    return(
        
        <HeaderContainer>
            <LogoContainer to="/">
                    <Logo className="logo" />
            </LogoContainer>
           <Options>
                {
                    currentUser && path === '/shop' ? null :  <Option to="/shop"> SHOP </Option>
                }
                <Option to="/contact"> CONTACT </Option>
                {
                    currentUser ? <Option as='div' onClick={() => auth.signOut()} to="/shop"> SIGN OUT </Option> : 
                    <Option to="/signIn"> SIGN IN </Option>
                }

                {
                    currentUser ?   
                    <CartIcon/> : null
                }

            </Options>
                {
                    hidden ?  null : <CartDropdownComponent/>
                }
       </HeaderContainer>
    );
}

const mapStateToProps = state => ({
    currentUser : selectCurrentUser(state),
    hidden : selectCartHidden(state)
})

export default connect(mapStateToProps,null)(Header);