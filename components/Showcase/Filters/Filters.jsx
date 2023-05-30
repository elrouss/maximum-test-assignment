import PropTypes from 'prop-types';
import { filterBrandCar, filterGroups } from '../../../utils/constants';
import FilterTabs from './FilterTabs/FilterTabs';
import styles from './Filters.module.scss';

function Filters({ onFilter, onSelectedFilters, isBigScreenDevice }) {
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
          key={name}
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
          <label htmlFor="resetBtn">
            <input
              className={styles.btnReset}
              id="resetBtn"
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
  isBigScreenDevice: PropTypes.bool,
};

Filters.defaultProps = {
  isBigScreenDevice: false,
};

export default Filters;
