import React from 'react';
import styles from './ColorBox.module.scss';

type ColorBoxProps = {
  hex: string;
  onRemove: (colorHex: string) => void;
  showRemoveButton: boolean;
}

const ColorBox = ({ hex, onRemove, showRemoveButton }: ColorBoxProps): JSX.Element => { 
  const handleClick = () => {
    onRemove(hex);
  }

  return (
    <div  className={styles.box}>
      {/* FIXME inline style is forbidden */}
      <div className={styles.color} style={{ background: hex }}></div>
      <div className={styles.label}>
        <span>{hex}</span>
        {showRemoveButton && 
          <button type="button" onClick={handleClick}>&#x2715;</button>
        }
      </div>
    </div>
  )
};

export default ColorBox;