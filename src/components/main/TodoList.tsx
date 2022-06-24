import styles from './TodoList.module.css';
import Todo from './Todo';
import { useAppSelector } from '../../redux/store';
import CreateRandomId from '../../utils/CreateRandomId';
import mainSelectores from '../../redux/mainReducer/main.selects';
import { Task } from '../../utils/types';

const TodoList: React.FC = () => {
  const { todoList } = useAppSelector(mainSelectores.getFilteredTasksWithCount);
  return (
    <div className={styles.todoList}>
      {
        todoList.map((task: Task) => (
          <Todo
            key={CreateRandomId()}
            task={task}
          />
        ))}
    </div>
  );
};

export default TodoList;
