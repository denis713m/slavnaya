import React      from 'react';
import PropTypes  from 'prop-types';
import styles     from './Button.module.scss';
import classNames from 'classnames';

const Button = ({ className, disableClassName, ...rest }) => {

  const buttonClassName = classNames( styles.container, className, { [disableClassName]: rest.disabled } );

  return <button className={buttonClassName} {...rest}/>;

};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  disableClassName: PropTypes.string,
};

export default Button;