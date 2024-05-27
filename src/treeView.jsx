// TreeNode.jsx
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFolder,
  faFolderOpen,
  faFile,
} from "@fortawesome/free-solid-svg-icons";
// import './TreeNode.css';

const TreeNode = ({ node }) => {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="tree-node">
      <div className="node-label" onClick={handleToggle}>
        <FontAwesomeIcon
          icon={node.children ? (expanded ? faFolderOpen : faFolder) : faFile}
          className="icon"
        />
        <span className="label-text">{node.name}</span>
      </div>
      {expanded && node.children && (
        <div className="children">
          {node.children.map((child) => (
            <TreeNode key={child.id} node={child} />
          ))}
        </div>
      )}
    </div>
  );
};

// import './TreeView.css';

const TreeView = ({ data }) => {
  return (
    <div className="tree-view">
      {data.map((node) => (
        <TreeNode key={node.id} node={node} />
      ))}
    </div>
  );
};

export default TreeView;
