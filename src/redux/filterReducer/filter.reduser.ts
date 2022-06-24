import actionTypes from './filter.actionTypes';
import { FilterValue } from '../../utils/types';
import storage from '../../utils/storage';

const getInitialState = () => ({
  filter: storage.todoFilter.get() || 'all',
});

const reducer = (
  // eslint-disable-next-line default-param-last
  state = getInitialState(),
  actionData: { type: string; payload: FilterValue },
): ReturnType<typeof getInitialState> => {
  const { type, payload } = actionData;

  switch (type) {
    case actionTypes.SET_FILTER:
      return {
        ...state,
        filter: payload,
      };

    default:
      return state;
  }
};

export default reducer;
