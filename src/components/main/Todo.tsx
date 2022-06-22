import { useState } from 'react';
import styles from './Todo.module.css';
import { Task } from '../../types';

interface Props {
  task: Task,
  onTodoDelete: (id: number) => void,
  onTodoUpdate: (id: number, data: Task) => void,
}

const Todo: React.FC<Props> = (props) => {
  const { task, onTodoDelete, onTodoUpdate } = props;
  const [isEditing, setIsEditing] = useState(false);
  const [inputValue, setInputValue] = useState(task.text);


  return (
    <div className={styles.todo}>
      <label className={styles.checkbox}>
        <input
          className={styles.checkInput}
          type="checkbox"
          checked={task.isCompleted}
          onChange={
            () => onTodoUpdate(task.id, { ...task, isCompleted: !task.isCompleted })}
        />
        <div
          className={styles.checkboxText}>

        </div>
      </label>
      <div>
        {isEditing ?
          <input
            className={styles.editText}
            value={inputValue}

            onChange={(ev) => {
              setInputValue(ev.target.value);
            }}

            onBlur={() => {
              onTodoUpdate(task.id, { ...task, text: inputValue.trim() });
              setIsEditing(false);
            }}
            autoFocus
          />
          : <div
            className={styles.text}
            onDoubleClick={
              () => setIsEditing(true)}
          >
            {task.text}
          </div>
        }
      </div>
      <button
        className={styles.delete}
        onClick={
          () => onTodoDelete(task.id)}
      >
        +
      </button>
    </div >
  );
};

export default Todo;
