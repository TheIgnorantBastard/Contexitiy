// App.jsx
import { useState } from 'react';
import ReactFlow from 'reactflow';
import 'reactflow/dist/style.css';

function App() {
  const initialNodes = [
    { id: '1', position: { x: 100, y: 100 }, data: { label: 'Node 1' } }
  ];
  const initialEdges = [];

  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

  // Form state for adding a new node
  const [nodeLabel, setNodeLabel] = useState('');
  // Form state for adding a new edge
  const [edgeSource, setEdgeSource] = useState('');
  const [edgeTarget, setEdgeTarget] = useState('');

  // Function to add a new node
  const addNode = (e) => {
    e.preventDefault();
    if (!nodeLabel) return;
    const newNode = {
      id: Date.now().toString(),
      position: { x: Math.random() * 400, y: Math.random() * 400 },
      data: { label: nodeLabel }
    };
    setNodes((prevNodes) => [...prevNodes, newNode]);
    setNodeLabel('');
  };

  // Function to add a new edge
  const addEdge = (e) => {
    e.preventDefault();
    if (!edgeSource || !edgeTarget) return;

    const sourceExists = nodes.some((node) => node.id === edgeSource);
    const targetExists = nodes.some((node) => node.id === edgeTarget);
    if (!sourceExists || !targetExists) {
      alert("Source or target node not found. Check the node IDs below.");
      return;
    }

    const newEdge = {
      id: Date.now().toString(),
      source: edgeSource,
      target: edgeTarget,
      animated: true,
      label: `${edgeSource} → ${edgeTarget}`
    };
    setEdges((prevEdges) => [...prevEdges, newEdge]);
    setEdgeSource('');
    setEdgeTarget('');
  };

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      {/* Left side: ReactFlow graph display */}
      <div style={{ flex: 1 }}>
        <ReactFlow nodes={nodes} edges={edges} />
      </div>

      {/* Right side: Forms for editing and lists */}
      <div style={{ width: '300px', padding: '1rem', borderLeft: '1px solid #ccc', overflowY: 'auto' }}>
        <h2>Graph Editor</h2>

        {/* Form to add a new node */}
        <section style={{ marginBottom: '1rem' }}>
          <h3>Add Node</h3>
          <form onSubmit={addNode}>
            <input
              type="text"
              placeholder="Node Label"
              value={nodeLabel}
              onChange={(e) => setNodeLabel(e.target.value)}
              style={{ width: '100%', marginBottom: '0.5rem' }}
              required
            />
            <button type="submit">Add Node</button>
          </form>
        </section>

        {/* Form to add a new edge */}
        <section style={{ marginBottom: '1rem' }}>
          <h3>Add Edge</h3>
          <form onSubmit={addEdge}>
            <input
              type="text"
              placeholder="Source Node ID"
              value={edgeSource}
              onChange={(e) => setEdgeSource(e.target.value)}
              style={{ width: '100%', marginBottom: '0.5rem' }}
              required
            />
            <input
              type="text"
              placeholder="Target Node ID"
              value={edgeTarget}
              onChange={(e) => setEdgeTarget(e.target.value)}
              style={{ width: '100%', marginBottom: '0.5rem' }}
              required
            />
            <button type="submit">Add Edge</button>
          </form>
        </section>

        {/* Display current nodes */}
        <section style={{ marginBottom: '1rem' }}>
          <h3>Current Nodes</h3>
          <ul>
            {nodes.map((node) => (
              <li key={node.id}>
                {node.data.label} (ID: {node.id})
              </li>
            ))}
          </ul>
        </section>

        {/* Display current edges */}
        <section>
          <h3>Current Edges</h3>
          <ul>
            {edges.map((edge) => (
              <li key={edge.id}>{edge.label}</li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}

export default App;
