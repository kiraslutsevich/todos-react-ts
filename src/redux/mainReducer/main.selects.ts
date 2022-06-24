import { createSelector } from 'reselect';

import { RootState } from '../store';

export default {
  getFilteredTasksWithCount: createSelector(
    (state: RootState) => state.main.todoList,
    (state: RootState) => state.main.filter,
    (list, filter) => {
      let activeCounter = 0;
      list.filter((task) => {
        if (!task.isCompleted) {
          activeCounter++;
        }
        if (filter === 'all') {
          return true;
        }
        const requiredStatus = filter === 'completed';
        return task.isCompleted === requiredStatus;
      });

      return {
        list,
        activeCounter,
      };
    },
  ),
};
