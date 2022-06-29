import PropTypes from 'prop-types';

const Contact = ({ name, number, id, deleteBtnHandler }) => {
  return (
    <li>
      <span>{`${name}: `}</span>
      <span>{`${number} `}</span>
      <button type="button" data-id={id} onClick={deleteBtnHandler}>
        Delete Contact
      </button>
    </li>
  );
};

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  deleteBtnHandler: PropTypes.func.isRequired,
};

export default Contact;
