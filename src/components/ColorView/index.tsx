import React, { useState } from 'react';
import styles from './ColorView.module.scss';
import ColorBox from '../ColorBox';
import ColorFilter from '../ColorFilter';
import hexToRgb from '../../utils/hexToRgb';
import hexToHsl from '../../utils/hextoHsl';

type color = {
  hex: string;
  protected: boolean;
}

type ColorViewProps = {
  colors: color[];
  onRemove: (colorHex: string) => void;
}

const ColorView = ({ colors, onRemove }: ColorViewProps): JSX.Element => {
  const [filters, setFilters] = useState({ red: false, green: false, blue: false, saturation: false })

  const filteredColors = colors.filter(({ hex }) => {
    const { r, g, b, l } = hexToHsl(hex);
    const { red, blue, green, saturation } = filters;

    if (red && r < 0.5) {
      return false;
    }

    if (green && g < 0.5) {
      return false;
    }

    if (blue && b < 0.5) {
      return false;
    }

    if (saturation && l < 0.5) {
      return false;
    }

    return true;
  })

  const sortedColors = filteredColors.sort((a, b) => {
    const colorA = hexToRgb(a.hex);
    const colorB = hexToRgb(b.hex);
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

  const handleFilterChange = (filterChange: {}) => {
    setFilters({
      ...filters,
      ...filterChange
    })
  }

  return (
    <>
      <ColorFilter onChange={handleFilterChange}/>
      <div className={styles.container}>
        {sortedColors.map((color, index) => (
          <ColorBox 
            hex={color.hex}
            key={index}
            onRemove={onRemove}
            showRemoveButton={!color.protected}
          />
        ))}
      </div>
    </>
  )
};

export default ColorView;