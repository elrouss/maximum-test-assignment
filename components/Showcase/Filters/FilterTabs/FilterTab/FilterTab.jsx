import PropTypes from 'prop-types';
import styles from './FilterTab.module.scss';

function FilterTab({ name, checkboxName, type, onFilter }) {
  return (
    <>
      <input
        className={styles.customCheckbox}
        id={name}
        type={type}
        name={checkboxName || ''}
        defaultChecked={name === 'Chery'}
        onChange={(evt) => onFilter(evt)}
      />
      <label className={styles.customLabel} htmlFor={name}>
        {name}
      </label>
    </>
  );
}

FilterTab.propTypes = {
  name: PropTypes.string.isRequired,
  checkboxName: PropTypes.string,
  type: PropTypes.string.isRequired,
  onFilter: PropTypes.func.isRequired,
};

FilterTab.defaultProps = {
  checkboxName: '',
};

export default FilterTab;
