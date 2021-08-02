import React, { useState } from 'react';
import styles from './ColorInput.module.scss'
import isValidColorHex from '../../utils/isValidColorHex';

type ColorInputProps = {
  onAdd: (colorHex: string) => void;
}

const ColorInput = ({ onAdd }: ColorInputProps) : JSX.Element => {
  const [hex, setHex] = useState('')

  const handleInputChange = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    setHex(e.currentTarget.value);
  }
  
  const isInputValid = () => {
    return isValidColorHex(hex);
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onAdd(hex);
  };

  return (
    <div className={styles.inputRow}>
      <form onSubmit={handleSubmit}>
        <span>Add new color:</span>
        <input name="color" value={hex} onChange={handleInputChange}/>
        <button type="submit" disabled={!isInputValid()}>Add</button>
      </form>
    </div>
  )
};

export default ColorInput;