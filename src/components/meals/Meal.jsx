import React from 'react';
import styled from 'styled-components';
import MealItem from './MealItem';

const MealsContainer = styled.section`
  width: 100%;
  height: 100vh;
  background-color: #333;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MealsContent = styled.div`
  max-width: 60rem;
  width: 90%;
  background-color: white;
  padding: 1rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
`;

const DUMMY_MEALS = [
  {
    id: 1,
    title: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: 2,
    title: "Schnitzel",
    description: "A german specialty!",
    price: 16.0,
  },
  {
    id: 3,
    title: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: 4,
    title: "Green Bowl",
    description: "Healthy...and green...",
    price: 19.99,
  },
];

const Meals = () => {
  return (
    <MealsContainer>
      <MealsContent>
        {DUMMY_MEALS.map((meal) => (
          <MealItem
            key={meal.id}
            id={meal.id}
            title={meal.title}
            description={meal.description}
            price={meal.price}
          />
        ))}
      </MealsContent>
    </MealsContainer>
  );
};

export default Meals;
