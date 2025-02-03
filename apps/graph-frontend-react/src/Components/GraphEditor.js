// GraphEditor.js
import React, { useState } from 'react';

const GraphEditor = () => {
  // State to hold our nodes and edges
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);

  // State for the new node form
  const [newNodeLabel, setNewNodeLabel] = useState('');

  // State for the new edge form
  const [edgeSource, setEdgeSource] = useState('');
  const [edgeTarget, setEdgeTarget] = useState('');

  // Add a new node
  const handleAddNode = (e) => {
    e.preventDefault();
    if (!newNodeLabel) return; // simple validation
    const newNode = {
      id: Date.now(), // unique id generated from the current time
      label: newNodeLabel,
    };
    setNodes([...nodes, newNode]);
    setNewNodeLabel(''); // reset the input field
  };

  // Add a new edge
  const handleAddEdge = (e) => {
    e.preventDefault();
    // Ensure the source and target exist in the nodes list
    const sourceNode = nodes.find((node) => node.label === edgeSource);
    const targetNode = nodes.find((node) => node.label === edgeTarget);
    if (!sourceNode || !targetNode) {
      alert('Both source and target nodes must exist.');
      return;
    }
    const newEdge = {
      id: Date.now(), // unique id
      source: sourceNode.id,
      target: targetNode.id,
      label: `${edgeSource} → ${edgeTarget}`,
    };
    setEdges([...edges, newEdge]);
    setEdgeSource('');
    setEdgeTarget('');
  };

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Graph Editor</h2>

      {/* Form to add a new node */}
      <section style={{ marginBottom: '2rem' }}>
        <h3>Add New Node</h3>
        <form onSubmit={handleAddNode}>
          <input
            type="text"
            placeholder="Node Label"
            value={newNodeLabel}
            onChange={(e) => setNewNodeLabel(e.target.value)}
            required
          />
          <button type="submit">Add Node</button>
        </form>
      </section>

      {/* Form to add a new edge */}
      <section style={{ marginBottom: '2rem' }}>
        <h3>Add New Edge</h3>
        <form onSubmit={handleAddEdge}>
          <input
            type="text"
            placeholder="Source Node Label"
            value={edgeSource}
            onChange={(e) => setEdgeSource(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Target Node Label"
            value={edgeTarget}
            onChange={(e) => setEdgeTarget(e.target.value)}
            required
          />
          <button type="submit">Add Edge</button>
        </form>
      </section>

      {/* Display current nodes */}
      <section style={{ marginBottom: '2rem' }}>
        <h3>Current Nodes</h3>
        <ul>
          {nodes.map((node) => (
            <li key={node.id}>{node.label} (ID: {node.id})</li>
          ))}
        </ul>
      </section>

      {/* Display current edges */}
      <section>
        <h3>Current Edges</h3>
        <ul>
          {edges.map((edge) => (
            <li key={edge.id}>
              {edge.label} (Edge ID: {edge.id})
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default GraphEditor;
