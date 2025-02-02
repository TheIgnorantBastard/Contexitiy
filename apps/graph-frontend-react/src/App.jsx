import React from 'react';
import ReactFlow from 'reactflow';
import 'reactflow/dist/style.css';

function App() {
  const initialNodes = [
    { id: '1', position: { x: 100, y: 100 }, data: { label: 'Node 1' } }
  ];
  const initialEdges = [];

  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <ReactFlow nodes={initialNodes} edges={initialEdges} />
    </div>
  );
}

export default App;
