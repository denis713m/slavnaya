import React      from 'react';
import PropTypes  from 'prop-types';
import styles     from './Input.module.scss';
import classNames from 'classnames';

const Input = ({ field, form, meta, className, invalidStyles, validStyles, ...rest }) => {

  const inputClassName = classNames( styles.input, {
    [invalidStyles || styles.inputValid]: meta.touched && !meta.error,
    [validStyles || styles.inputInvalid]: meta.touched && meta.error,
  }, className );

  return (
    <input className={inputClassName} {...rest} {...field}/>
  );
};

Input.propTypes = {
  placeholder: PropTypes.string,
  className: PropTypes.string,
  invalidStyles: PropTypes.string,
  validStyles: PropTypes.string,
};

export default Input;