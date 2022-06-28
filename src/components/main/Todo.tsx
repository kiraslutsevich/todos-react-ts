import { useState } from 'react';
import { Task } from '../../utils/types';
import { useAppDispatch } from '../../redux/store';
import { StyledTodo } from './Todo.styles';
import { updateTodo, deleteTodo } from '../../redux/mainReducer/todoSlice';

interface Props {
  task: Task,
}

const Todo: React.FC<Props> = (props) => {
  const { task } = props;
  const [isEditing, setIsEditing] = useState(false);
  const [inputValue, setInputValue] = useState(task.text);
  const dispatch = useAppDispatch();

  return (
    <StyledTodo>
      <button className="checkbox"
        onClick={
          () => dispatch(updateTodo({
            id: task.id,
            data: { ...task, isCompleted: !task.isCompleted },
          }))}
      >
        {task.isCompleted && '✓'}
      </button>
      <div>
        {isEditing
          ? (
            <input
              className="edit-text"
              value={inputValue}

              onChange={(ev) => {
                setInputValue(ev.target.value);
              }}

              onBlur={() => {
                dispatch(updateTodo({
                  id: task.id,
                  data: { ...task, text: inputValue.trim() },
                }));
                setIsEditing(false);
              }}
              autoFocus
            />
          )
          : (
            <div
              className="text"
              onDoubleClick={() => setIsEditing(true)}
            >
              {task.text}
            </div>
          )
        }
      </div>
      <button
        className="delete-btn"
        onClick={() => dispatch(deleteTodo(task.id))}
      >
        +
      </button>
    </StyledTodo>
  );
};

export default Todo;
