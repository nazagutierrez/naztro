"use client";

import { useEffect, useRef, useState } from "react";

const normalChars = [".", ",", "+", "*", "?", "^", "-", "~", ":", ";"];
const hoverChars = ["@", "#", "$", "%", "&", "8", "0", "W", "M", "X", "O", "Q"];

export default function AsciiLogo() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [grid, setGrid] = useState<{ isLogo: boolean; char: string; x: number; y: number }[][]>([]);
  const spanRefs = useRef<(HTMLSpanElement | null)[][]>([]);
  const activeTimeouts = useRef(new Map<string, NodeJS.Timeout>());
  const lastHoveredCell = useRef<{ x: number; y: number } | null>(null);

  useEffect(() => {
    generateAscii();
  }, []);

  const generateAscii = () => {
    const img = new Image();
    img.src = "/naztro.svg"; 

    img.onload = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const width = 110; // Balanceado para no saturar el DOM (antes 140)
      const height = 110;

      canvas.width = width;
      canvas.height = height;

      ctx.clearRect(0, 0, width, height);
      ctx.drawImage(img, 0, 0, width, height);

      const data = ctx.getImageData(0, 0, width, height).data;
      const newGrid = [];
      const newRefs: (HTMLSpanElement | null)[][] = [];

      let gridY = 0;
      for (let y = 0; y < height; y += 2) {
        const row = [];
        const refRow = [];
        for (let x = 0; x < width; x++) {
          const index = (y * width + x) * 4;
          const alpha = data[index + 3];

          if (alpha > 50) {
            const randomChar = normalChars[Math.floor(Math.random() * normalChars.length)];
            row.push({ isLogo: true, char: randomChar, x, y: gridY });
          } else {
            row.push({ isLogo: false, char: " ", x, y: gridY });
          }
          refRow.push(null);
        }
        newGrid.push(row);
        newRefs.push(refRow);
        gridY++;
      }

      spanRefs.current = newRefs;
      setGrid(newGrid);
    };
  };

  // Efecto orgánico de matrix (movimiento de fondo)
  useEffect(() => {
    const interval = setInterval(() => {
      if (grid.length === 0) return;
      
      // Aumentamos la cantidad de caracteres que mutan a la vez
      for(let i = 0; i < 100; i++) {
         const y = Math.floor(Math.random() * grid.length);
         const x = Math.floor(Math.random() * grid[0].length);
         const cell = grid[y][x];
         if (cell.isLogo) {
             const span = spanRefs.current[y]?.[x];
             if (span && !activeTimeouts.current.has(`${x},${y}`)) {
                 span.textContent = normalChars[Math.floor(Math.random() * normalChars.length)];
             }
         }
      }
    }, 80); // Reducimos el tiempo de actualización para que sea mucho más rápido

    return () => clearInterval(interval);
  }, [grid]);

  const handleMouseOver = (targetX: number, targetY: number) => {
    // Evitar recalcular si el mouse todavía está en la misma celda
    if (lastHoveredCell.current?.x === targetX && lastHoveredCell.current?.y === targetY) {
      return;
    }
    lastHoveredCell.current = { x: targetX, y: targetY };

    const radius = 2; // Radio menor para evitar modificar demasiados nodos
    
    for (let dy = -radius; dy <= radius; dy++) {
      for (let dx = -radius; dx <= radius; dx++) {
        // Distancia circular
        if (dx * dx + dy * dy <= radius * radius) {
          const x = targetX + dx;
          const y = targetY + dy;
          
          if (y >= 0 && y < grid.length && x >= 0 && x < grid[0].length) {
            const cell = grid[y][x];
            if (cell.isLogo) {
              const span = spanRefs.current[y][x];
              if (span) {
                // Manipulación DOM rápida sin text-shadow ni transform (las propiedades más lentas)
                span.style.transitionDuration = '0ms';
                span.style.color = 'white';
                span.style.fontWeight = 'bold';
                span.textContent = hoverChars[Math.floor(Math.random() * hoverChars.length)];

                const key = `${x},${y}`;
                if (activeTimeouts.current.has(key)) {
                  clearTimeout(activeTimeouts.current.get(key)!);
                }

                const timeout = setTimeout(() => {
                  if (span) {
                    span.style.transitionDuration = '500ms';
                    span.style.color = '';
                    span.style.fontWeight = '';
                    span.textContent = normalChars[Math.floor(Math.random() * normalChars.length)];
                  }
                  activeTimeouts.current.delete(key);
                }, 50);

                activeTimeouts.current.set(key, timeout);
              }
            }
          }
        }
      }
    }
  };

  return (
    <div 
      className="relative inline-flex flex-col items-center justify-center p-8 rounded-3xl overflow-hidden group transition-all duration-500"
    >
      <canvas ref={canvasRef} className="hidden" />

      <div
        className="relative z-10 font-mono text-[6px] leading-[6px] sm:text-[7px] sm:leading-[7px] select-none text-[#85acff]"
        style={{
          letterSpacing: "-0.5px", // Compensa el ancho del carácter para corregir el estiramiento horizontal
        }}
      >
        {grid.map((row, y) => (
          <div key={y} className="flex whitespace-pre">
            {row.map((cell, x) => (
              <span
                key={`${x}-${y}`}
                ref={(el) => {
                  if (spanRefs.current[y]) {
                    spanRefs.current[y][x] = el;
                  }
                }}
                onMouseOver={() => cell.isLogo ? handleMouseOver(x, y) : undefined}
                className={`transition-colors duration-[500ms] inline-block ${!cell.isLogo ? "opacity-0" : ""}`}
              >
                {cell.char}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}