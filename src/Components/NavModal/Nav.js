import React, { useContext, useState} from 'react';
import Modal from './Modal';
// import Modal from './Modal';
import classes from './Nav.module.css'
import CartCtx from '../store/cart-context';


function Nav(props) {
      const [modalState, setModalState] = useState(true)

      const amountCtx = useContext(CartCtx)

      const numOfCartItems = amountCtx.items.reduce((currNumber, item) => {
            return currNumber + item.amount
      }, 0);
     



      function modalHandler(event){
            event.preventDefault()
setModalState(false)
      }

      function onCancelHandler(event){
            event.preventDefault()
setModalState(true)
// console.log(numOfCartItems)
      }
      return (
            <>
      {!modalState && <Modal onCancel={onCancelHandler}/>}
            <div className={classes.nav} onClick={modalHandler}>
                  <h1>YouR Meals </h1>
                  <div className={classes.modal}>
                       <p>Your Cart</p>
                       <div className={classes.num}>
                        <h3 style={{textAlign: 'center'}}>{numOfCartItems}</h3>
                        </div>
                       
                        </div>
            </div>
         
            </>
      );
}

export default Nav;
