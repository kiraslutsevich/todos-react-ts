/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import createRandomId from '../../utils/createRandomId';
import { FilterValue, Task } from '../../utils/types';

const todoSlice = createSlice({
  name: 'todoList',
  initialState: {
    list: [] as Task[],
    filter: 'all' as FilterValue,
  },
  reducers: {
    setFilter(state, action: PayloadAction<FilterValue>) {
      state.filter = action.payload;
    },
    addTodo(state, action: PayloadAction<string>) {
      const newTask: Task = {
        text: action.payload,
        isCompleted: false,
        id: createRandomId(),
      };
      state.list.push(newTask);
    },
    deleteTodo(state, action: PayloadAction<number>) {
      state.list = state.list.filter((task) => task.id !== action.payload);
    },
    updateTodo(state, action: PayloadAction<{ id: number, data: Task }>) {
      const { id, data } = action.payload;
      state.list = state.list.map((task) => {
        return task.id === id ? data : task;
      });
    },
    clearCompleted(state) {
      state.list = state.list.filter((task) => !task.isCompleted);
    },
    toggleAll(state, action: PayloadAction<number>) {
      const ativeTasksCount = action.payload;
      const targetStatus = ativeTasksCount !== 0;

      state.list = state.list.map((task) => ({
        ...task,
        isCompleted: targetStatus,
      }));
    },
  },
});

export const {
  setFilter,
  addTodo,
  deleteTodo,
  updateTodo,
  clearCompleted,
  toggleAll } = todoSlice.actions;

export default todoSlice.reducer;
