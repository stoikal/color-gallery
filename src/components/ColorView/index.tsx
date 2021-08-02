import React, { useState, useMemo } from 'react';
import styles from './ColorView.module.scss';
import ColorBox from '../ColorBox';
import ColorFilter from '../ColorFilter';
import sortColor from './sortColor';
import createFilterFn from './filterColor';

const initialFilters = {
  red: false, green: false, blue: false, saturation: false 
}

type color = {
  hex: string;
  protected: boolean;
}

type ColorViewProps = {
  colors: color[];
  onRemove: (colorHex: string) => void;
}

type filters = {
  red?: boolean;
  green?: boolean;
  blue?: boolean;
  saturation?: boolean;
}

const ColorView = ({ colors, onRemove }: ColorViewProps): JSX.Element => {
  const [filters, setFilters] = useState(initialFilters)

  const colorList = useMemo(() => {
    const filteredColors = colors.filter(
      createFilterFn(filters)
    );
    
    return filteredColors.sort(sortColor);
  }, [colors, filters])

  const handleFilterChange = (filterChange: filters) => {
    setFilters({
      ...filters,
      ...filterChange
    })
  }

  return (
    <>
      <ColorFilter onChange={handleFilterChange}/>
      <div className={styles.container}>
        {colorList.map((color, index) => (
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