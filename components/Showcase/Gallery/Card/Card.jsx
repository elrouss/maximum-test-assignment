/* eslint-disable react/prop-types */
import Image from 'next/image';
// import Link from 'next/link';

import styles from './Card.module.scss';

function Card({
  brandName,
  modelName,
  equipmentName,
  engineCapacity,
  enginePower,
  engineTransmission,
  image,
}) {
  return (
    // <Link className={styles.link}>
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
      <button className={styles.btn} type="button">
        Подробнее
      </button>
    </article>
    // </Link>
  );
}

export default Card;
