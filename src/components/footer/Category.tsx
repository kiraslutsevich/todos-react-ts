import styles from './Category.module.css';
import React from 'react';
import { FilterValue, SetFilter } from '../../types';

interface Props {
  text: string,
  value: FilterValue,
  filter: FilterValue,
  onFilterChange: SetFilter,
}

const Category: React.FC<Props> = (props) => {
  const { text, filter, value, onFilterChange } = props;

  return (
    <button
      className={filter === value ? styles.active : styles.passive}
      onClick={() => onFilterChange(value)}
    >
      {text}
    </button>
  )
}

export default Category;
