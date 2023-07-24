import React, { useState } from 'react';
import styled from 'styled-components';
import Board from './Board';
import { Howl } from 'howler';

const GameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`;

const ResetButton = styled.button`
  margin-top: 20px;
  font-size: 16px;
  padding: 10px 20px;
  background-color: #f9f9f9;
  border: 2px solid #000;
  cursor: pointer;
`;

const Game = () => {
  const [boardKey, setBoardKey] = useState(0);

  const handleRestart = () => {
    setBoardKey((prevKey) => prevKey + 1);
  };

  const playSound = (soundFile) => {
    const sound = new Howl({
      src: [soundFile],
    });
    sound.play();
  };

  return (
    <GameWrapper>
      <Board key={boardKey} onRestart={handleRestart} playSound={playSound} />
      <ResetButton onClick={handleRestart}>Reset Board</ResetButton>
    </GameWrapper>
  );
};

export default Game;

