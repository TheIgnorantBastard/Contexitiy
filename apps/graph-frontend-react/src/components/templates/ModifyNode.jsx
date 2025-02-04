// src/Components/templates/ModifyNode.js
import { useState } from "react";

const ModifyNode = ({ nodes, setNodes }) => {
  const [selectedNodeId, setSelectedNodeId] = useState("");
  const [newLabel, setNewLabel] = useState("");

  // Function to update a node's label
  const handleModifyNode = (e) => {
    e.preventDefault();
    if (!selectedNodeId || !newLabel) return;

    setNodes((prevNodes) =>
      prevNodes.map((node) =>
        node.id === selectedNodeId ? { ...node, data: { label: newLabel } } : node
      )
    );

    setSelectedNodeId("");
    setNewLabel(""); // Reset form fields
  };

  return (
    <div>
      <h3>Modify Node</h3>
      <form onSubmit={handleModifyNode}>
        {/* Dropdown to select a node */}
        <select
          value={selectedNodeId}
          onChange={(e) => setSelectedNodeId(e.target.value)}
          required
          style={{ width: "100%", marginBottom: "0.5rem" }}
        >
          <option value="" disabled>Select a Node</option>
          {nodes.map((node) => (
            <option key={node.id} value={node.id}>
              {node.data.label} (ID: {node.id})
            </option>
          ))}
        </select>

        {/* Input to update node label */}
        <input
          type="text"
          placeholder="New Label"
          value={newLabel}
          onChange={(e) => setNewLabel(e.target.value)}
          required
          style={{ width: "100%", marginBottom: "0.5rem" }}
        />

        <button type="submit">Update Node</button>
      </form>
    </div>
  );
};

export default ModifyNode;
