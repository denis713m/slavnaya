import { ErrorMessage } from 'formik';
import PropTypes        from 'prop-types';
import React            from 'react';

const StyledErrorMessage = ({ className, ...rest }) => {

  return (
    <ErrorMessage {...rest}>{
      msg => (<div className={className}>{msg}</div>)
    }</ErrorMessage>
  );
};

StyledErrorMessage.propTypes = {
  className: PropTypes.string.isRequired,
};

export default StyledErrorMessage;
