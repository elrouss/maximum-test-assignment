/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';

import Card from './Card/Card';

import styles from './Gallery.module.scss';

function Gallery({ cars, selectedFilters, isLoading }) {
  const [carsFiltered, setCarsFiltered] = useState(cars);
  console.log(isLoading);

  useEffect(() => {
    const res = [];
    const { engineCapacity: criteria1, equipmentName: criteria2 } =
      selectedFilters;
    const uniqueCars = [];
    const uniqueLinks = [];

    cars.forEach((car) => {
      const {
        photobank: { imgs },
      } = car;
      const link = imgs[0].urlThumb;

      if (!uniqueLinks.includes(link)) {
        uniqueLinks.push(link);
        uniqueCars.push(car);
      }
    });

    if (!criteria1.length && !criteria2.length)
      return setCarsFiltered(uniqueCars);

    uniqueCars.forEach((car) => {
      const {
        feedData: {
          equipmentName,
          engine: { engineCapacity },
        },
      } = car;

      if (criteria1.length && !criteria2.length) {
        criteria1.forEach((criteria) => {
          if (String(engineCapacity).replace(/\./g, ',') === criteria) {
            res.push(car);
          }
        });
      }

      if (!criteria1.length && criteria2.length) {
        criteria2.forEach((criteria) => {
          if (equipmentName.includes(criteria)) {
            res.push(car);
          }
        });
      }

      if (criteria1.length && criteria2.length) {
        const criterias = [...criteria1, ...criteria2];

        criterias.forEach((criteria) => {
          if (
            equipmentName.includes(criteria) &&
            criterias.includes(String(engineCapacity).replace(/\./, ','))
          ) {
            res.push(car);
          }
        });
      }
    });

    return setCarsFiltered([...new Set(res)]);
  }, [selectedFilters, cars]);

  return (
    <div
      className={carsFiltered.length ? styles.gallery : styles.galleryNotFound}
    >
      {isLoading
        ? 'Подождите...'
        : (!carsFiltered.length && 'По вашему запросу ничего не найдено') ||
          carsFiltered.map((car) => {
            const {
              _id,
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
                key={_id}
                id={_id}
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
