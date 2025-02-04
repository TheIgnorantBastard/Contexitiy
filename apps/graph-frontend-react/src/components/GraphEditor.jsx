// src/components/GraphEditor.js
import PropTypes from 'prop-types';

const GraphEditor = ({ nodes, edges, viewMode }) => {
  return (
    <div style={{ padding: '1rem' }}>
      <h2>Graph Overview</h2>

      {viewMode === 'nodes' ? (
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
      ) : (
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
      )}
    </div>
  );
};

GraphEditor.propTypes = {
  nodes: PropTypes.array.isRequired,
  edges: PropTypes.array.isRequired,
  viewMode: PropTypes.string.isRequired,
};

export default GraphEditor;
