import React, { useState, useEffect } from 'react';
import './App.scss';
import ColorView from './components/ColorView';
import ColorInput from './components/ColorInput';
import DEFAULT_COLORS from './constants/defaultCollors';
import ColorStorage from './utils/colorStorage';

const App = () => {
  const [colorList, setColorList] = useState<string[]>([]);

  useEffect(() => {
    (async () => {
      setColorList([
        ...DEFAULT_COLORS,
        ...await ColorStorage.get()
      ])
    })()
  }, [])

  const handleAddColor = (hex: string) => {
    ColorStorage.add(hex);
  }

  return (
    <div className="App">
      <ColorInput onAdd={handleAddColor}/>
      <ColorView colors={colorList} />
    </div>
  );
}

export default App;
