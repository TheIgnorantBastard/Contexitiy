// src/App.jsx
import { useState, Suspense } from "react";
import ReactFlow from "reactflow";
import "reactflow/dist/style.css";
import SideNav from "./components/sidenav.jsx";
import { AddNode, ModifyNode, AdjustEdge } from "./components/templates";

// Debugging logs to check if App.jsx is loading
console.log("✅ App Loaded");

function App() {
  // Graph Data
  const [nodes, setNodes] = useState([{ id: "1", position: { x: 100, y: 100 }, data: { label: "Node 1" } }]);
  const [edges, setEdges] = useState([]);

  // UI State
  const [selectedTemplate, setSelectedTemplate] = useState("addNode"); // Default: Add Node
  const [navCollapsed, setNavCollapsed] = useState(false);
  const [graphCollapsed, setGraphCollapsed] = useState(false);
  const [selectedNodes, setSelectedNodes] = useState([]);

  console.log("🎯 Selected Template:", selectedTemplate);

  // Column Widths (adjustable on collapse)
  const getColumnWidths = () => ({
    left: navCollapsed ? "40px" : "10%",
    center: `calc(100% - ${navCollapsed ? "40px" : "10%"} - ${graphCollapsed ? "40px" : "30%"})`,
    right: graphCollapsed ? "40px" : "30%"
  });

  // Dynamically render the selected Node Action
  const renderNodeAction = () => {
    console.log("🔄 Rendering Node Action:", selectedTemplate);

    switch (selectedTemplate) {
      case "addNode":
        return <AddNode setNodes={setNodes} />;
      case "modifyNode":
        return <ModifyNode nodes={nodes} setNodes={setNodes} />;
      case "adjustEdge":
        return <AdjustEdge nodes={nodes} edges={edges} setEdges={setEdges} />;
      default:
        return <p>⚠️ Select a Node Action from the Side Nav.</p>;
    }
  };

  return (
    <div style={{ display: "flex", height: "100vh", width: "100vw", overflow: "hidden", position: "fixed", top: 0, left: 0 }}>
      {/* Left Column: SIDE NAV */}
      <SideNav navCollapsed={navCollapsed} setNavCollapsed={setNavCollapsed} setSelectedTemplate={setSelectedTemplate} />

      {/* Middle Column: CONTENT AREA */}
      <div style={{ width: getColumnWidths().center, transition: "all 300ms ease", display: "flex", flexDirection: "column", borderRight: "1px solid #ccc", overflow: "hidden" }}>
        {/* Header for Content Area */}
        <div style={{ height: "40px", display: "flex", alignItems: "center", justifyContent: "center", borderBottom: "1px solid #ccc" }}>
          <span>📌 Content Area</span>
        </div>
        {/* Top Panel: Dynamic Node Action */}
        <div style={{ height: "50%", padding: "1rem", borderBottom: "1px solid #ccc", overflowY: "auto" }}>
          <Suspense fallback={<p>⏳ Loading...</p>}>{renderNodeAction()}</Suspense>
        </div>
        {/* Bottom Panel: Node & Edge List */}
        <div style={{ height: "50%", padding: "1rem", overflowY: "auto" }}>
          <h3>📌 Current Nodes</h3>
          <ul>
            {nodes.map((node) => (
              <li key={node.id}>
                <input
                  type="checkbox"
                  checked={selectedNodes.includes(node.id)}
                  onChange={(e) => {
                    setSelectedNodes(e.target.checked ? [...selectedNodes, node.id] : selectedNodes.filter((id) => id !== node.id));
                  }}
                  style={{ marginRight: "0.5rem" }}
                />
                {node.data.label} (ID: {node.id})
              </li>
            ))}
          </ul>
          <h3>📌 Current Edges</h3>
          <ul>
            {edges.map((edge) => (
              <li key={edge.id}>{edge.label}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Right Column: GRAPH DISPLAY */}
      <div style={{ width: getColumnWidths().right, minWidth: graphCollapsed ? "40px" : "300px", transition: "all 300ms ease", display: "flex", flexDirection: "column", flexShrink: 0, overflow: "hidden" }}>
        {/* Graph Panel Header */}
        <div style={{ height: "40px", display: "flex", alignItems: "center", padding: "0 0.5rem", borderBottom: "1px solid #ccc" }}>
          <button onClick={() => setGraphCollapsed(!graphCollapsed)} style={{ marginRight: graphCollapsed ? 0 : "0.5rem" }}>
            {graphCollapsed ? "+" : "–"}
          </button>
          {!graphCollapsed && <span>📌 Graph Area</span>}
        </div>
        {/* Graph Display */}
        <div style={{ flex: 1, display: graphCollapsed ? "none" : "block", height: "calc(100vh - 40px)", overflow: "hidden" }}>
          <ReactFlow nodes={nodes} edges={edges} fitView style={{ width: "100%", height: "100%" }} />
        </div>
      </div>
    </div>
  );
}

export default App;
