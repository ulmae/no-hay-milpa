// app/components/CanvasHexagon.tsx
'use client'; // This is required for Next.js to use hooks and browser APIs

import { useEffect, useRef } from 'react';

export default function CanvasHexagon() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const size = 50;
    const center = { x: 50, y: 50 };

    // Clear the canvas before drawing (good practice for re-renders)
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Draw the hexagon
    ctx.beginPath();
    for (let i = 0; i < 6; i++) {
      const angleDeg = 60 * i - 30;
      const angleRad = (Math.PI / 180) * angleDeg;
      const x = center.x + size * Math.cos(angleRad);
      const y = center.y + size * Math.sin(angleRad);
      
      if (i === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    }
    ctx.closePath();
    
    // Style and fill
    ctx.fillStyle = '#fcd34d';
    ctx.fill();
    ctx.lineWidth = 2;
    ctx.strokeStyle = '#d97706';
    ctx.stroke();
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      width={100} 
      height={100} 
      className="border border-gray-600 rounded" 
    />
  );
}