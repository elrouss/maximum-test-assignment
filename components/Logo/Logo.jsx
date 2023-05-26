import Link from 'next/link';
import Image from 'next/image';

import logo from '../../public/assets/icons/logo.svg';

import { ROUTES } from '../../utils/constants';

function Logo() {
  return (
    <Link href={ROUTES.ROOT}>
      <Image
        src={logo}
        alt='Логотип автомобильного холдинга "Максимум" в виде заглавной буквы "М" с надписью "Нам 15 лет"'
      />
    </Link>
  );
}

export default Logo;
