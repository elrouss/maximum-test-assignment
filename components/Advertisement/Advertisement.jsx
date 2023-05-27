import Image from 'next/image';
import ButtonPromo from '../ButtonPromo/ButtonPromo';

import advertisementImg from '../../public/assets/images/advertisement.png';

import styles from './Advertisement.module.scss';

function Advertisement() {
  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <h2 className={styles.heading}>Кредит на новый Chery Tiggo</h2>
          <p className={styles.subheading}>
            Оформите кредит на любой автомобиль ассортимента дилерского центра
            «Максимум»
          </p>
          <ButtonPromo text="Оформить" />
        </div>
        <Image
          className={styles.promo}
          src={advertisementImg}
          alt="Машина со значком скидки"
          width={1671}
          height={774}
        />
      </div>
    </section>
  );
}

export default Advertisement;
