import PropTypes from 'prop-types';

const ContactListItem = ({ id, name, number, onDeleteContact }) => {
  return (
    <li>
      <span>{name}:</span>
      <span>{number}</span>
      <button
        type="button"
        onClick={() => onDeleteContact(id)}
      >delete
      </button>
    </li>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactListItem;