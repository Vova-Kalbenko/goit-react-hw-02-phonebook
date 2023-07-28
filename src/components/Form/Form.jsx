import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import css from './Form.module.css'
class Form extends Component {
  state = {
    name: '',
    number: '',
  };
  nameInputId = nanoid();
  numberInputId = nanoid();
  handleInputChange = e => {
    const { name, value } = e.currentTarget;
    if (name === '' || this.number === '') {
      alert('all fields must be fill in');
      return;
    }

    this.setState({ [name]: value });
  };
  handleSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;
    const matchName = this.props.contactsName.some(
      contactName => name.toLowerCase() === contactName.toLowerCase()
    );
    if (matchName) {
      return alert(`${name} is already in contacts`);
    }

    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    this.props.onSubmit(newContact);
    this.resetForm();
  };
  resetForm = () => {
    this.setState({ name: '', number: '' });
  };
  render() {
    const { name, number } = this.state;
    return (
      <div>
        <h3>Phonebook</h3>
        <form onSubmit={this.handleSubmit} className={css.form}>
          <label htmlFor={this.nameInputId}>
            Name
            <input
              type="text"
              value={name}
              onChange={this.handleInputChange}
              id={this.nameInputId}
              name="name"
              className={css.nameInput}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
          <label htmlFor={this.numberInputId}>
            Number
            <input
              type="tel"
              value={number}
              onChange={this.handleInputChange}
              id={this.numberInputId}
              name="number"
              className={css.numberInput}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>
          <button type="submit">
        <span></span>
      <span></span>
      <span></span>
      <span></span>
          add contact
        </button>
        </form>
      </div>
    );
  }
}
Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  contactsName: PropTypes.arrayOf(PropTypes.string.isRequired),
};
export default Form;
