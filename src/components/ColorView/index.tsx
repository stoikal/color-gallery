import React from 'react';
import styles from './ColorView.module.scss';
import ColorBox from '../ColorBox';
import ColorFilter from '../ColorFilter';

type ColorViewProps = {
  colors: string[];
}

const ColorView = ({ colors }: ColorViewProps): JSX.Element => {
  return (
    <>
      <ColorFilter />
      <div className={styles.container}>
        {colors.map((hex, index) => (
          <ColorBox hex={hex} key={index}/>
        ))}
      </div>
    </>
  )
};

export default ColorView;