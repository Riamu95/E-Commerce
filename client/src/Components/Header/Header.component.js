import React from "react";
import { useLocation } from "react-router-dom";
import {
  HeaderContainer,
  LogoContainer,
  Options,
  Option,
} from "./Header.styles";
import { ReactComponent as Logo } from "../../Assets/crown.svg";
import CartIcon from "../Cart-icon/Cart-icon.component";

import { useSelector, useDispatch } from "react-redux";
import CartDropdownComponent from "../CartDropdown/CartDropdown.component";
import { selectCurrentUser } from "../../Redux/User/user.selector";
import { selectCartHidden } from "../../Redux/Cart/cart.selectors";
import { onSetCartHidden } from "../../Redux/Cart/cart-actions";
import { UserSignOutStart } from "../../Redux/User/user-actions";

const Header = () => {
  const path = useLocation().pathname;

  const onSignOutClick = () => {
    dispatch(UserSignOutStart());
    dispatch(onSetCartHidden());
  };

  const currentUser = useSelector((state) => selectCurrentUser(state));
  const hidden = useSelector((state) => selectCartHidden(state));
  const dispatch = useDispatch();

  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo className="logo" />
      </LogoContainer>
      <Options>
        {currentUser && path === "/shop" ? null : (
          <Option to="/shop"> SHOP </Option>
        )}
        <Option to="/contact"> CONTACT </Option>
        {currentUser ? (
          <Option as="div" onClick={() => onSignOutClick()} to="/shop">
            {" "}
            SIGN OUT{" "}
          </Option>
        ) : (
          <Option to="/signIn"> SIGN IN </Option>
        )}

        {currentUser ? <CartIcon /> : null}
      </Options>
      {hidden ? null : <CartDropdownComponent />}
    </HeaderContainer>
  );
};
export default Header;
