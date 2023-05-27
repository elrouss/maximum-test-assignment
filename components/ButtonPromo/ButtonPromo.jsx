import Link from 'next/link';

import styles from './ButtonPromo.module.scss';

export function ButtonPromo({ text, href }) {
  return (
    <Link className={styles.btn} href={href || '#'}>
      {text}
    </Link>
  );
}

export default ButtonPromo;
