import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';

export default {
  getFilteredTasksWithCount: createSelector(
    (state: RootState) => state.todoList.list,
    (state: RootState) => state.todoList.filter,
    (list, filter) => {
      let activeCounter = 0;
      const todoList = list.filter((task) => {
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
        todoList,
        activeCounter,
      };
    },
  ),
};
