import PropTypes from 'prop-types';
import { filterBrandCar, filterGroups } from '../../../utils/constants';
import FilterTabs from './FilterTabs/FilterTabs';
import styles from './Filters.module.scss';
import useWindowDimensions from '../../../hooks/useWindowDimensions';

function Filters({ onFilter, onSelectedFilters }) {
  const isBigScreenDevice = useWindowDimensions() >= 1024;

  const resetFilter = () => {
    onSelectedFilters({
      engineCapacity: [],
      equipmentName: [],
    });
  };

  return (
    <div className={styles.filters}>
      {filterBrandCar.map(({ name, filters }) => (
        <FilterTabs
          heading={name}
          filters={filters}
          onFilter={onFilter}
          checkboxName="brand-car"
          type="radio"
        />
      ))}

      {isBigScreenDevice && (
        <form>
          {filterGroups.map(({ name, filters }) => (
            <FilterTabs
              key={name}
              heading={name}
              filters={filters}
              onFilter={onFilter}
              type="checkbox"
            />
          ))}
          <label htmlFor="test">
            <input
              className={styles.btnReset}
              id="test"
              type="reset"
              value="Сбросить фильтр"
              onClick={() => resetFilter()}
            />
          </label>
        </form>
      )}
    </div>
  );
}

Filters.propTypes = {
  onFilter: PropTypes.func.isRequired,
  onSelectedFilters: PropTypes.func.isRequired,
};

export default Filters;
