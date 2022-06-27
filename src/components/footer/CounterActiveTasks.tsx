import mainSelectores from '../../redux/mainReducer/main.selects';
import { useAppSelector } from '../../redux/store';
import { CountStyle } from './CounterActiveTasks.styles';

const CounterActiveTasks: React.FC = () => {
  const { activeCounter } = useAppSelector(mainSelectores.getFilteredTasksWithCount);
  return (
    <CountStyle>
      {activeCounter} items left
    </CountStyle>
  );
};

export default CounterActiveTasks;
