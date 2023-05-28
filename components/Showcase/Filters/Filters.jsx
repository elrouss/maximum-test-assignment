import PropTypes from 'prop-types';
import { filterGroups } from '../../../utils/constants';
import FilterTabs from './FilterTabs/FilterTabs';
import styles from './Filters.module.scss';
import useWindowDimensions from '../../../hooks/useWindowDimensions';

function Filters({ onFilter, onSelectedFilters }) {
  const isBigScreenDevice = useWindowDimensions() >= 1024;

  const renderFilterTabs = () => {
    if (isBigScreenDevice) {
      return filterGroups.map(({ name, filters }) => (
        <FilterTabs
          key={name}
          heading={name}
          filters={filters}
          onFilter={onFilter}
        />
      ));
    }

    const { name, filters } = filterGroups[0];
    return <FilterTabs heading={name} filters={filters} onFilter={onFilter} />;
  };

  const resetFilter = () => {
    onSelectedFilters({
      engineCapacity: [],
      equipmentName: [],
    });
  };

  return (
    <div className={styles.filters}>
      {renderFilterTabs()}
      {isBigScreenDevice && (
        <button
          className={styles.btnReset}
          type="button"
          aria-label="Сбросить фильтры поиска"
          onClick={() => resetFilter()}
        >
          Сбросить фильтр
        </button>
      )}
    </div>
  );
}

Filters.propTypes = {
  onFilter: PropTypes.func.isRequired,
  onSelectedFilters: PropTypes.func.isRequired,
};

export default Filters;
