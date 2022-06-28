import React from 'react';
import FilterButton from './FilterButton';
import { FilterValue } from '../../../utils/types';
import { StyledFiltres } from './Filtres.styles';

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
    <StyledFiltres>
      {filterButtons.map((item) => (
        <FilterButton
          text={item.title}
          value={item.value}
          key={item.value}
        />
      ))}
    </StyledFiltres>
  );
};

export default Filtres;
