import React from 'react';
import styles from './Category.module.css';
import { FilterValue } from '../../utils/types';
import { useAppSelector, useAppDispatch } from '../../redux/store';
import actions from '../../redux/mainReducer/main.actions';

interface Props {
  text: string,
  value: FilterValue,
}

const Category: React.FC<Props> = (props) => {
  const { text, value } = props;
  const state = useAppSelector((state) => state.main.filter);
  const dispatch = useAppDispatch();

  return (
    <button
      className={state === value ? styles.active : styles.passive}
      onClick={() => dispatch(actions.setFilter(value))}
    >
      {text}
    </button>
  );
};

export default Category;
