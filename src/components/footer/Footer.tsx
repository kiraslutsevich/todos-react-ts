import styles from './Footer.module.css';
import CounterActiveTasks from './CounterActiveTasks';
import BtnDelCompletedTasks from './BtnDelCompletedTasks';
import Filtres from './Filtres';
import { FilterValue, SetFilter } from '../../utilites/types';

interface Props{
  activeTasksCounter: number,
  onFilterChange: SetFilter,
  onCompletedClear: () => void,
  filter: FilterValue,
}

const Footer = (props: Props) => {
  const { activeTasksCounter, onFilterChange, onCompletedClear, filter } = props;
  return (
    <footer className={styles.footer}>
      <CounterActiveTasks
        count={activeTasksCounter}
      />
      <Filtres
        onFilterChange={onFilterChange}
        filter={filter}
      />
      <BtnDelCompletedTasks
        onCompletedClear={onCompletedClear}
      />
    </footer>
  );
};

export default Footer;
