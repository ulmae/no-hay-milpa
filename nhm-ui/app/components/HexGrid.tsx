// app/components/HexGrid.tsx
'use client';
import SvgHexagon from './SvgHexagon';
import { useState } from 'react';
import { generateRandomBoard } from './utils';

export default function HexGrid() {
  const hexSize = 50;  // Size of the actual hex tile
  const centerOfCanvas = { x: 300, y: 300 }; // Reference point to insert the grid

  // Initialize the state using our imported logic
  const [boardLayout, setBoardLayout] = useState(generateRandomBoard());

  return (
    <div className="flex flex-col items-center gap-6">
      
      <button 
        onClick={() => setBoardLayout(generateRandomBoard())}
        className="px-6 py-2 bg-blue-600 text-white rounded font-bold hover:bg-blue-700"
      >
        Randomize Board
      </button>

      <svg width="600" height="600" className="bg-gray-800 rounded-xl shadow-lg">
        {boardLayout.map((hex, index) => {
          const xOffset = hexSize * Math.sqrt(3) * (hex.q + hex.r / 2);
          const yOffset = hexSize * (3 / 2) * hex.r;

          return (
            <SvgHexagon 
              key={`${hex.q}-${hex.r}`} 
              x={centerOfCanvas.x + xOffset} 
              y={centerOfCanvas.y + yOffset} 
              size={hexSize} 
              color={hex.color} 
            />
          );
        })}
      </svg>
    </div>
  );
}