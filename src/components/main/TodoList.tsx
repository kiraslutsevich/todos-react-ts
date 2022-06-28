import Todo from './Todo';
import { useAppSelector } from '../../redux/store';
import createRandomId from '../../utils/createRandomId';
import mainSelectores from '../../redux/mainReducer/main.selects';
import { Task } from '../../utils/types';
import { StyledTodoList } from './TodoList.styles';

const TodoList: React.FC = () => {
  const todoList = useAppSelector(mainSelectores.getFilteredTasksWithCount);
  return (
    <StyledTodoList>
      {
        todoList.todoList.map((task: Task) => (
          <Todo
            key={createRandomId()}
            task={task}
          />
        ))}
    </StyledTodoList>
  );
};

export default TodoList;
