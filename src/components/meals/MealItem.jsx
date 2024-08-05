import React from 'react';
import styled from 'styled-components';
import MealItemForm from './MealItemForm ';

const MealItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid #ffffff;
  background-color: gray;
  border-radius: 8px;
  margin: 0.5rem 0;
`;

const MealDescription = styled.div`
  flex: 1;
  color: #fff;
`;

const MealTitle = styled.h2`
  margin: 0;
  font-size: 1.25rem;
`;

const MealPrice = styled.div`
  font-size: 1.25rem;
  color: #ad5502;
  font-weight: bold;
`;

const MealItem = ({ id, title, description, price }) => {
  return (
    <MealItemContainer>
      <MealDescription>
        <MealTitle>{title}</MealTitle>
        <p>{description}</p>
        <MealPrice>${price.toFixed(2)}</MealPrice>
      </MealDescription>
      <MealItemForm id={id} />
    </MealItemContainer>
  );
};

export default MealItem;
