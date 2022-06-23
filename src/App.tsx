import React, { useState, useEffect, useMemo } from 'react';
import styles from './App.module.css';
import Header from './components/header/Header';
import TodoInput from './components/container/TodoInput';
import ToggleAll from './components/container/ToggleAll';
import TodoList from './components/main/TodoList';
import Footer from './components/footer/Footer';
import storage from './utilites/storage';
import { FilterValue, Task } from './utilites/types';
import CreateRandomId from './utilites/CreateRandomId';

const App: React.FC = () => {
  const [todoList, setTodoList] = useState<Task[]>(storage.todosList.get());
  const [filter, setFilter] = useState<FilterValue>(storage.todoFilter.get() || 'all');

  useEffect(() => {
    storage.todosList.set(todoList);
  }, [todoList]);

  useEffect(() => {
    storage.todoFilter.set(filter);
  }, [filter]);

  const [filteredList, activeTasksCounter] = useMemo(() => {
    let activeTasksCounter = 0;
    const list = todoList.filter((task: Task) => {
      if (!task.isCompleted) {
        activeTasksCounter++;
      }
      if (filter === 'all') {
        return true;
      }
      const requiredStatus = filter === 'completed';
      return task.isCompleted === requiredStatus;
    });
    return [list, activeTasksCounter];
  }, [todoList, filter]);

  const handleTodoCreate = (value: string) => {
    if (!value) {
      return;
    }
    const task: Task = {
      text: value,
      isCompleted: false,
      id: CreateRandomId(),
    };
    const newArr = [...todoList, task];
    setTodoList(newArr);
  };

  const handleTodoUpdate = (id: number, data: Task) => {
    const newArr = todoList.map((task) => {
      return task.id === id ? data : task;
    });
    setTodoList(newArr);
  };

  const handleTodoDelete = (id: number) => {
    const newArr = todoList.filter((task) => task.id !== id);
    setTodoList(newArr);
  };

  const handleSelectAll = () => {
    const newArr = todoList.map((task) => {
      if (activeTasksCounter === 0) {
        return { ...task, isCompleted: false };
      }
      return { ...task, isCompleted: true };
    });
    setTodoList(newArr);
  };

  const handleClearCompleted = () => {
    const newArr = todoList.filter((task) => !task.isCompleted);
    setTodoList(newArr);
  };

  return (
    <div className={styles.App}>
      <Header />

      <section className={styles.container}>
        <ToggleAll onAllSelect={handleSelectAll} />

        <TodoInput onTodoCreate={handleTodoCreate} />
      </section>

      <TodoList
        todoList={filteredList}
        onTodoDelete={handleTodoDelete}
        onTodoUpdate={handleTodoUpdate}
      />

      {todoList.length > 0 && (
        <Footer
          activeTasksCounter={activeTasksCounter}
          onFilterChange={setFilter}
          onCompletedClear={handleClearCompleted}
          filter={filter}
        />
      )}
    </div>
  );
};

export default App;
