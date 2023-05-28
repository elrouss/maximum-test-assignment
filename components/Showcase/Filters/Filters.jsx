import PropTypes from 'prop-types';

import { filterGroups } from '../../../utils/constants';

import FilterTabs from './FilterTabs/FilterTabs';

import styles from './Filters.module.scss';

function Filters({ onFilter, onSelectedFilters }) {
  const resetFilter = () => {
    onSelectedFilters({
      engineCapacity: [],
      equipmentName: [],
    });
  };

  return (
    <div className={styles.filters}>
      {filterGroups.map(({ name, filters }) => (
        <FilterTabs
          key={name}
          heading={name}
          filters={filters}
          onFilter={onFilter}
        />
      ))}
      <button
        className={styles.btnReset}
        type="button"
        aria-label="Сбросить фильтры поиска"
        onClick={() => resetFilter()}
      >
        Сбросить фильтр
      </button>
    </div>
  );
}

Filters.propTypes = {
  onFilter: PropTypes.func.isRequired,
  onSelectedFilters: PropTypes.func.isRequired,
};

export default Filters;
