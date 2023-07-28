import PropTypes from 'prop-types';
import ContactListItem from 'components/ContactListItem/ContactListItem';
 import css from './ContactList.module.css';

const ContactList = ({ visibleContacts, onDeleteContact }) => {
  return (
    <ul className={css.contactsList}>
      {visibleContacts.length !== 0 ? (
        visibleContacts.map(({ id, name, number }) => {
          return (
            <ContactListItem
              key={id}
              id={id}
              name={name}
              number={number}
              onDeleteContact={onDeleteContact}
            />
          );
        })
      ) : (
        <li>Not found name</li>
      )}
    </ul>
  );
};

export default ContactList;

ContactList.propTypes = {
  visibleContacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};