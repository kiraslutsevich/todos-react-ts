import actionTypes from './main.actionTypes';
import { Task } from '../../utils/types';
import storage from '../../utils/storage';

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
    case actionTypes.SET_TODO_LIST:
      return {
        ...state,
        todoList: payload as Task[],
      };

    default:
      return state;
  }
};

export default reducer;
