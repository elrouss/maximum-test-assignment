import PropTypes from 'prop-types';
import styles from './FilterTab.module.scss';

function FilterTab({ name, checkboxName, type, onFilter }) {
  return (
    <>
      <input
        className={styles.customCheckbox}
        id={name.replace(/\s/g, '')}
        type={type}
        name={checkboxName || `checkbox${name}`}
        value={name}
        defaultChecked={name === 'Chery'}
        onChange={(evt) => onFilter(evt)}
      />
      <label className={styles.customLabel} htmlFor={name.replace(/\s/g, '')}>
        {name}
      </label>
    </>
  );
}

FilterTab.propTypes = {
  name: PropTypes.string.isRequired,
  checkboxName: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onFilter: PropTypes.func.isRequired,
};

export default FilterTab;
