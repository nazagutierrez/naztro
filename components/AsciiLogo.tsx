"use client";

import { useEffect, useRef } from "react";

const normalChars = [".", ",", "+", "*", "?", "^", "-", "~", ":", ";"];
const hoverChars = ["@", "#", "$", "%", "&", "8", "0", "W", "M", "X", "O", "Q"];

export default function AsciiLogo() {
  const srcCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const displayCanvasRef = useRef<HTMLCanvasElement | null>(null);
  
  const gridRef = useRef<{ isLogo: boolean; char: string; hoverTime: number }[][]>([]);
  const mousePosRef = useRef<{ x: number; y: number } | null>(null);
  const animationRef = useRef<number>(0);

  useEffect(() => {
    const img = new Image();
    img.src = "/naztro.svg"; 

    img.onload = () => {
      const srcCanvas = srcCanvasRef.current;
      const displayCanvas = displayCanvasRef.current;
      if (!srcCanvas || !displayCanvas) return;
      
      const ctx = srcCanvas.getContext("2d", { willReadFrequently: true });
      const dCtx = displayCanvas.getContext("2d");
      if (!ctx || !dCtx) return;

      const width = 110; 
      const height = 110;

      srcCanvas.width = width;
      srcCanvas.height = height;

      ctx.clearRect(0, 0, width, height);
      ctx.drawImage(img, 0, 0, width, height);

      const data = ctx.getImageData(0, 0, width, height).data;
      const newGrid = [];

      for (let y = 0; y < height; y += 2) {
        const row = [];
        for (let x = 0; x < width; x++) {
          const index = (y * width + x) * 4;
          const alpha = data[index + 3];

          if (alpha > 50) {
            const randomChar = normalChars[Math.floor(Math.random() * normalChars.length)];
            row.push({ isLogo: true, char: randomChar, hoverTime: 0 });
          } else {
            row.push({ isLogo: false, char: " ", hoverTime: 0 });
          }
        }
        newGrid.push(row);
      }

      gridRef.current = newGrid;

      // Internal resolution for sharpness
      const cols = width;
      const rows = height / 2;
      const charHeight = 16;
      // Para evitar que se vea estirado, hacemos que charWidth sea exactamente la mitad
      // de charHeight (dado que hay el doble de columnas que de filas 110x55)
      const charWidth = 8; 
      const fontSize = 14;

      displayCanvas.width = cols * charWidth;
      displayCanvas.height = rows * charHeight;

      let lastTime = Date.now();

      const draw = () => {
        dCtx.clearRect(0, 0, displayCanvas.width, displayCanvas.height);
        dCtx.textBaseline = "top";

        const grid = gridRef.current;
        const now = Date.now();

        // Update random chars occasionally to simulate the matrix effect
        if (now - lastTime > 80) {
          for(let i = 0; i < 150; i++) {
             const ry = Math.floor(Math.random() * grid.length);
             const rx = Math.floor(Math.random() * grid[0].length);
             const cell = grid[ry][rx];
             if (cell.isLogo && now - cell.hoverTime > 500) {
                 cell.char = normalChars[Math.floor(Math.random() * normalChars.length)];
             }
          }
          lastTime = now;
        }

        // Apply mouse hover
        const mousePos = mousePosRef.current;
        if (mousePos) {
           const rect = displayCanvas.getBoundingClientRect();
           const scaleX = displayCanvas.width / rect.width;
           const scaleY = displayCanvas.height / rect.height;
           
           const canvasX = mousePos.x * scaleX;
           const canvasY = mousePos.y * scaleY;

           const mx = Math.floor(canvasX / charWidth);
           const my = Math.floor(canvasY / charHeight);
           
           const radius = 3;
           for (let dy = -radius; dy <= radius; dy++) {
             for (let dx = -radius; dx <= radius; dx++) {
               if (dx * dx + dy * dy <= radius * radius) {
                 const x = mx + dx;
                 const y = my + dy;
                 if (y >= 0 && y < grid.length && x >= 0 && x < grid[0].length) {
                   const cell = grid[y][x];
                   if (cell.isLogo) {
                     cell.hoverTime = now;
                     cell.char = hoverChars[Math.floor(Math.random() * hoverChars.length)];
                   }
                 }
               }
             }
           }
        }

        // Render grid
        for (let y = 0; y < grid.length; y++) {
          for (let x = 0; x < grid[y].length; x++) {
            const cell = grid[y][x];
            if (!cell.isLogo) continue;

            if (now - cell.hoverTime < 500) {
              dCtx.fillStyle = "#a3bef1"; // celeste claro (tailwind sky-200)
              dCtx.font = `bold ${fontSize + 2}px monospace`;
            } else {
              dCtx.fillStyle = "#85acff";
              dCtx.font = `${fontSize}px monospace`;
            }

            dCtx.fillText(cell.char, x * charWidth, y * charHeight);
          }
        }

        animationRef.current = requestAnimationFrame(draw);
      };

      draw();
    };

    return () => {
      cancelAnimationFrame(animationRef.current);
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mousePosRef.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    };
  };

  const handleMouseLeave = () => {
    mousePosRef.current = null;
  };

  return (
    <div className="relative inline-flex flex-col items-center justify-center rounded-3xl overflow-hidden group transition-all duration-500 w-full max-w-full">
      <canvas ref={srcCanvasRef} className="hidden" />
      <canvas 
        ref={displayCanvasRef} 
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="cursor-default w-[350px] sm:w-[450px] md:w-[500px] h-auto object-contain transition-transform duration-500"
      />
    </div>
  );
}