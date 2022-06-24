import styles from './CounterActiveTasks.module.css';

// interface Props{
//   count: number,
// }

const CounterActiveTasks: React.FC = () => {
  return (
    <div className={styles.count}>
      {/* {props.count} */}
       items left
    </div>
  );
};

export default CounterActiveTasks;
