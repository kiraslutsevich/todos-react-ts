import styles from './CounterActiveTasks.module.css';
import mainSelectores from '../../redux/mainReducer/main.selects';
import { useAppSelector } from '../../redux/store';

const CounterActiveTasks: React.FC = () => {
  const { activeCounter } = useAppSelector(mainSelectores.getFilteredTasksWithCount);
  return (
    <div className={styles.count}>
      {activeCounter} items left
    </div>
  );
};

export default CounterActiveTasks;
