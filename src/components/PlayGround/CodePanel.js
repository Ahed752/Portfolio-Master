import React from "react";

export default function CodePanel({ codeLines, currentStep }) {
  return (
    <pre className="bg-gray-900 text-green-400 p-4 rounded overflow-x-auto">
      {codeLines.map((line, i) => (
        <div
          key={i}
          className={i === currentStep ? "bg-gray-700 px-1 rounded" : ""}
        >
          {line}
        </div>
      ))}
    </pre>
  );
}
