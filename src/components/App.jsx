import { Fragment, Component } from 'react';
import { nanoid } from 'nanoid';

import Section from './Section';
import ContactList from './ContactList';

const INITIAL_STATE = {
  name: '',
};

class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  handleContactSubmit = event => {
    event.preventDefault();

    const newContact = { name: this.state.name, id: nanoid() };
    this.setState(prevState => {
      return { contacts: [...prevState.contacts, newContact] };
    });

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
    return (
      <Fragment>
        <Section title="Phonebook">
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
            <button type="submit">Add Contact</button>
          </form>
        </Section>
        <Section title="Contacts">
          <ContactList contacts={this.state.contacts} />
        </Section>
      </Fragment>
    );
  }
}

export default App;
