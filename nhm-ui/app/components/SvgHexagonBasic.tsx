// app/components/SvgHexagon.tsx
export default function SvgHexagonBasic() {
  const size = 50;
  const center = { x: 50, y: 50 };
  
  // Calculate the 6 points of a pointy-topped hexagon
  const points = Array.from({ length: 6 }).map((_, i) => {
    const angleDeg = 60 * i - 30;
    const angleRad = (Math.PI / 180) * angleDeg;
    const x = center.x + size * Math.cos(angleRad);
    const y = center.y + size * Math.sin(angleRad);
    return `${x},${y}`;
  }).join(' ');

  return (
    <svg width="100" height="100" className="border border-gray-600 rounded">
      <polygon 
        points={points} 
        fill="#fcd34d" 
        stroke="#d97706" 
        strokeWidth="2" 
      />
    </svg>
  );
}