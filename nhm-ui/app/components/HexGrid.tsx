// app/components/HexGrid.tsx
import SvgHexagon from './SvgHexagon';

export default function HexGrid() {
  const hexSize = 50;
  const centerOfCanvas = { x: 300, y: 300 }; 

  // Define our terrain colors
  const terrainColors = {
    desert: "#EEBC59", // Sand Tan
    wood: "#0D5B0B",   // Forest Green
    brick: "#D4420C",  // Brick Red
    sheep: "#32CD32",  // Sheep Green
    wheat: "#FAC938",  // Milpa Yellow
    ore: "#71816D",    // Ore Grey
  };

  // Axial coordinates for the center and its 6 neighbors, now with colors
  const boardLayout = [
    { q: 0, r: 0, color: terrainColors.desert },   // Center
    { q: 1, r: -1, color: terrainColors.wood },    // Top Right
    { q: 1, r: 0, color: terrainColors.brick },    // Right
    { q: 0, r: 1, color: terrainColors.sheep },    // Bottom Right
    { q: -1, r: 1, color: terrainColors.wheat },   // Bottom Left
    { q: -1, r: 0, color: terrainColors.ore },     // Left
    { q: 0, r: -1, color: terrainColors.wood },    // Top Left
  ];

  return (
    <svg width="600" height="600" className="bg-gray-800 rounded-xl shadow-lg">
      {boardLayout.map((hex, index) => {
        const xOffset = hexSize * Math.sqrt(3) * (hex.q + hex.r / 2);
        const yOffset = hexSize * (3 / 2) * hex.r;

        return (
          <SvgHexagon 
            key={index} 
            x={centerOfCanvas.x + xOffset} 
            y={centerOfCanvas.y + yOffset} 
            size={hexSize} 
            color={hex.color} // Pass the color prop down
          />
        );
      })}
    </svg>
  );
}