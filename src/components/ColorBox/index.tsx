import React from 'react';
import styles from './ColorBox.module.scss';

type ColorBoxProps = {
  hex: string;
}

const ColorBox = ({ hex }: ColorBoxProps): JSX.Element => { 
  return (
    // FIXME inline style is forbidden
    <div  className={styles.box}>
      <div className={styles.color} style={{ background: hex }}></div>
      <div className={styles.label}>
        <span>{hex}</span>
        <button type="button">&#x2715;</button>
      </div>
    </div>
  )
};

export default ColorBox;