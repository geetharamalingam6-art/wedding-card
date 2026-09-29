import React, { useState, useRef, useEffect } from 'react';
import './NavDropdown.css';

const NavDropdown = ({ label, items, onSelectItem }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="nav-dropdown-container" ref={dropdownRef}>
      <button 
        className={`nav-dropdown-toggle ${isOpen ? 'active' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        {label}
        <span className={`arrow-icon ${isOpen ? 'open' : ''}`}>▾</span>
      </button>

      {isOpen && (
        <div className="nav-dropdown-menu">
          <ul className="dropdown-list">
            {items.map((item, index) => (
              <li 
                key={item}
                style={{ '--item-index': index }}
                className={`dropdown-item ${selectedItem === item ? 'selected' : ''}`}
                onClick={() => {
                  setSelectedItem(item);
                  setIsOpen(false);
                  if (onSelectItem) onSelectItem(item);
                }}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default NavDropdown;
