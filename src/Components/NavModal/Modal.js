import React, {useContext} from 'react';
import classes from './Modal.module.css'
import CartItems from './CartItems';
import CartCtx from '../store/cart-context';

function Modal(props) {
      const itemsContext = useContext(CartCtx)

      const cartItemAddHandler = (item) => {
itemsContext.addItem({...item, amount: 1})
      }

      const cartItemRemoveHandler = (id) => {
      console.log('removed item')      
      }


      const cartItem = <div>{itemsContext.items.map((item) => ( <CartItems
            key={item.id}
              name={item.name}
              amount={item.amount}
              price={item.price}
              onRemove={cartItemRemoveHandler.bind(null, item.id)}
              onAdd={cartItemAddHandler.bind(null, item)}
            />

      ))}</div>;
    
      return (
            <>
           
            <div className={classes.backdrop}>
            <div className={classes.modal}>
            {cartItem}
                  <div className={classes.heading}>
                        <h1>Total Amount</h1>
                        <h1>$0.00</h1>
                        </div>
                        <div className={classes.btnSection}>
                       <button className={classes.modalBtn} onClick={props.onCancel}>Close</button>
                       <button className={classes.modalBtn}>Order</button>
                        </div>
            </div>
            </div>
            </>
      );
}

export default Modal;