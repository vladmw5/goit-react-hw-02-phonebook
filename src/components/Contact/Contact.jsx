import PropTypes from 'prop-types';

const Contact = ({ name = 'Unnamed' }) => {
  return (
    <li>
      <span>{name}</span>
    </li>
  );
};

Contact.propTypes = {
  name: PropTypes.string,
};

export default Contact;
