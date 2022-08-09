import React, { useContext } from 'react';
// import Info from '../store/Info';
import Foods from './Foods';
import classes from './Wrapper.module.css'
function Wrapper(props) {
      // const ctx = useContext(Info)

    const Items = [
            {
            name: 'Sushi',
            desc: 'Finest fish and veggies',
            price: '29.99',
            id: '0.889'
      },   {
            name: 'Schinezel',
            desc: 'A german specialty!',
            price: '16.5',
            id: '0.489'
      },   {
            name: 'Barbecue Burger',
            desc: 'American, raw, meatys',
            price: '12.99',
            id: '0.789'
      },
      {
            name: 'Green Bowl',
            desc: 'Healthy...and green...',
            price: '18.99',
            id: '0.289'
      },
      ]

// const incrementHandler =() => {
// console.log(id)
// }

      return (
            <div className={classes.wrapp}>
               
                <div className={classes.box}>
                  <Foods 
                  items={Items}  id={Items.id} key={Items.id} price={Items.price}
                  
                  />
                </div>
            </div>
      );
}

export default Wrapper;