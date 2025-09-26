import React, { useState } from "react";
import DemoSelector from "./DemoSelector";
import Particle from "../Particle";
import DemoArea from "./DemoArea";
import VisualizerCanvas from "./VisualizerCanvas";
import CodePanel from "./CodePanel";
import { linkedListDemo } from "./demos/linkedList";
import balancedParanthesesDemo from "./demos/balancedParentheses";
import palindromeDemo from "./demos/palindrome";
import twoSumDemo from "./demos/twoSum";

const demos = {
  linkedList: linkedListDemo,
  balancedParantheses: balancedParanthesesDemo,
  palindrome: palindromeDemo,
  twoSum : twoSumDemo
};

export default function PlayGround() {
  const [selectedDemo, setSelectedDemo] = useState("linkedList");
  const [input, setInput] = useState("");
  const [currentStep, setCurrentStep] = useState(0);
  const [steps, setSteps] = useState([]);
  const [running, setRunning] = useState(false);

  const demo = demos[selectedDemo];

  const handleRun = () => {
    if (!input) return;
    const stepArray = demo.algorithmSteps(input);
    setSteps(stepArray);
    setCurrentStep(0);
    setRunning(true);
  };

  const handleReset = () => {
    setInput("");
    setSteps([]);
    setCurrentStep(0);
    setRunning(false);
  };

  const handleNextStep = () => {
    if (currentStep < steps.length - 1) setCurrentStep(currentStep + 1);
    else setRunning(false);
  };

  const handlePrevStep = () => {
    if (currentStep > 0) setCurrentStep(currentStep - 1);
  };

  return (
    <section className="resume-section">
      <Particle />
      <h1 className="playground-caution">
        ⚠ Caution: Under Construction ⚠
      </h1>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column: Controls */}
        <div className="lg:col-span-1 flex flex-col gap-4">
          <h1 className="text-2xl font-bold">Playground</h1>
          <p className="text-gray-300">{demo.description}</p>

          <DemoSelector
            demos={Object.keys(demos)}
            selectedDemo={selectedDemo}
            setSelectedDemo={setSelectedDemo}
          />

          <DemoArea
            input={input}
            setInput={setInput}
            handleRun={handleRun}
            handleReset={handleReset}
          />

          <div className="flex gap-2 mt-2">
            <button
              onClick={handlePrevStep}
              className="px-4 py-2 bg-gray-700 rounded hover:bg-gray-600"
            >
              Prev
            </button>
            <button
              onClick={handleNextStep}
              className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-500"
            >
              Next
            </button>
          </div>
        </div>

        {/* Middle Column: Canvas */}
        <div className="lg:col-span-2 bg-gray-800 rounded p-4">
          <VisualizerCanvas
            steps={steps}
            currentStep={currentStep}
            width={800}
            height={400}
          />
        </div>

        {/* Right Column: Code Panel */}
        <div className="lg:col-span-3 mt-4 lg:mt-0">
          <CodePanel
            codeLines={demo.code}
            currentStep={steps[currentStep]?.codeLine || 0}
          />
        </div>
      </div>
    </section>
  );
}
