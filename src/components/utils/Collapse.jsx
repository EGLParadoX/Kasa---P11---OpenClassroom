import { useState } from 'react';
import PropTypes from 'prop-types';

const Collapse = ({ title, content, isOpen }) => {
  const [isCollapsed, setIsCollapsed] = useState(!isOpen);

  return (
    <div className="collapse">
      <div className="collapse-header" onClick={() => setIsCollapsed(!isCollapsed)}>
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
