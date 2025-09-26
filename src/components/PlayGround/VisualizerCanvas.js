import React, { useEffect, useRef } from "react";

export default function VisualizerCanvas({ steps, currentStep, width, height }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Clear canvas
    ctx.clearRect(0, 0, width, height);

    if (!steps || !steps[currentStep]) return;

    const step = steps[currentStep];

    // Example: draw linked list nodes
    if (step.action === "highlightNode") {
      ctx.fillStyle = "orange";
      ctx.fillRect(50 + step.index * 60, 100, 50, 50);
    }

    if (step.action === "createNode") {
      ctx.fillStyle = "green";
      ctx.fillRect(50 + (steps.length + 1) * 60, 100, 50, 50);
    }

    if (step.action === "insertNode") {
      ctx.fillStyle = "blue";
      ctx.fillRect(50 + step.index * 60, 100, 50, 50);
    }
  }, [steps, currentStep, width, height]);

  return <canvas ref={canvasRef} width={width} height={height} className="w-full border border-gray-600 rounded" />;
}
