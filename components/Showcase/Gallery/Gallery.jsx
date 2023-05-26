/* eslint-disable react/prop-types */
import styles from './Gallery.module.scss';

import Card from './Card/Card';

function Gallery({ cars }) {
  return (
    <div className={styles.gallery}>
      {cars.map((car) => {
        const {
          id,
          feedData: {
            brandName,
            modelName,
            equipmentName,
            engine: { engineCapacity, enginePower, engineTransmission },
          },
          photobank: { imgs },
        } = car;

        return (
          <Card
            key={id}
            brandName={brandName}
            modelName={modelName}
            equipmentName={equipmentName}
            engineCapacity={engineCapacity}
            enginePower={enginePower}
            engineTransmission={engineTransmission}
            image={imgs[0].urlThumb}
          />
        );
      })}
    </div>
  );
}

export default Gallery;
