import mainSelectores from '../../../redux/mainReducer/main.selects';
import { useAppSelector } from '../../../redux/store';
import { StyledCount } from './CounterActiveTasks.styles';

const CounterActiveTasks: React.FC = () => {
  const { activeCounter } = useAppSelector(mainSelectores.getFilteredTasksWithCount);
  return (
    <StyledCount>
      {activeCounter} items left
    </StyledCount>
  );
};

export default CounterActiveTasks;
