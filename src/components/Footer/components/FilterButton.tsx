import React from 'react';
import { StyledFilterButton } from './FilterButton.styles';
import { FilterValue } from '../../../utils/types';
import { useAppSelector, useAppDispatch } from '../../../redux/store';
import { setFilter } from '../../../redux/mainReducer/todoSlice';

interface Props {
  text: string,
  value: FilterValue,
}

const FilterButton: React.FC<Props> = (props) => {
  const { text, value } = props;
  const currentFilter = useAppSelector((state) => state.todoList.filter);
  const dispatch = useAppDispatch();
  const isActive = currentFilter === value;

  return (
    <StyledFilterButton
      isActive={isActive}
      onClick={() => dispatch(setFilter(value))}
    >
      {text}
    </StyledFilterButton>
  );
};

export default FilterButton;
