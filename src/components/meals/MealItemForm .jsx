import React, { useState, useRef } from 'react';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  align-items: center;
`;

const AmountLabel = styled.label`
  font-weight: bold;
  margin-right: 0.5rem;
  color: white;
  cursor: pointer;
`;

const AmountInput = styled.input`
  width: 3rem;
  margin-right: 1rem;
  padding: 0.25rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  text-align: center;
`;

const AddButton = styled.button`
  font: inherit;
  cursor: pointer;
  background-color: #8a2b06;
  color: white;
  border: 1px solid #8a2b06;
  padding: 0.5rem 1.5rem;
  border-radius: 25px;
  font-weight: bold;
  &:hover,
  &:active {
    background-color: #5a1a01;
    border-color: #5a1a01;
  }
`;

const MealItemForm = ({ id }) => {
  const [amount, setAmount] = useState(1);
  const amountInputRef = useRef();

  const focusInputHandler = () => {
    amountInputRef.current.focus();
  };

  return (
    <Form>
      <AmountLabel htmlFor={`amount_${id}`} onClick={focusInputHandler}>
        Amount
      </AmountLabel>
      <AmountInput
        ref={amountInputRef}
        id={`amount_${id}`}
        type="number"
        min="1"
        max="5"
        step="1"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <AddButton type="submit">+ Add</AddButton>
    </Form>
  );
};

export default MealItemForm;
