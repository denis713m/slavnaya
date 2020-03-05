import React, { Component } from 'react';
import classNames           from 'classnames';

const Input = (props) => {
  const { field, form,  label, ...rest } = props;
console.log(props)
  return (
    <label>
      <div>{label}</div>
      <input {...field} {...rest} className={classNames( 'defaultClass', {
        ['errorClass']: ( form.touched[field.name] && form.error[field.name]),
        ['validClass']: ( form.touched[field.name] && !form.error[field.name]),
      } )} type="text"/>
    </label>
  );
};

export default Input;