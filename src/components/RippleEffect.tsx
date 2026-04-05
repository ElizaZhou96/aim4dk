import { useEffect, useRef } from 'react';
import { startRipple } from '../lib/webgl-ripple';

export default function RippleEffect() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (canvasRef.current) {
      startRipple(canvasRef.current);
    }
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 1000, // 强制覆盖一切！
        pointerEvents: 'none',
      }}
    />
  );
}
