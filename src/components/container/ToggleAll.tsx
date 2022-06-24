import styles from './ToggleAll.module.css';
import mainSelectores from '../../redux/mainReducer/main.selects';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import actions from '../../redux/mainReducer/main.actions';

const ToggleAll: React.FC = () => {
  const { activeCounter } = useAppSelector(mainSelectores.getFilteredTasksWithCount);
  const dispatch = useAppDispatch();
  return (
    <button
      className={styles.button}
      onClick={() => dispatch(actions.toggleAll(activeCounter))}
    >
      ❯
    </button>
  );
};

export default ToggleAll;
