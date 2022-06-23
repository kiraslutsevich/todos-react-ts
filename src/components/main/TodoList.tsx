import styles from './TodoList.module.css';
import Todo from './Todo';
import { Task } from '../../utilites/types';

interface Props {
  onTodoUpdate: (id: number, data: Task) => void,
  onTodoDelete: (id: number) => void,
  todoList: Array<Task>,
}

const TodoList: React.FC<Props> = (props) => {
  const { onTodoUpdate, onTodoDelete, todoList } = props;
  return (
    <div className={styles.todoList}>
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
