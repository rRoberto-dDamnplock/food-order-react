import { useRef, useState, useContext } from "react";
import CartCtx from "../store/cart-context";
import AmountInput from "./AmountInput";
import classes from "./Foods.module.css";

const Foods = (props) => {
  const ctx = useContext(CartCtx)
  const amountInput = useRef();
//    const [numState, setNumState] = useState(0)

//    const onChangeHandler = (event) => {
        
//    }

  const onSubmitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInput.current.value;
    const enteredAmountInNum = +enteredAmount;

//     if(enteredAmount.trim().length === 0 || enteredAmountInNum< 1 || enteredAmountInNum > 5){
//           // setAmountIsValid(false)
//           return;
//     }
   
    let amount = enteredAmountInNum;
          ctx.addItem({
                id: props.id,
                name: props.name,
                amount: amount,
                price: props.price
          })

    console.log(enteredAmount);
    // setNumState(numState + 1)
  };

  return (
    <>
      {props.items.map((item) => (
        <div className={classes.foods} key={item.id}>
          <div className={classes.about}>
            <h3>{item.name}</h3>
            <p>{item.desc}</p>
            <p>{item.price}</p>
          </div>
          <div className={classes.about}>
            <div className={classes.amount}>

              <form onSubmit={onSubmitHandler}>
                <h4 style={{ marginRight: "3px" }}>Amount</h4>
               <AmountInput 
                       ref={amountInput}
                       label='Amount'
                       input={{
                           id: 'amount_' + item.id, // this changed!
                           type: 'number',
                           min: '1',
                           max: '5',
                           step: '1',
                           defaultValue: '1',
                       }}
               />
                <button className={classes.btnAdd}>+Add</button>
              </form>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Foods;
