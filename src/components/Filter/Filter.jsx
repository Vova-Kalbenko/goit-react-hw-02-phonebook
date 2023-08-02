import PropTypes from 'prop-types';
import css from './Filter.module.css';

const Filter = ({ value, onChange }) => (
  <div>
    <label>
      <input
        type="text"
        name="filter"
        placeholder="Enter search name"
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

// В параметр велью презжает то что значение которрое удет вводить пользователь
// онЧендж - подвязка к методу чЧенджфильтр с файла ФОНБУК (24 СТРОКА)