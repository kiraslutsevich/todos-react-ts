import React from 'react';
import styles from './Filtres.module.css';
import Category from './Category';
import { FilterValue, SetFilter } from '../../utilites/types';

interface Props {
  onFilterChange: SetFilter;
  filter: FilterValue;
}

const filterButtons: Array<{ title: string; value: FilterValue }> = [
  {
    title: 'All',
    value: 'all',
  },
  {
    title: 'Active',
    value: 'active',
  },
  {
    title: 'Completed',
    value: 'completed',
  },
];

const Filtres: React.FC<Props> = (props) => {
  const { onFilterChange, filter } = props;

  return (
    <div className={styles.list}>
      {filterButtons.map((item) => (
        <Category
          text={item.title}
          value={item.value}
          onFilterChange={onFilterChange}
          filter={filter}
          key={item.value}
        />
      ))}
    </div>
  );
};

export default Filtres;
