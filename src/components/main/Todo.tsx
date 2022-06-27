import { useState } from 'react';
import { Task } from '../../utils/types';
import { useAppDispatch } from '../../redux/store';
import actions from '../../redux/mainReducer/main.actions';
import { TodoStyle } from './Todo.styles';

interface Props {
  task: Task,
}

const Todo: React.FC<Props> = (props) => {
  const { task } = props;
  const [isEditing, setIsEditing] = useState(false);
  const [inputValue, setInputValue] = useState(task.text);
  const dispatch = useAppDispatch();

  return (
    <TodoStyle>
      <button className="checkbox"
        onClick={
          () => dispatch(actions.updateTodo({
            id: task.id,
            data: { ...task, isCompleted: !task.isCompleted },
          }))}
      >
        {task.isCompleted && '✓'}
      </button>
      <div>
        {isEditing
          ? <input
            className="edit-text"
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
            className="text"
            onDoubleClick={
              () => setIsEditing(true)}
          >
            {task.text}
          </div>
        }
      </div>
      <button
        className="delete-btn"
        onClick={
          () => dispatch(actions.deleteTodo(task.id))}
      >
        +
      </button>
    </TodoStyle>
  );
};

export default Todo;
