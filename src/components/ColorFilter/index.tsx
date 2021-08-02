import React from 'react';
import styles from './ColorFilter.module.scss';

type ColorFilterProps = {
  hex: string;
}

const ColorFilter = (): JSX.Element => {

  return (
    <div className={styles.filterRow}>
      <form onChange={(e) => console.log(e)}>
        <input name="red" type="checkbox"/>
        <label htmlFor="red">{'Red > 50%'}</label>
        <input name="green" type="checkbox"/>
        <label>{'Green > 50%'}</label>
        <input name="blue" type="checkbox"/>
        <label>{'Blue > 50%'}</label>
        <input name="saturation" type="checkbox"/>
        <label>{'Saturation > 50%'}</label>
      </form>
    </div>
  )
};

export default ColorFilter;