import styles from './ToggleAll.module.css';

interface myProps{
  onAllSelect: () => void;
}

const ToggleAll = (props : myProps) => {
  const { onAllSelect } = props;
  return (
    <button
      className={styles.button}
      onClick={() => onAllSelect()}
    >
      ❯
    </button>
  )
}

export default ToggleAll;