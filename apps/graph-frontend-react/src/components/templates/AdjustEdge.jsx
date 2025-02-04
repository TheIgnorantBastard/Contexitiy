// src/Components/templates/AdjustEdge.js
import { useState } from "react";

const AdjustEdge = ({ nodes, edges, setEdges }) => {
  const [sourceNode, setSourceNode] = useState("");
  const [targetNode, setTargetNode] = useState("");

  // Function to add a new edge
  const handleAddEdge = (e) => {
    e.preventDefault();
    if (!sourceNode || !targetNode || sourceNode === targetNode) return;

    const newEdge = {
      id: Date.now().toString(),
      source: sourceNode,
      target: targetNode,
      animated: true,
      label: `${sourceNode} → ${targetNode}`
    };

    setEdges([...edges, newEdge]);
    setSourceNode("");
    setTargetNode(""); // Reset form fields
  };

  return (
    <div>
      <h3>Adjust Edge</h3>
      <form onSubmit={handleAddEdge}>
        {/* Dropdown to select source node */}
        <label>Source Node:</label>
        <select
          value={sourceNode}
          onChange={(e) => setSourceNode(e.target.value)}
          required
          style={{ width: "100%", marginBottom: "0.5rem" }}
        >
          <option value="" disabled>Select Source</option>
          {nodes.map((node) => (
            <option key={node.id} value={node.id}>
              {node.data.label} (ID: {node.id})
            </option>
          ))}
        </select>

        {/* Dropdown to select target node */}
        <label>Target Node:</label>
        <select
          value={targetNode}
          onChange={(e) => setTargetNode(e.target.value)}
          required
          style={{ width: "100%", marginBottom: "0.5rem" }}
        >
          <option value="" disabled>Select Target</option>
          {nodes.map((node) => (
            <option key={node.id} value={node.id}>
              {node.data.label} (ID: {node.id})
            </option>
          ))}
        </select>

        <button type="submit">Create Edge</button>
      </form>
    </div>
  );
};

export default AdjustEdge;
