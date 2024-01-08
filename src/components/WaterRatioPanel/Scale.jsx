import React from 'react';
import { ScaleItem, ScaleWr } from './Scale_styled';

export const Scale = ({ minValue, maxValue, step, value }) => {
  const scaleItems = [];

  for (let i = minValue; i <= maxValue; i += step) {
    scaleItems.push(
      <ScaleItem
        key={i}
        // className={`scale-item ${i === value ? 'active' : ''}`}
      >
        {i}
      </ScaleItem>
    );
  }

  return <ScaleWr>{scaleItems}</ScaleWr>;
};
