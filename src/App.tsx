import React, { useState, useEffect, useCallback } from 'react';
import './App.scss';
import ColorView from './components/ColorView';
import ColorInput from './components/ColorInput';
import ColorStorage from './utils/colorStorage';
import DEFAULT_COLORS from './constants/defaultCollors';

const defaultColors = DEFAULT_COLORS.map((hex: string) => ({ hex, protected: true }))

type colorState = {
  hex: string;
  protected: boolean;
}

const App = () => {
  const [colorList, setColorList] = useState<colorState[]>([]);

  const refreshColorList = useCallback(async () => {
    const savedColors = await ColorStorage.get();

    setColorList([
      ...defaultColors,
      ...savedColors
        .map((hex: string) => ({ hex, protected: false }))
    ])
  }, [])

  useEffect(() => {
    refreshColorList()
  }, [refreshColorList])
  
  const handleAddColor = async (hex: string) => {
    ColorStorage.add(hex);
    refreshColorList();
  }

  const handleRemoveColor = async (hex: string) => {
    ColorStorage.remove(hex);
    refreshColorList();
  }

  return (
    <div className="App">
      <ColorInput onAdd={handleAddColor} />
      <ColorView colors={colorList} onRemove={handleRemoveColor} />
    </div>
  );
}

export default App;
