// app/components/constants.ts

export const terrainColors: Record<string, string> = {
    desert: "#F3D291", // Sand Tan
    wood: "#0D5B0B",   // Forest Green
    brick: "#D4420C",  // Brick Red
    sheep: "#32CD32",  // Sheep Green
    wheat: "#FAC938",  // Milpa Yellow
    ore: "#7A8C90",    // Ore Grey
};

export const availableTiles: string[] = [
    ...Array(4).fill('wood'),
    ...Array(4).fill('wheat'),
    ...Array(4).fill('sheep'),
    ...Array(3).fill('brick'),
    ...Array(3).fill('ore'),
    'desert'
];

export const standardCoordinates = [
  { q: 0, r: 0 }, { q: 1, r: -1 }, { q: 1, r: 0 }, { q: 0, r: 1 }, 
  { q: -1, r: 1 }, { q: -1, r: 0 }, { q: 0, r: -1 }, 
  { q: 0, r: -2 }, { q: 1, r: -2 }, { q: 2, r: -2 }, { q: 2, r: -1 }, 
  { q: 2, r: 0 }, { q: 1, r: 1 }, { q: 0, r: 2 }, { q: -1, r: 2 }, 
  { q: -2, r: 2 }, { q: -2, r: 1 }, { q: -2, r: 0 }, { q: -1, r: -1 }
];