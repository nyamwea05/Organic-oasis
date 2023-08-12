import React from 'react';
import styled from 'styled-components';
import {Link} from "react-router-dom"

const Categories = () => {
  // Categories data with emojis
  const categoriesData = [
    { name: 'Meat', emoji: '🥩' },
    { name: 'Beverage', emoji: '🍹' },
    { name: 'Bakery', emoji: '🍞' },
    { name: 'Vegetables', emoji: '🥬' },
    { name: 'Cereals', emoji: '🍚' },
    { name: 'Species', emoji: '🧂' },
    { name: 'Dairy', emoji: '🧀' },
  ];

  // Styled Circle component
  const Circle = styled.div`
    width: 2cm;
    height: 2cm;
    background-color: white;
    border-radius: 50%;
    margin: 75px;
    border: 2px solid black;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    font-size: 1.5rem; /* Adjust the font size as needed */
    line-height: 1.5rem; /* Adjust the line height to match the font size */
  `;

  // Styled Container component
  const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  `;

  // Styled CategoryName component
  const CategoryName = styled.div`
  font-weight: bold;
  margin-top: 1.5cm; /* Move up by 1 cm */
  margin-left: 1.4cm; /* Move to the right by 1 cm */
  transform: translate(1cm, -1cm); /* Apply the translation */
  font-size: 1.2rem; /* Increase the font size */
  color: black; /* Set the text color to black */
`;

  return (
    <div>
      <h1 style={{ color: '#19C048', textAlign: 'center' }}>Categories</h1>
      <Container>
        {categoriesData.map((category) => (
          <div key={category.name}>
            <Link to="/products">
            <Circle>{category.emoji}</Circle>
            <CategoryName>{category.name}</CategoryName>
            </Link>

          </div>
        ))}
      </Container>
    </div>
  );
};

export default Categories;
