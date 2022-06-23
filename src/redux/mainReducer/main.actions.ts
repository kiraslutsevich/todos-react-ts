import TYPES from './main.actionTypes';
import { Task } from '../../utilites/types';

export default {
  setTodoList: (payload: Task[]) => ({ type: TYPES.SET_TODO_LIST, payload }),
};
