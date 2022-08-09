import React from 'react';
import classes from './Card.module.css'

function Card(props) {
      return (
            <div className={classes.card}>
                  <h1>Delicious Food Delivered to You</h1>
                  <p>Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home.</p>
            <p>All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!</p>
            </div>
      );
}

export default Card;