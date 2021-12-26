import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  open: PropTypes.bool.isRequired,
  active: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

const DropdownList = ({ items, open, active, onClick }) => {
  return (
    <div className={`dropdown-wrapper ${open ? 'open' : ''}`}>
      <ul className="dropdown">
        {items.map((item) => (
          <li key={item} style={item === active ? { color: '#5380F7' } : {}}>
            <a href="#/" onClick={() => onClick(item)}>
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

DropdownList.propTypes = propTypes;

export default DropdownList;
