import React from 'react';
import { CategoryStyle } from './Category.styles';
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
  const isActive = state === value;

  return (
    <CategoryStyle
      isActive={isActive}
      onClick={() => dispatch(actions.setFilter(value))}
    >
      {text}
    </CategoryStyle>
  );
};

export default Category;
