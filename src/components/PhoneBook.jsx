import { Component } from 'react';
import Form from './Form/Form';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import css from './PhoneBook.module.css';
import inithialContacts from './inithialContacts.json';
class PhoneBook extends Component {
  state = {
    contacts: inithialContacts,
    filter: '',
  };

  componentDidMount() {
    const existsContacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(existsContacts);
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  handleAddNewContact = newContact => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };
  // МЕТОД КОТОРЫЙ ДОБАВЛЯЕТ НОВЫЙ КОНТАКТ ПО ЛОГИКЕ РАССПЫЛЕНИЯ ПРЕД МАСИВА(СТЕЙТА)
  // И ДОБАВЛЕНИЯ НОВОГО
  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    const normalizeFilter = filter.toLowerCase();

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizeFilter)
    );
  };

  handleDeleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(({ id }) => id !== contactId),
    }));
  };

  render() {
    const { contacts, filter } = this.state;
    const visibleContacts = this.getVisibleContacts();
    const contactsName = contacts.map(contact => contact.name);

    return (
      <section className={css.sectionWrapper}>
        <h1>Phonebook</h1>
        <Form onSubmit={this.handleAddNewContact} contactsName={contactsName} />

        <h2>Contacts</h2>
        <div>
          <Filter value={filter} onChange={this.changeFilter} />
          <ContactList
            visibleContacts={visibleContacts}
            onDeleteContact={this.handleDeleteContact}
          />
        </div>
      </section>
    );
  }
}

export default PhoneBook;
