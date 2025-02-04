// src/components/sidenav.jsx
import React, { useState } from "react";
import PropTypes from "prop-types";

const SideNav = ({ setSelectedTemplate }) => {
  const [navCollapsed, setNavCollapsed] = useState(false);

  return (
    <div style={{ width: navCollapsed ? "40px" : "200px", transition: "all 300ms ease" }}>
      {/* Side Nav Header */}
      <div style={{ display: "flex", justifyContent: "space-between", padding: "0.5rem" }}>
        <span>📌 Side Nav</span>
        <button onClick={() => setNavCollapsed(!navCollapsed)}>{navCollapsed ? "+" : "–"}</button>
      </div>

      {/* Side Nav Buttons */}
      {!navCollapsed && (
        <div style={{ padding: "1rem", display: "flex", flexDirection: "column" }}>
          <button onClick={() => setSelectedTemplate("addNode")} style={{ marginBottom: "0.5rem" }}>
            ➕ Add Node
          </button>
          <button onClick={() => setSelectedTemplate("modifyNode")} style={{ marginBottom: "0.5rem" }}>
            ✏️ Modify Node
          </button>
          <button onClick={() => setSelectedTemplate("adjustEdge")} style={{ marginBottom: "0.5rem" }}>
            🔗 Adjust Edge
          </button>
        </div>
      )}
    </div>
  );
};

// ✅ PropTypes Validation
SideNav.propTypes = {
  setSelectedTemplate: PropTypes.func.isRequired,
};

export default SideNav;
