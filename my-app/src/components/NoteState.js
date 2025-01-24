// NoteState.js
import React, { useState } from 'react';
import NoteContext from './NoteContext';

const NoteState = (props) => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleNavToggle = (isOpen) => {
    setIsNavOpen(isOpen);
  };

  return (
    <NoteContext.Provider value={{ isNavOpen, handleNavToggle }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;