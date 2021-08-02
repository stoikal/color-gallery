import React from 'react';
import './App.scss';
import ColorContainer from './components/ColorContainer';
import ColorInput from './components/ColorInput';
import DEFAULT_COLORS from './constants/defaultCollors';

const App = () => {
  const handleAddColor = (hex: string) => {

  }

  return (
    <div className="App">
      <ColorInput onAdd={handleAddColor}/>
      <ColorContainer colors={DEFAULT_COLORS} />
    </div>
  );
}

export default App;
