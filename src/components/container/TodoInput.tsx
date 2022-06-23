import { useState } from 'react';
import styles from './TodoInput.module.css';

interface Props {
  onTodoCreate: (params: string) => void;
}

const TodoInput: React.FC<Props> = (props) => {
  const { onTodoCreate } = props;
  const [value, setValue] = useState('');

  const onSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    onTodoCreate(value.trim());
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
