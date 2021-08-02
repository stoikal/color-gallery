import React from 'react';
import styles from './ColorFilter.module.scss';


type ColorFilterProps = {
  onChange: (obj: {}) => void;
}

const ColorFilter = ({ onChange }: ColorFilterProps): JSX.Element => {

  const handleChange = (e: React.FormEvent<HTMLFormElement>) => {
    const { name, checked } = e.target as HTMLInputElement;

    onChange({
      [name]: checked
    })
  }

  return (
    <div className={styles.filterRow}>
      <form onChange={handleChange}>
        <input name="red" type="checkbox" />
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