import React      from 'react';
import PropTypes  from 'prop-types';
import styles     from './Label.module.scss';
import classNames from 'classnames';

const Label = ({ className, ...rest }) => {
  const classNameValue = classNames( styles.container, className );
  return <label className={classNameValue} {...rest}/>;
};

Label.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Label;