import React      from 'react';
import classNames from 'classnames';
import styles     from './Input.module.scss';

const Input = ({ field, form, meta, ...props }) => {

  const inputClassName = classNames( styles.field, {
    [styles.fieldInvalid]: (meta.touched && meta.error),
    [styles.fieldValid]: (meta.touched && !meta.error),
  } );

  return (
    <label className={styles.container}>
      <div>{props.label}</div>
      <input {...field} className={inputClassName} {...props}/>
      {meta.error && <div className={styles.errorTip}>{meta.error}</div>}
    </label>
  );
};

export default Input;