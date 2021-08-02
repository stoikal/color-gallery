import React from 'react';
import styles from './ColorView.module.scss';
import ColorBox from '../ColorBox';

type ColorViewProps = {
  colors: string[];
}

const ColorView = ({ colors }: ColorViewProps): JSX.Element => {
  return (
    <div className={styles.container}>
      {colors.map((hex, index) => (
        <ColorBox hex={hex} key={index}/>
      ))}
    </div>
  )
};

export default ColorView;