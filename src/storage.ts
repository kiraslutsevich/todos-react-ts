import LocalStorageHelper from './LocalStorageHelper';
import { Task } from './App';

export default {
  todosList: new LocalStorageHelper<Array<Task>>('todo-list'),
  todoFilter: new LocalStorageHelper<'all' | 'active' | 'completed'>('todo-filter'),
};
