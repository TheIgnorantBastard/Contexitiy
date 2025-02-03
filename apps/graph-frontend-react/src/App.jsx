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

  // State for selecting the active template
  const [selectedTemplate, setSelectedTemplate] = useState('createNode');

  // State for collapsing/expanding the Side Nav and Graph Display
  const [navCollapsed, setNavCollapsed] = useState(false);
  const [graphCollapsed, setGraphCollapsed] = useState(false);
  // State for selected nodes (for checkboxes)
  const [selectedNodes, setSelectedNodes] = useState([]);

  // Enhanced column width calculations
  const getColumnWidths = () => ({
    left: navCollapsed ? '40px' : '10%',  // Reduced from 20% to 10%
    center: `calc(100% - ${navCollapsed ? '40px' : '10%'} - ${graphCollapsed ? '40px' : '30%'})`,
    right: graphCollapsed ? '40px' : '30%'
  });

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

  // Render the appropriate form based on the selected template
  const renderForm = () => {
    if (selectedTemplate === 'createNode') {
      return (
        <div>
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
        </div>
      );
    } else if (selectedTemplate === 'editNode') {
      return (
        <div>
          <h3>Edit Node</h3>
          <p>Edit Node form goes here (for now, functionality not implemented).</p>
        </div>
      );
    } else if (selectedTemplate === 'editEdge') {
      return (
        <div>
          <h3>Edit Edge</h3>
          <p>Edit Edge form goes here (for now, functionality not implemented).</p>
        </div>
      );
    }
  };

  return (
    <div style={{ 
      display: 'flex', 
      height: '100vh',
      width: '100vw',
      overflow: 'hidden',
      position: 'fixed',
      top: 0,
      left: 0
    }}>
      {/* Left Column: SIDE NAV */}
      <div style={{
        width: getColumnWidths().left,
        minWidth: navCollapsed ? '40px' : '100px',  // Reduced from 200px to 100px
        borderRight: '1px solid #ccc',
        transition: 'all 300ms ease',
        display: 'flex',
        flexDirection: 'column',
        flexShrink: 0,
        overflow: 'hidden'
      }}>
        {/* Top Bar for Side Nav */}
        <div style={{
          height: '40px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: navCollapsed ? 'center' : 'space-between',
          padding: '0 0.5rem',
          borderBottom: '1px solid #ccc'
        }}>
          {navCollapsed ? null : <span>Side Nav</span>}
          <button onClick={() => setNavCollapsed(!navCollapsed)}>
            {navCollapsed ? '+' : '–'}
          </button>
        </div>
        {/* Nav Content (only when not collapsed) */}
        {!navCollapsed && (
          <div style={{ padding: '1rem', display: 'flex', flexDirection: 'column' }}>
            <button onClick={() => setSelectedTemplate('createNode')}
                    style={{ marginBottom: '0.5rem' }}>
              Create Node
            </button>
            <button onClick={() => setSelectedTemplate('editNode')}
                    style={{ marginBottom: '0.5rem' }}>
              Edit Node
            </button>
            <button onClick={() => setSelectedTemplate('editEdge')}
                    style={{ marginBottom: '0.5rem' }}>
              Edit Edge
            </button>
          </div>
        )}
      </div>

      {/* Middle Column: CONTENT AREA */}
      <div style={{
        width: getColumnWidths().center,
        transition: 'all 300ms ease',
        display: 'flex',
        flexDirection: 'column',
        borderRight: '1px solid #ccc',
        overflow: 'hidden'
      }}>
        {/* Header for Content Area */}
        <div style={{
          height: '40px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderBottom: '1px solid #ccc'
        }}>
          <span>Content Area</span>
        </div>
        {/* Top half: Active Form Area */}
        <div style={{
          height: '50%',
          padding: '1rem',
          borderBottom: '1px solid #ccc',
          overflowY: 'auto'
        }}>
          {renderForm()}
        </div>
        {/* Bottom half: Lists of Current Nodes and Edges */}
        <div style={{
          height: '50%',
          padding: '1rem',
          overflowY: 'auto'
        }}>
          <h3>Current Nodes</h3>
          <ul>
            {nodes.map((node) => (
              <li key={node.id}>
                <input
                  type="checkbox"
                  checked={selectedNodes.includes(node.id)}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setSelectedNodes([...selectedNodes, node.id]);
                    } else {
                      setSelectedNodes(selectedNodes.filter(id => id !== node.id));
                    }
                  }}
                  style={{ marginRight: '0.5rem' }}
                />
                {node.data.label} (ID: {node.id})
              </li>
            ))}
          </ul>
          <h3>Current Edges</h3>
          <ul>
            {edges.map((edge) => (
              <li key={edge.id}>{edge.label}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Right Column: GRAPH DISPLAY */}
      <div style={{
        width: getColumnWidths().right,
        minWidth: graphCollapsed ? '40px' : '300px',
        transition: 'all 300ms ease',
        display: 'flex',
        flexDirection: 'column',
        flexShrink: 0,
        overflow: 'hidden'
      }}>
        {/* Top Bar for Graph Display */}
        <div style={{
          height: '40px',
          display: 'flex',
          alignItems: 'center',
          padding: '0 0.5rem',
          borderBottom: '1px solid #ccc'
        }}>
          <button onClick={() => setGraphCollapsed(!graphCollapsed)}
                  style={{ marginRight: graphCollapsed ? 0 : '0.5rem' }}>
            {graphCollapsed ? '+' : '–'}
          </button>
          {!graphCollapsed && <span>Graph Area</span>}
        </div>
        
        {/* Graph Display Content */}
        <div style={{ 
          flex: 1,
          display: graphCollapsed ? 'none' : 'block',
          height: 'calc(100vh - 40px)', // Subtract header height
          overflow: 'hidden'
        }}>
          <ReactFlow 
            nodes={nodes} 
            edges={edges}
            fitView
            style={{ width: '100%', height: '100%' }}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
