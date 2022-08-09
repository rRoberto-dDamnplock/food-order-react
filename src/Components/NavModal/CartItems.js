import React, {useContext} from 'react';
import CartCtx from '../store/cart-context';
import classes from './CartItems.module.css'
function CartItems(props) {
      const cartItemContext = useContext(CartCtx)
      return (
            <>
      <div className={classes.cart_items}>
                 <h2>Suchi<span>*2</span></h2>
                
                 <h2>Price:$29.99</h2>
                 <button>-Add</button>
              <button>-Remove</button>
                 </div>
                 </>
      );
}

export default CartItems;