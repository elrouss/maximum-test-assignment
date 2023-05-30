import PropTypes from 'prop-types';
import FilterTab from './FilterTab/FilterTab';
import styles from './FilterTabs.module.scss';

function FilterTabs({ heading, filters, onFilter, checkboxName, type }) {
  return (
    <div className={styles.filterGroup}>
      <h3 className={styles.heading}>{heading}</h3>
      <ul className={styles.filterTabs}>
        {filters.map((filter) => (
          <li>
            <FilterTab
              key={filter}
              name={filter}
              checkboxName={checkboxName}
              type={type}
              onFilter={onFilter}
            />
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
  checkboxName: PropTypes.string,
  type: PropTypes.string.isRequired,
};

FilterTabs.defaultProps = {
  checkboxName: '',
};

export default FilterTabs;
