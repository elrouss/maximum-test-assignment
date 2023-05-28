import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './FilterTab.module.scss';

function FilterTab({ name, onFilter }) {
  const [isFilterTabSelected, setFilterTabSelected] = useState(false);

  const handleFilterTabSelection = ({ target }) =>
    setFilterTabSelected(!target.classList.contains(styles.filterTabSelected));

  return (
    <button
      className={`${styles.filterTab}${
        (isFilterTabSelected && ` ${styles.filterTabSelected}`) || ''
      }`}
      type="button"
      aria-label={`Фильтрация карточек в галерее по типу: "${name}"`}
      onClick={(evt) => {
        handleFilterTabSelection(evt);
        onFilter(evt);
      }}
    >
      {name}
    </button>
  );
}

FilterTab.propTypes = {
  name: PropTypes.string.isRequired,
  onFilter: PropTypes.func.isRequired,
};

export default FilterTab;
