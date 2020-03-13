import { Field } from 'formik';
import React     from 'react';

const withField = (options) => (WrappedComponent) => {

  return (props) => {

    return (
      <Field {...options}>
        {
          (fieldProps) => (<WrappedComponent {...props} {...fieldProps}/>)
        }
      </Field>
    );
  };

};

export default;
