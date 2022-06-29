import PropTypes from 'prop-types';
import { Fragment } from 'react';

const Filter = ({ name, inputHandler }) => {
  return (
    <Fragment>
      <p>Find Contacts by Name</p>
      <input type="text" name="filter" value={name} onChange={inputHandler} />
    </Fragment>
  );
};

Filter.propTypes = {
  name: PropTypes.string.isRequired,
  inputHandler: PropTypes.func.isRequired,
};

export default Filter;
