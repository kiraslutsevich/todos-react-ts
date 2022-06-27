import React from 'react';
import Category from './Category';
import { FilterValue } from '../../utils/types';
import { FiltresStyle } from './Filtres.styles';

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
    <FiltresStyle>
      {filterButtons.map((item) => (
        <Category
          text={item.title}
          value={item.value}
          key={item.value}
        />
      ))}
    </FiltresStyle>
  );
};

export default Filtres;
