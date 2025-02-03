// src/components/Layout.js
import React, { useState } from 'react';
import GraphEditor from './GraphEditor';

const Layout = () => {
  // This state will hold your nodes and edges.
  // We are moving the management of data here so that GraphEditor becomes display-only.
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);

  // This state tracks which template (form) is selected from the side nav.
  const [selectedTemplate, setSelectedTemplate] = useState('createNode');

  // State for the Create Node form
  const [newNodeLabel, setNewNodeLabel] = useState('');

  // --- Functions for the Create Node form ---

  const handleAddNode = (e) => {
    e.preventDefault();
    if (!newNodeLabel) return;
    const newNode = {
      id: Date.now(), // unique id
      label: newNodeLabel,
    };
    setNodes([...nodes, newNode]);
    setNewNodeLabel('');
  };

  // Placeholder functions for Edit Node and Edit Edge can be added later.
  // For now, we display a message indicating that these forms will go here.
  const renderForm = () => {
    if (selectedTemplate === 'createNode') {
      return (
        <div>
          <h3>Create Node</h3>
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
        </div>
      );
    } else if (selectedTemplate === 'editNode') {
      return (
        <div>
          <h3>Edit Node</h3>
          <p>Form for editing a node will go here.</p>
        </div>
      );
    } else if (selectedTemplate === 'editEdge') {
      return (
        <div>
          <h3>Edit Edge</h3>
          <p>Form for editing an edge will go here.</p>
        </div>
      );
    }
  };

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      {/* Side Navigation */}
      <nav
        style={{
          width: '200px',
          borderRight: '1px solid #ccc',
          padding: '1rem'
        }}
      >
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          <li
            style={{ marginBottom: '1rem', cursor: 'pointer' }}
            onClick={() => setSelectedTemplate('createNode')}
          >
            Create Node
          </li>
          <li
            style={{ marginBottom: '1rem', cursor: 'pointer' }}
            onClick={() => setSelectedTemplate('editNode')}
          >
            Edit Node
          </li>
          <li
            style={{ marginBottom: '1rem', cursor: 'pointer' }}
            onClick={() => setSelectedTemplate('editEdge')}
          >
            Edit Edge
          </li>
        </ul>
      </nav>

      {/* Main Content Area */}
      <div style={{ flex: 1, padding: '1rem', display: 'flex', flexDirection: 'column' }}>
        {/* Top Half: Form Area */}
        <div style={{ flex: 1, borderBottom: '1px solid #ccc', marginBottom: '1rem' }}>
          {renderForm()}
        </div>

        {/* Bottom Half: Graph Display Area */}
        <div style={{ flex: 1 }}>
          {/* Pass nodes and edges as props so GraphEditor can display them */}
          <GraphEditor nodes={nodes} edges={edges} />
        </div>
      </div>
    </div>
  );
};

export default Layout;
