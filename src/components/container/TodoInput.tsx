import { useState } from 'react';
import { useAppDispatch } from '../../redux/store';
import styles from './TodoInput.module.css';
import actions from '../../redux/mainReducer/main.actions';

const TodoInput: React.FC = () => {
  const [value, setValue] = useState('');
  const dispatch = useAppDispatch();

  const onSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    dispatch(actions.addTodo(value.trim()));
    setValue('');
  };

  return (
    <form
      className={styles.form}
      onSubmit={onSubmit}
    >
      <input
        placeholder='What needs to be done?'
        className={styles.input}
        value={value}
        onChange={(ev) => {
          setValue(ev.target.value);
        }}
      />
      <button
        className={styles.btn}
        type="submit"
      >
        +
      </button>
    </form>
  );
};

export default TodoInput;
