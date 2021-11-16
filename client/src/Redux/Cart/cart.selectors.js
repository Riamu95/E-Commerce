import { createSelector } from 'reselect';

const selectCart = state =>  state.cart;

export  const selectCartItems = createSelector([selectCart], cart => cart.cartItems);
export const selectCartHidden = createSelector([selectCart], cart => cart.hidden);

export const selectCarItemsCount = createSelector([selectCartItems], 
    cartItems => cartItems.reduce((accumulatedCount, cartItem) => accumulatedCount + cartItem.quantity,0)
);

export const selectCartPrice = createSelector([selectCartItems], (cart) => 
    cart.reduce((accumulatedValue, cartItem) => accumulatedValue + cartItem.price * cartItem.quantity,0)
);