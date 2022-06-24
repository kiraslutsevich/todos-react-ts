import React, { useEffect, useMemo } from 'react';
import styles from './App.module.css';
import Header from './components/header/Header';
import TodoInput from './components/container/TodoInput';
import ToggleAll from './components/container/ToggleAll';
import TodoList from './components/main/TodoList';
import Footer from './components/footer/Footer';
import storage from './utils/storage';
import { Task } from './utils/types';
import { useAppSelector } from './redux/store';
import mainSelectores from './redux/mainReducer/main.selects';

const App: React.FC = () => {
  const filter = useAppSelector((store) => {
    return (store.main.filter);
  });

  const todoList = useAppSelector((store) => {
    return (store.main.todoList);
  });

  const { activeCounter } = useAppSelector(mainSelectores.getFilteredTasksWithCount);

  useEffect(() => {
    storage.todosList.set(todoList);
  }, [todoList]);

  useEffect(() => {
    storage.todoFilter.set(filter);
  }, [filter]);

  // const handleSelectAll = () => {
  //   const newArr = todoList.map((task) => {
  //     if (activeTasksCounter === 0) {
  //       return { ...task, isCompleted: false };
  //     }
  //     return { ...task, isCompleted: true };
  //   });
  //   setTodoList(newArr);
  // };

  return (
    <div className={styles.App}>
      <Header />

      <section className={styles.container}>
        <ToggleAll />

        <TodoInput />
      </section>

      <TodoList />

      {todoList.length > 0 && (
        <Footer
        // activeTasksCounter={activeTasksCounter}
        />
      )}
    </div>
  );
};

export default App;
