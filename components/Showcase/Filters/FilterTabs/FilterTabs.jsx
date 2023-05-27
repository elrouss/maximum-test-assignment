import PropTypes from 'prop-types';

import styles from './FilterTabs.module.scss';

import FilterTab from './FilterTab/FilterTab';

function FiltersGroup({ heading, filters }) {
  return (
    <div className={styles.filterGroup}>
      <h3 className={styles.heading}>{heading}</h3>
      <ul className={styles.filterTabs}>
        {filters.map((filter) => (
          <li>
            <FilterTab key={filter} name={filter} />
          </li>
        ))}
      </ul>
    </div>
  );
}

FiltersGroup.propTypes = {
  heading: PropTypes.string.isRequired,
  filters: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default FiltersGroup;
