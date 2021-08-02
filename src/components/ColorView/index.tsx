import React from 'react';
import styles from './ColorView.module.scss';
import ColorBox from '../ColorBox';
import ColorFilter from '../ColorFilter';
import hexToRgb from '../../utils/hexToRgb';

type ColorViewProps = {
  colors: string[];
}

const ColorView = ({ colors }: ColorViewProps): JSX.Element => {

  const sortedColors = colors.sort((a, b) => {
    const colorA = hexToRgb(a);
    const colorB = hexToRgb(b);
    const compare = (a: number, b: number) => a > b ? -1 : 1;

    if (colorA.red === colorB.red) {
      if (colorA.blue === colorB.blue) {
        if (colorA.green === colorB.green) {
          return 0
        } else {
          return compare(colorA.green, colorB.green)
        }
      } else {
        return compare(colorA.blue, colorB.blue)
      }
    } else {
      return compare(colorA.red, colorB.red)
    }
  })

  return (
    <>
      <ColorFilter />
      <div className={styles.container}>
        {sortedColors.map((hex, index) => (
          <ColorBox hex={hex} key={index}/>
        ))}
      </div>
    </>
  )
};

export default ColorView;