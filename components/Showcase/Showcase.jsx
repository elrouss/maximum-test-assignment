/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';

import { URLS, filterGroups } from '../../utils/constants';

import Filters from './Filters/Filters';
import Gallery from './Gallery/Gallery';

import styles from './Showcase.module.scss';

function Showcase({ list }) {
  const [isLoading, setLoading] = useState(false);
  const [selectedBrandCar, setSelectedBrandCar] = useState('Chery');
  const [selectedFilters, setSelectedFilters] = useState({
    engineCapacity: [],
    equipmentName: [],
  });
  const [cars, setCars] = useState(list || []);

  const toggleFilterTabs = (param, item) => {
    if (!selectedFilters[param].includes(item)) {
      setSelectedFilters((prevState) => ({
        ...prevState,
        [param]: [...prevState[param], item],
      }));
    } else {
      const index = selectedFilters[param].indexOf(item);

      const newFilters = [
        ...selectedFilters[param].slice(0, index),
        ...selectedFilters[param].slice(index + 1),
      ];

      setSelectedFilters((prevState) => ({
        ...prevState,
        [param]: newFilters,
      }));
    }
  };

  const filterCars = ({ target }) => {
    const key = target.textContent;
    const [filterBrandCar, filterEngineCapacity, filterEquipment] =
      filterGroups;

    if (filterBrandCar.filters.includes(key)) {
      URLS.SELECTED_BRAND_NAME = key;
      setSelectedBrandCar(key);
    }

    if (filterEngineCapacity.filters.includes(key)) {
      const keyCleaned = key.replace(/[^\d,]/g, '').replace(/,0+/g, '');

      toggleFilterTabs('engineCapacity', keyCleaned);
    }

    if (filterEquipment.filters.includes(key)) {
      toggleFilterTabs('equipmentName', key);
    }
  };

  const handleBrandCar = async () => {
    try {
      setLoading(true);

      const response = await fetch(`${URLS.SHOWCASE}${selectedBrandCar}`);
      const data = await response.json();

      if (!data) throw new Error();

      return setCars(data.list);
    } catch (err) {
      return console.error(
        `Ошибка в процессе запроса данных на сервере: ${err}`
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleBrandCar();
  }, [selectedBrandCar]);

  return (
    <section className={styles.section}>
      <div className="wrapper">
        <h2
          className={styles.heading}
        >{`Автомобили ${selectedBrandCar} в СПб`}</h2>
        <div className={styles.content}>
          <Filters
            onFilter={filterCars}
            onSelectedFilters={setSelectedFilters}
          />
          <Gallery
            cars={cars}
            selectedFilters={selectedFilters}
            isLoading={isLoading}
          />
        </div>
      </div>
    </section>
  );
}

export default Showcase;
