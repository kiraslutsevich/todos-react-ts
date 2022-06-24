import React from 'react';
import styles from './Filtres.module.css';
import Category from './Category';
import { FilterValue } from '../../utilites/types';

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

const Filtres: React.FC = () => {
  return (
    <div className={styles.list}>
      {filterButtons.map((item) => (
        <Category
          text={item.title}
          value={item.value}
          key={item.value}
        />
      ))}
    </div>
  );
};

export default Filtres;
