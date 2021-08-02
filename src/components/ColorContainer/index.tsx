import React from 'react';
import styles from './ColorContainer.module.scss';
import ColorBox from '../ColorBox';

type ColorContainerProps = {
  colors: string[];
}

const ColorContainer = ({ colors }: ColorContainerProps): JSX.Element => {
  return (
    <div className={styles.container}>
      {colors.map((hex) => (
        <ColorBox hex={hex}/>
      ))}
    </div>
  )
};

export default ColorContainer;