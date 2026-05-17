// app/components/HexGrid.tsx
'use client'; 

import { useState, useEffect } from 'react';
import SvgHexagon from './SvgHexagon';
import { generateRandomBoard } from './utils'; 

export default function HexGrid() {
  const hexSize = 50;  
  const centerOfCanvas = { x: 300, y: 300 }; 

  // 1. Initialize with an empty array (fixes the hydration mismatch)
  const [boardLayout, setBoardLayout] = useState<any[]>([]);

  // 2. Generate the board only after the component mounts on the client
  useEffect(() => {
    setBoardLayout(generateRandomBoard());
  }, []);

  return (
    <div className="flex flex-col items-center gap-6">
      <button 
        onClick={() => setBoardLayout(generateRandomBoard())}
        className="px-6 py-2 bg-blue-600 text-white rounded font-bold hover:bg-blue-700"
      >
        Randomize Board
      </button>

      <svg width="600" height="600" className="bg-gray-800 rounded-xl shadow-lg">
        {/* 3. The map function will safely do nothing until useEffect populates the array */}
        {boardLayout.map((hex) => {
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