import React from 'react';
import classes from './Modal.module.css'

function Modal(props) {
      return (
            <div className={classes.backdrop}>
            <div className={classes.modal}>
                  
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

      );
}

export default Modal;