import { Component } from "react";
import Form from "./Form/Form";
import Filter from "./Filter/Filter";
import ContactList from "./ContactList/ContactList";
import css from './PhoneBook.module.css'

class PhoneBook extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
  };
 
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
        <Form
          onSubmit={this.handleAddNewContact}
          contactsName={contactsName}
        />

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