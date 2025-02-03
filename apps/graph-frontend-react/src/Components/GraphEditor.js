// src/components/GraphEditor.js
const GraphEditor = ({ nodes, edges }) => {
  return (
    <div style={{ padding: '1rem' }}>
      <h2>Graph Overview</h2>

      {/* Display current nodes */}
      <section style={{ marginBottom: '2rem' }}>
        <h3>Current Nodes</h3>
        <ul>
          {nodes.map((node) => (
            <li key={node.id}>
              {node.label} (ID: {node.id})
            </li>
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
