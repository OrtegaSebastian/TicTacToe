import React from 'react';
import styled from 'styled-components';

const SquareWrapper = styled.button`
  width: 100px;
  height: 100px;
  border: 1px solid #000;
  background-color: #f9f9f9;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 36px;
  cursor: pointer;
  padding: 0;
  margin: 0;
`;

const X = () => <span>X</span>;
const O = () => <span>O</span>;

const Square = ({ value, onClick, playSound }) => {
  const handleClick = () => {
    onClick();
    playSound('clickSound.mp3'); // Play the click sound
  };

  return (
    <SquareWrapper onClick={handleClick}>
      {value === 'X' && <X />}
      {value === 'O' && <O />}
    </SquareWrapper>
  );
};

export default Square;

