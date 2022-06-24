/* eslint-disable indent */
import actionTypes from './main.actionTypes';
import { Task, FilterValue } from '../../utils/types';
import storage from '../../utils/storage';
import CreateRandomId from '../../utils/CreateRandomId';

const getInitialState = () => ({
  todoList: storage.todosList.get() || [],
  filter: storage.todoFilter.get() || 'all',
});

const reducer = (
  // eslint-disable-next-line default-param-last
  state = getInitialState(),
  actionData: { type: string; payload?: unknown },
): ReturnType<typeof getInitialState> => {
  const { type, payload } = actionData;

  switch (type) {
    case actionTypes.SET_TODO_LIST:
      return {
        ...state,
        todoList: payload as Task[],
      };

    case actionTypes.SET_FILTER:
      return {
        ...state,
        filter: payload as FilterValue,
      };

    case actionTypes.ADD_TODO:
      if ((!payload) as boolean) {
        return state;
      }
      return {
        ...state,
        todoList: [
          ...state.todoList,
          {
            text: payload as string,
            isCompleted: false,
            id: CreateRandomId(),
          },
        ],
      };

    case actionTypes.DELETE_TODO:
      return {
        ...state,
        todoList: state.todoList.filter((task) => task.id !== (payload as number)),
      };

    case actionTypes.UPDATE_TODO:
      {
        const { id, data } = payload as { id: number, data: Task };
        return {
          ...state,
          todoList: state.todoList.map((task) => {
            return task.id === id ? data : task;
          }),
        };
      }

    case actionTypes.CLEAR_COMPLETED:
      return {
        ...state,
        todoList: state.todoList.filter((task) => !task.isCompleted),
      };

    default:
      return state;
  }
};

export default reducer;
