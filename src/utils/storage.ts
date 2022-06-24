import LocalStorageHelper from './LocalStorageHelper';
import { Task, FilterValue } from './types';

export default {
  todosList: new LocalStorageHelper<Array<Task>>('todo-list'),
  todoFilter: new LocalStorageHelper<FilterValue>('todo-filter'),
};
