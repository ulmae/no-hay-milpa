// app/page.tsx
import HexGrid from './components/HexGrid';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gray-900 text-white font-sans">
      <h1 className="text-3xl font-bold mb-8">Catan Board Prototype</h1>
      
      <div className="flex flex-col items-center gap-4">
        <p className="text-gray-400 mb-4">7-Hex Grid using Axial Coordinates</p>
        <HexGrid />
      </div>
    </main>
  );
}