

const DemoSelector = ({ demos, selectedDemo, setSelectedDemo }) => {
  return (
    <div className="demo-selector">
      <label>Select Demo: </label>
      <select
        value={selectedDemo}
        onChange={(e) => setSelectedDemo(e.target.value)}
      >
        {demos.map((demo) => (
          <option key={demo} value={demo}>
            {demo}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DemoSelector;
