import { availableTiles, standardCoordinates, terrainColors } from './constants';

// A generic function to shuffle any array
export function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// This function generates the input that the HexGrid component needs to draw the board
export function generateRandomBoard() {
  const shuffledTerrains = shuffleArray(availableTiles);
  
  return standardCoordinates.map((coord, index) => {
    const terrainName = shuffledTerrains[index];
    
    return {
      q: coord.q,
      r: coord.r,
      terrain: terrainName,
      color: terrainColors[terrainName]
    };
  });
}