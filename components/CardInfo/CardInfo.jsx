/* eslint-disable react/prop-types */
import Image from 'next/image';
import iconGuarantee from '../../public/assets/icons/icon_legal-guarantee.svg';
import iconProductionYear from '../../public/assets/icons/icon_car-release.svg';
import iconPetrol from '../../public/assets/icons/icon_petrol.svg';
import iconVariableSpeed from '../../public/assets/icons/icon_variable-speed-drive.svg';

import Slider from '../Slider/Slider';
import Advertisement from '../Advertisement/Advertisement';

import styles from './CardInfo.module.scss';

function CardInfo({
  car: {
    feedData: {
      brandName,
      modelName,
      productionYear,
      vin,
      autoPrice,
      engine: { engineCapacity, enginePower },
      equipmentVariantFuelType,
      equipmentVariantTransmissionType,
    },
    photobank: { imgs },
  },
}) {
  return (
    <>
      <section>
        <div className={styles.wrapper}>
          <h2
            className={styles.heading}
          >{`${brandName} ${modelName} ${productionYear} года`}</h2>
          <p className={styles.subheading}>{`VIN ${vin}`}</p>
          <div className={styles.content}>
            <div>
              <ul className={styles.list}>
                <li className={styles.price}>{`${autoPrice
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}`}</li>
                <li className={styles.guarantee}>
                  <Image
                    className={styles.guaranteeIcon}
                    src={iconGuarantee}
                    width={26}
                    height={37}
                    alt="Иконка в виде красного щитка с галочкой в центре"
                  />
                  Гарантия юр. чистоты
                </li>
              </ul>
              <div>
                <h3 className={styles.headingFeatures}>Характеристики</h3>
                <ul className={styles.features}>
                  <li>
                    <Image
                      className={styles.carIcon}
                      src={iconProductionYear}
                      width={90}
                      height={90}
                      alt="Иконка с изображением машины"
                    />
                    {`${productionYear} год выпуска`}
                  </li>
                  <li>
                    <Image
                      className={styles.carIcon}
                      src={iconPetrol}
                      width={90}
                      height={90}
                      alt="Иконка с изображением двигателя"
                    />
                    {`${engineCapacity} л / ${enginePower} л.с. / ${equipmentVariantFuelType} `}
                  </li>
                  <li>
                    <Image
                      className={styles.carIcon}
                      src={iconVariableSpeed}
                      width={90}
                      height={90}
                      alt="Иконка с изображением ручки переключения передач"
                    />
                    {`КП - ${equipmentVariantTransmissionType}`}
                  </li>
                </ul>
              </div>
            </div>
            <Slider images={imgs} />
          </div>
        </div>
      </section>
      <Advertisement />
    </>
  );
}

export default CardInfo;
