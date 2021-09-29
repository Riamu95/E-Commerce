import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.style.scss';
import { ReactComponent as Logo} from '../../Assets/crown.svg';
import  CartIcon from '../Cart-icon/Cart-icon.component';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';

const Header = ({ currentUser }) => 
{
    const path =  useLocation().pathname;

    return(
        <div className="Header">
            <Link e="logo-container" to="/">
                    <Logo className="logo" />
            </Link>
            <div className="options">
                {
                    currentUser && path == '/shop' ? null :  <Link className="option" to="/shop"> SHOP </Link>
                }
                <Link className="option" to="/contact"> CONTACT </Link>
                {
                    currentUser ? <div className="option" onClick={() => auth.signOut()} to="/shop"> SIGN OUT </div> : 
                    <Link className="option" to="/signIn"> SIGN IN </Link>
                }

                {
                    currentUser ?   
                    <CartIcon/> : null
                }

            </div>
        </div>
    );
}

const mapStateToProps = (state) => ({
    currentUser : state.user.currentUser
})

export default connect(mapStateToProps)(Header);