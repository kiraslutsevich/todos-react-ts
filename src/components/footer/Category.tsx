import React from 'react';
import styles from './Category.module.css';
import { FilterValue, SetFilter } from '../../utilites/types';
import { useAppSelector, useAppDispatch } from '../../redux/store';
import filterActions from '../../redux/filterReducer/filter.actions';

interface Props {
  text: string,
  value: FilterValue,
  filter: FilterValue,
  onFilterChange: SetFilter,
}

const Category: React.FC<Props> = (props) => {
  const { text, filter, value, onFilterChange } = props;
  const state = useAppSelector((state) => state.main.filter);
  const dispatch = useAppDispatch();
  console.log(state);

  return (
    <button
      className={filter === value ? styles.active : styles.passive}
      onClick={() => dispatch(filterActions.setFilter(value))}
    >
      {text}
    </button>
  );
};

export default Category;
