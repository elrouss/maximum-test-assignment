import PropTypes from 'prop-types';

import styles from './FilterTab.module.scss';

function FilterBtn({ name }) {
  return (
    <button
      className={styles.filterTab}
      type="button"
      aria-label={`Фильтрация карточек в галерее по типу: "${name}"`}
    >
      {name}
    </button>
  );
}

FilterBtn.propTypes = {
  name: PropTypes.string.isRequired,
};

export default FilterBtn;
