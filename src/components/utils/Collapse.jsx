import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Collapse = ({ title, content, onToggle, isOpen }) => {
  const [isCollapsed, setIsCollapsed] = useState(!isOpen);

  useEffect(() => {
    setIsCollapsed(!isOpen);
  }, [isOpen]);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
    onToggle && onToggle(!isCollapsed);
  };

  return (
    <div className="collapse">
      <div className="collapse-header" onClick={toggleCollapse}>
        <p>{title}</p>
        <span className={`fa-solid fa-chevron-up ${isCollapsed ? 'reverse' : 'rotate'}`}></span>
      </div>
      <div className={`collapse-content ${isCollapsed ? '' : 'open'}`}>{content}</div>
    </div>
  );
};

Collapse.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.node.isRequired,
  onToggle: PropTypes.func,
  isOpen: PropTypes.bool,
};

export default Collapse;
