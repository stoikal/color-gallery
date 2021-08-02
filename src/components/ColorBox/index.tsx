import React from 'react';
import styles from './ColorBox.module.scss';

type ColorBoxProps = {
  hex: string;
}

const ColorBox = ({ hex }: ColorBoxProps): JSX.Element => { 
  return (
    <div className={styles.box} data-hex={hex}>
      {/* {hex} */}
    </div>
  )
};

export default ColorBox;