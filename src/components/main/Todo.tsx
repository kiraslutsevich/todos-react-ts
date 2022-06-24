import { useState } from 'react';
import styles from './Todo.module.css';
import { Task } from '../../utils/types';
import { useAppDispatch } from '../../redux/store';
import actions from '../../redux/mainReducer/main.actions';

interface Props {
  task: Task,
}

const Todo: React.FC<Props> = (props) => {
  const { task } = props;
  const [isEditing, setIsEditing] = useState(false);
  const [inputValue, setInputValue] = useState(task.text);
  const dispatch = useAppDispatch();

  return (
    <div className={styles.todo}>
      <label className={styles.checkbox}>
        <input
          className={styles.checkInput}
          type="checkbox"
          checked={task.isCompleted}
          onChange={
            () => dispatch(actions.updateTodo({
              id: task.id,
              data: { ...task, isCompleted: !task.isCompleted },
            }))}
        />
        <div
          className={styles.checkboxText}>
        </div>
      </label>
      <div>
        {isEditing
          ? <input
            className={styles.editText}
            value={inputValue}

            onChange={(ev) => {
              setInputValue(ev.target.value);
            }}

            onBlur={() => {
              dispatch(actions.updateTodo({
                id: task.id,
                data: { ...task, text: inputValue.trim() },
              }));
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
          () => dispatch(actions.deleteTodo(task.id))}
      >
        +
      </button>
    </div >
  );
};

export default Todo;
