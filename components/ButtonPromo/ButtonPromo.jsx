import PropTypes from 'prop-types';

import Link from 'next/link';

import styles from './ButtonPromo.module.scss';

export function ButtonPromo({ text, href }) {
  return (
    <Link className={styles.btn} href={href || '#'}>
      {text}
    </Link>
  );
}

ButtonPromo.propTypes = {
  text: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};

export default ButtonPromo;
