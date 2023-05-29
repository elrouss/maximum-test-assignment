import PropTypes from 'prop-types';
import FilterTab from './FilterTab/FilterTab';
import styles from './FilterTabs.module.scss';

function FilterTabs({ heading, filters, onFilter }) {
  return (
    <div className={styles.filterGroup}>
      <h3 className={styles.heading}>{heading}</h3>
      <ul className={styles.filterTabs}>
        {filters.map((filter) => (
          <li>
            <FilterTab key={filter} name={filter} onFilter={onFilter} />
          </li>
        ))}
      </ul>
    </div>
  );
}

FilterTabs.propTypes = {
  heading: PropTypes.string.isRequired,
  filters: PropTypes.arrayOf(PropTypes.string).isRequired,
  onFilter: PropTypes.func.isRequired,
};

export default FilterTabs;
