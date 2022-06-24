import styles from './Footer.module.css';
import CounterActiveTasks from './CounterActiveTasks';
import BtnDelCompletedTasks from './BtnDelCompletedTasks';
import Filtres from './Filtres';

// interface Props {
//   activeTasksCounter: number,
// }

const Footer = () => {
  // const { activeTasksCounter, onCompletedClear } = props;
  return (
    <footer className={styles.footer}>
      <CounterActiveTasks
        // count={activeTasksCounter}
      />
      <Filtres
      />
      <BtnDelCompletedTasks
        // onCompletedClear={onCompletedClear}
      />
    </footer>
  );
};

export default Footer;
