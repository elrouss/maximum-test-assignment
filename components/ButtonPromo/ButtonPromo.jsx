import PropTypes from 'prop-types';

import Link from 'next/link';

import styles from './ButtonPromo.module.scss';

export function ButtonPromo({ classSelector, text, href }) {
  return (
    <Link className={`${styles.btn} ${classSelector || ''}`} href={href || '#'}>
      {text}
    </Link>
  );
}

ButtonPromo.propTypes = {
  classSelector: PropTypes.string,
  text: PropTypes.string.isRequired,
  href: PropTypes.string,
};

ButtonPromo.defaultProps = {
  classSelector: '',
  href: '#',
};

export default ButtonPromo;
