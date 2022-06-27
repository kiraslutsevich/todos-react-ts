import Todo from './Todo';
import { useAppSelector } from '../../redux/store';
import CreateRandomId from '../../utils/CreateRandomId';
import mainSelectores from '../../redux/mainReducer/main.selects';
import { Task } from '../../utils/types';
import { TodoListStyle } from './TodoList.styles';

const TodoList: React.FC = () => {
  const { todoList } = useAppSelector(mainSelectores.getFilteredTasksWithCount);
  return (
    <TodoListStyle>
      {
        todoList.map((task: Task) => (
          <Todo
            key={CreateRandomId()}
            task={task}
          />
        ))}
    </TodoListStyle>
  );
};

export default TodoList;
