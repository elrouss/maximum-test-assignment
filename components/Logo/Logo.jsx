import Link from 'next/link';
import Image from 'next/image';

import logo from '../../public/assets/icons/logo.svg';

import styles from './Logo.module.scss';

import { ROUTES } from '../../utils/constants';

function Logo() {
  return (
    <Link href={ROUTES.ROOT}>
      <Image
        className={styles.logo}
        width={154}
        height={42}
        src={logo}
        alt='Логотип автомобильного холдинга "Максимум" в виде заглавной буквы "М" с надписью "Нам 15 лет"'
      />
    </Link>
  );
}

export default Logo;
