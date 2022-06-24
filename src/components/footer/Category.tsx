import React from 'react';
import styles from './Category.module.css';
import { FilterValue } from '../../utils/types';
import { useAppSelector, useAppDispatch } from '../../redux/store';
import filterActions from '../../redux/filterReducer/filter.actions';

interface Props {
  text: string,
  value: FilterValue,
}

const Category: React.FC<Props> = (props) => {
  const { text, value } = props;
  const state = useAppSelector((state) => state.filter.filter);
  const dispatch = useAppDispatch();

  return (
    <button
      className={state === value ? styles.active : styles.passive}
      onClick={() => dispatch(filterActions.setFilter(value))}
    >
      {text}
    </button>
  );
};

export default Category;
