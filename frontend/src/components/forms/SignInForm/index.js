import React                       from 'react';
import { Form, withFormik, Field } from 'formik';
import * as Yup                    from 'yup';
import Input                       from '../Input';
import Label                       from '../Label';
import StyledErrorMessage          from '../StyledErrorMessage';

import styles from './SignInForm.module.scss';
import Button from '../Button';

const SignInForm = (props) => {

  const { values, isSubmitting } = props;

  const fieldRender = (name, type, placeholder) => {
    return (
      <Field name={name} value={values[name]}>
        {
          fieldProps => (
            <Label className={styles.fieldWrapper}>
              <Input placeholder={placeholder} type={type} {...fieldProps}/>
              <StyledErrorMessage className={styles.errorWrapper} name={fieldProps.field.name}/>
            </Label>
          )
        }
      </Field>
    );
  };

  return (
    <Form className={styles.form}>
      {
        fieldRender( 'email', 'email', 'Email address' )
      }
      {
        fieldRender( 'password', 'password', 'Password' )
      }
      <Button className={styles.submitButton} disabled={isSubmitting} type='submit'>login</Button>
    </Form>
  );
};

export default withFormik( {
                             handleSubmit: (values, formikBag) => { alert( JSON.stringify( values, null, 4 ) ); },
                             mapPropsToValues: () => ({ email: '', password: '' }),
                             validationSchema: Yup.object( {
                                                             email: Yup.string().email().required(),
                                                             password: Yup.string().required(),
                                                           } )
                           } )( SignInForm );