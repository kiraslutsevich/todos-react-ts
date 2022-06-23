import actionTypes from './filter.actionTypes';
import { FilterValue } from '../../utilites/types';
import storage from '../../utilites/storage';

const getInitialState = () => ({
  todoList: storage.todosList.get(),
  filter: storage.todoFilter.get() || 'all',
});

const reducer = (
  // eslint-disable-next-line default-param-last
  state = getInitialState(),
  actionData: { type: string; payload: unknown },
): ReturnType<typeof getInitialState> => {
  const { type, payload } = actionData;

  switch (type) {
    case actionTypes.SET_FILTER:
      return {
        ...state,
        filter: payload as FilterValue,
      };

    default:
      return state;
  }
};

export default reducer;
