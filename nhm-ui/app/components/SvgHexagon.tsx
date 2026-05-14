// app/components/SvgHexagon.tsx
interface SvgHexagonProps {
  x: number;
  y: number;
  size: number;
  color?: string; // Add the color prop here
}

export default function SvgHexagon({ x, y, size, color = "#fcd34d" }: SvgHexagonProps) {
  // Calculate the 6 points of a pointy-topped hexagon
  const points = Array.from({ length: 6 }).map((_, i) => {
    const angleDeg = 60 * i - 30;
    const angleRad = (Math.PI / 180) * angleDeg;
    const px = x + size * Math.cos(angleRad);
    const py = y + size * Math.sin(angleRad);
    return `${px},${py}`;
  }).join(' ');

  return (
    <g className="hover:opacity-80 cursor-pointer transition-opacity">
      <polygon 
        points={points} 
        fill={color} 
        stroke="#1f2937" // Changed to a dark gray for better contrast
        strokeWidth="3" 
      />
    </g>
  );
}