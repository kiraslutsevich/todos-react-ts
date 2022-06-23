import styles from './ToggleAll.module.css';

interface Props {
  onAllSelect: () => void;
}

const ToggleAll: React.FC<Props> = (props) => {
  const { onAllSelect } = props;
  return (
    <button
      className={styles.button}
      onClick={() => onAllSelect()}
    >
      ❯
    </button>
  );
};

export default ToggleAll;
