import React from "react";

const DemoArea = ({ input, setInput, output, handleRun, handleReset }) => {
  return (
    <div className="demo-area">
      {/* Input */}
      <input
        type="text"
        placeholder="Type input here..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      {/* Buttons */}
      <div className="buttons">
        <button onClick={handleRun}>Run</button>
        <button onClick={handleReset}>Reset</button>
      </div>

      {/* Output */}
      {output && (
        <div className="output">
          <strong>Output:</strong> {output}
        </div>
      )}
    </div>
  );
};

export default DemoArea;
