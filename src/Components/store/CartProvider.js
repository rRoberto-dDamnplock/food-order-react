import React, { useReducer } from "react";
import CartCtx from "./cart-context";

const defaultCartState = {
  items: [],
  amount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    // this calculates the amount that is going to be shown in in the cart.
    // the state.totalAmount is zero, as mentionned above in the default cart state
    const updatedTotalAmount =state.totalAmount + action.item.price * action.item.amount;

    // this checks if the item already exists by checking the id of the item.
    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    const existingCartItem = state.items[existingItemIndex];
    let updatedItems;
    // this if code block checks if the there is a cart item.
    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }
    console.log(updatedItems)
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
    
  }
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCart = (item) => {
    dispatchCartAction({ type: "ADD_ITEM", item: item });
  };

  const removeItemToCart = (id) => {
    console.log("removing item from cart");
  };

  const CartContext = {
    items: cartState.items,
    totalAmount: cartState.amount,
    addItem: addItemToCart,
    removeItem: removeItemToCart,
  };
  return (
    <CartCtx.Provider value={CartContext}> {props.children} </CartCtx.Provider>
  );
};

export default CartProvider;
