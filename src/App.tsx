import React, { useEffect } from 'react';
import styles from './App.module.css';
import Header from './components/header/Header';
import TodoInput from './components/container/TodoInput';
import ToggleAll from './components/container/ToggleAll';
import TodoList from './components/main/TodoList';
import Footer from './components/footer/Footer';
import storage from './utils/storage';
import { useAppSelector } from './redux/store';

const App: React.FC = () => {
  const filter = useAppSelector((store) => {
    return (store.main.filter);
  });

  const todoList = useAppSelector((store) => {
    return (store.main.todoList);
  });

  useEffect(() => {
    storage.todosList.set(todoList);
  }, [todoList]);

  useEffect(() => {
    storage.todoFilter.set(filter);
  }, [filter]);

  return (
    <div className={styles.App}>
      <Header />

      <section className={styles.container}>
        <ToggleAll />

        <TodoInput />
      </section>

      <TodoList />

      {todoList.length > 0 && (
        <Footer />
      )}
    </div>
  );
};

export default App;
