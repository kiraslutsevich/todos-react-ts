import styles from './Footer.module.css';
import CounterActiveTasks from './CounterActiveTasks';
import BtnDelCompletedTasks from './BtnDelCompletedTasks';
import Filtres from './Filtres';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <CounterActiveTasks />
      <Filtres
      />
      <BtnDelCompletedTasks />
    </footer>
  );
};

export default Footer;
