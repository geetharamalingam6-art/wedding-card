import React, { useState, useRef, useEffect } from 'react';
import './SpecialOccasionsDropdown.css';

const SpecialOccasionsDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const dropdownRef = useRef(null);

  const items = [
    'Birthday Invitations',
    'Puperty Cards',
    'Luxury Invitations',
    'Ear Boring Cards',
    'Engagement Cards',
    'House Warming',
    'Anniversary Cards',
  ];

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
    <div className="special-occasions-container" ref={dropdownRef}>
      <button 
        className={`occasions-toggle ${isOpen ? 'active' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        Special occasions
        <span className={`arrow-icon ${isOpen ? 'open' : ''}`}>▾</span>
      </button>

      {isOpen && (
        <div className="occasions-dropdown-menu">
          <ul className="dropdown-list">
            {items.map((item, index) => (
              <li 
                key={item}
                style={{ '--item-index': index }}
                className={`dropdown-item ${selectedItem === item ? 'selected' : ''}`}
                onClick={() => setSelectedItem(item)}
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

export default SpecialOccasionsDropdown;
