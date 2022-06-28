import React from 'react';
import Title from './components/Title';
import TodoInput from './components/header/TodoInput';
import ToggleAll from './components/header/ToggleAll';
import TodoList from './components/main/TodoList';
import Footer from './components/Footer';
import { useAppSelector } from './redux/store';
import { StyledApp } from './App.styles';

const App: React.FC = () => {
  const todoListLength = useAppSelector((store) => {
    return store.todoList.list.length;
  });

  return (
    <StyledApp>
      <Title />

      <section className="header">
        <ToggleAll />
        <TodoInput />
      </section>

      <TodoList />

      {todoListLength > 0 && (
        <Footer />
      )}
    </StyledApp>
  );
};

export default App;
