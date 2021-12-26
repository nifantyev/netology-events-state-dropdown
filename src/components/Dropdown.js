import React, { useState } from 'react';
import PropTypes from 'prop-types';
import DropdownList from './DropdownList';

const propTypes = {
  caption: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const Dropdown = ({ caption, icon, items }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState('');

  const handleClickButton = () => {
    setIsOpen((prev) => !prev);
  };

  const handleClickItem = (item) => {
    setActive(item);
  };

  return (
    <div className="container">
      <button className="btn" onClick={handleClickButton}>
        {caption}
        <span className="material-icons">{icon}</span>
      </button>
      <DropdownList
        items={items}
        open={isOpen}
        active={active}
        onClick={handleClickItem}
      />
    </div>
  );
};

Dropdown.propTypes = propTypes;

export default Dropdown;
