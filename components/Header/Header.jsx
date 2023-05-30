import Logo from '../Logo/Logo';
import styles from './Header.module.scss';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className="wrapper">
        <div className={styles.content}>
          <Logo />
          <div className={styles.line} />
          <h1 className={styles.heading}>Официальный дилер Максимум</h1>
        </div>
      </div>
    </header>
  );
}
