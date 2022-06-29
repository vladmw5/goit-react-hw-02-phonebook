import PropTypes from 'prop-types';
import Contact from 'components/Contact';

const ContactList = ({ contacts }) => {
  return (
    <ul>
      {contacts.map(({ name, id }) => (
        <Contact key={id} name={name} />
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};

export default ContactList;
