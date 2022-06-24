import styles from './BtnDelCompletedTasks.module.css';
import actions from '../../redux/mainReducer/main.actions';
import { useAppDispatch } from '../../redux/store';

const BtnDelCompletedTasks: React.FC = () => {
  const dispatch = useAppDispatch();
  return (
    <button
      className={styles.btn}
      onClick={() => dispatch(actions.clearCompleted())}
    >
      Clear completed
    </button>
  );
};

export default BtnDelCompletedTasks;
