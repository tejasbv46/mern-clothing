// admin/src/components/ThemeToggleButton.jsx
import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const ThemeToggleButton = () => {
  const { toggleTheme } = useContext(ThemeContext);
  return (
    <button id="theme-switch" onClick={toggleTheme}>
      Toggle Theme
    </button>
  );
};

export default ThemeToggleButton; // <-- This line is essential