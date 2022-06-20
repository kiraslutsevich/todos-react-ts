import LocalStorageHelper from './LocalStorageHelper';

export default {
  todosList: new LocalStorageHelper<Task[]>('todo-list'),
  todoFilter: new LocalStorageHelper<'all' | 'active' | 'completed'>('todo-filter'),
};
