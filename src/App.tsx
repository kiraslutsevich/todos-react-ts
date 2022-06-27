import React from 'react';
import Header from './components/header/Header';
import TodoInput from './components/container/TodoInput';
import ToggleAll from './components/container/ToggleAll';
import TodoList from './components/main/TodoList';
import Footer from './components/footer/Footer';
import { useAppSelector } from './redux/store';
import { AppStyles } from './App.styles';

const App: React.FC = () => {
  const todoList = useAppSelector((store) => {
    return (store.main.todoList);
  });

  return (
    <AppStyles>
      <Header />
      <section className="container">
        <ToggleAll />
        <TodoInput />
      </section>
      <TodoList />
      {todoList.length > 0 && (
        <Footer />
      )}
    </AppStyles>
  );
};

export default App;
