import PropTypes from 'prop-types';
import { Component } from 'react';
import { nanoid } from 'nanoid';

const INITIAL_STATE = {
  name: '',
  number: '',
};
class Phonebook extends Component {
  state = { name: '', number: '' };

  static propTypes = {
    addContact: PropTypes.func.isRequired,
  };

  handleContactSubmit = event => {
    event.preventDefault();

    const newContact = {
      name: this.state.name,
      number: this.state.number,
      id: nanoid(),
    };
    this.props.addContact(newContact);

    this.resetFields();
  };

  handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  resetFields = () => {
    this.setState({ ...INITIAL_STATE });
  };

  render() {
    const nameInputId = nanoid();
    const phoneNumberInputId = nanoid();
    return (
      <form onSubmit={this.handleContactSubmit}>
        <label htmlFor={nameInputId}>Name</label>
        <input
          id={nameInputId}
          value={this.state.name}
          onChange={this.handleInputChange}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <label htmlFor={phoneNumberInputId}>Phone Number</label>
        <input
          id={phoneNumberInputId}
          value={this.state.number}
          onChange={this.handleInputChange}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <button type="submit">Add Contact</button>
      </form>
    );
  }
}

export default Phonebook;
