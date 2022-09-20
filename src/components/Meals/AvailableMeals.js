import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';
import { useEffect, useCallback, useState } from 'react';






const AvailableMeals = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const fetchMeals = async () => {
      setIsLoading(true);
      setError(null)
     
        const response = await fetch('https://react-http-63eaf-default-rtdb.firebaseio.com/meals.json');
if(!response.ok){
  throw new Error ('something went wrong pls try again later');
}
    
        const responseData = await response.json();
  
        const loadedMeals = [];
  
        for (const key in responseData) {
          loadedMeals.push({
            id: key,
            name: responseData[key].name,
            description: responseData[key].description,
            price: responseData[key].price,
          });
        }
  
        setMeals(loadedMeals);
        setIsLoading(false)
      
      
  
    
  }
  fetchMeals().catch((error) => {
    setIsLoading(false);
    setError(error.message);
  });
}, []);
 
  let content = <p></p>;

  
  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <p>Loading...</p>;
  }



  const mealsList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
        <section style={{textAlign: 'center'}}>{content}</section>
      </Card>
    </section>
  );
};

export default AvailableMeals;
