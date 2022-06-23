import styles from './Header.module.css';

const Header: React.FC = () => {
  return (
    <h1
      className={styles.head}
    >
      todos
    </h1>
  );
};

export default Header;
