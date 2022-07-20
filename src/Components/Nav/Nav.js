import React, { useState} from 'react';
import Modal from './Modal';
// import Modal from './Modal';
import classes from './Nav.module.css'



function Nav(props) {

      const [modalState, setModalState] = useState(true)

      function modalHandler(event){
            event.preventDefault()
setModalState(false)
      }

      function onCancelHandler(event){
            event.preventDefault()
setModalState(true)
      }
      return (
            <>
      {!modalState && <Modal onCancel={onCancelHandler}/>}
            <div className={classes.nav} onClick={modalHandler}>
                  <h1>YouR Meals </h1>
                  <div className={classes.modal}>
                       <p>Your Cart</p>
                       <div className={classes.num}>
                        <h3 style={{textAlign: 'center'}}>0</h3>
                        </div>
                       
                        </div>
            </div>
         
            </>
      );
}

export default Nav;
