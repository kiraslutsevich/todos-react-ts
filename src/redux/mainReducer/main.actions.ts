import TYPES from './main.actionTypes';
import { Task, FilterValue } from '../../utils/types';

const actionTypes = {
  setTodoList: (payload: Task[]) => ({ type: TYPES.SET_TODO_LIST, payload }),
  setFilter: (payload: FilterValue) => ({ type: TYPES.SET_FILTER, payload }),
  addTodo: (payload: string) => ({ type: TYPES.ADD_TODO, payload }),
  deleteTodo: (payload: number) => ({ type: TYPES.DELETE_TODO, payload }),
  updateTodo: (payload: { id: number, data: Task }) => ({ type: TYPES.UPDATE_TODO, payload }),
  clearCompleted: () => ({ type: TYPES.CLEAR_COMPLETED }),
  toggleAll: (payload: number) => ({ type: TYPES.TOGGLE_ALL, payload }),
};

export default actionTypes;
