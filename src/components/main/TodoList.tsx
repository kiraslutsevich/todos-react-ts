import styles from './TodoList.module.css';
import Todo from './Todo';
import { Task } from '../../utilites/types';
import { useAppSelector, useAppDispatch } from '../../redux/store';
import mainActions from '../../redux/mainReducer/main.actions';

interface Props {
  onTodoUpdate: (id: number, data: Task) => void,
  onTodoDelete: (id: number) => void,
  todoList: Array<Task>,
}

const TodoList: React.FC<Props> = (props) => {
  const { onTodoUpdate, onTodoDelete, todoList } = props;

  const state = useAppSelector((state) => state.main.todoList);
  const dispatch = useAppDispatch();
  // console.log(state);

  return (
    <div className={styles.todoList}>
      <button onClick={() => {
        dispatch(mainActions.setTodoList([{
          id: 1,
          isCompleted: false,
          text: ';lasuidfkasydfkasdyf',
        }]));
      }}>
        Click me
      </button>
      {todoList.map((task) => (
        <Todo
          key={task.id}
          task={task}
          onTodoDelete={onTodoDelete}
          onTodoUpdate={onTodoUpdate}
        />
      ))}
    </div>
  );
};

export default TodoList;
