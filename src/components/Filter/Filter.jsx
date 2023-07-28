import PropTypes from 'prop-types';
import css from './Filter.module.css';

const Filter = ({ value, onChange }) => (
  <div>
    <label>
      <input
        type="text"
        name="filter"
        placeholder="Enter search name"
        title="Enter search name"
        onChange={onChange}
        value={value}
        className={css.filterLabel}
      />
      <button type="reset">Search</button>
    </label>
  </div>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
    
export default Filter;