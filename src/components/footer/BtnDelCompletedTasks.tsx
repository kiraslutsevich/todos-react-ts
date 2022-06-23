import styles from './BtnDelCompletedTasks.module.css';

interface Props {
  onCompletedClear: () => void,
}

const BtnDelCompletedTasks: React.FC<Props> = (props) => {
  const { onCompletedClear } = props;
  return (
    <button
      className={styles.btn}
      onClick={onCompletedClear}
    >
      Clear completed
    </button>
  );
};

export default BtnDelCompletedTasks;
