import React from 'react';
import classes from './Img.module.css'
import img from './meals-react.jpg'



function Img(props) {
      return (
            <>
            <div>
                 <img src={img} className={classes.img}></img> 
                 </div>
            </>
      );
}

export default Img;