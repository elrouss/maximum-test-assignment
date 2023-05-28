/* eslint-disable react/prop-types */
import Image from 'next/image';
import { ButtonPromo } from '../../../ButtonPromo/ButtonPromo';

import styles from './Card.module.scss';

function Card({
  id,
  brandName,
  modelName,
  equipmentName,
  engineCapacity,
  enginePower,
  engineTransmission,
  image,
}) {
  return (
    <article className={styles.card}>
      <Image
        className={styles.image}
        width={440}
        height={292}
        src={image}
        alt={`Машина модели "${brandName} ${modelName}"`}
      />
      <div className={styles.description}>
        <h3 className={styles.heading}>{`${brandName} ${modelName}`}</h3>
        <p className={styles.subheading}>{equipmentName}</p>
        <p className={styles.details}>{`${String(engineCapacity).replace(
          /\./g,
          ','
        )} / ${enginePower} Л.С. / ${engineTransmission}`}</p>
      </div>
      <ButtonPromo
        classSelector={styles.btnCard}
        text="Подробнее"
        href={`/${id}`}
      />
    </article>
  );
}

export default Card;
