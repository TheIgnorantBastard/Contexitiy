// src/Components/templates/AddNode.js
import { useState } from "react";

const AddNode = ({ setNodes }) => {
  const [nodeLabel, setNodeLabel] = useState("");

  // Function to add a new node
  const handleAddNode = (e) => {
    e.preventDefault();
    if (!nodeLabel) return;

    const newNode = {
      id: Date.now().toString(),
      position: { x: Math.random() * 400, y: Math.random() * 400 },
      data: { label: nodeLabel }
    };

    setNodes((prevNodes) => [...prevNodes, newNode]);
    setNodeLabel(""); // Reset input field
  };

  return (
    <div>
      <h3>Add Node</h3>
      <form onSubmit={handleAddNode}>
        <input
          type="text"
          placeholder="Node Label"
          value={nodeLabel}
          onChange={(e) => setNodeLabel(e.target.value)}
          required
          style={{ width: "100%", marginBottom: "0.5rem" }}
        />
        <button type="submit">Add Node</button>
      </form>
    </div>
  );
};

export default AddNode;
