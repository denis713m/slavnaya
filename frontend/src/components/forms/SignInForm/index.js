import React                                     from 'react';
import { Form, Field, withFormik, ErrorMessage } from 'formik';
import * as Yup                                  from 'yup';
import Button                                    from '../../Button';
import Input                                     from '../Input';
import styles                                    from './SignInForm.module.scss';
import Label                                     from '../Label';
import StyledErrorMessage                        from '../Error';

const SignInForm = props => {

  const { values, submitForm } = props;

  return (
    <Form className={styles.form}>
      <Field name='email' value={values.email}>
        {
          (fieldProps) => (
            <Label className={styles.fieldContainer}>
              <Input type='email' placeholder='Email address'  {...fieldProps} />
              <StyledErrorMessage className={styles.error} name={'email'}/>
            </Label>
          )
        }
      </Field>
      <Field name='password' value={values.password}>
        {
          (fieldProps) => (
            <Label className={styles.fieldContainer}>
              <Input type='password' placeholder='Password'  {...fieldProps} />
              <StyledErrorMessage className={styles.error} name={'password'}/>
            </Label>
          )
        }
      </Field>
      <Button onClick={submitForm} className={styles.submitButton}>login</Button>
    </Form>
  );
};

export default withFormik( {
                             mapPropsToValues: () => ({ email: '', password: '' }),
                             handleSubmit: (values, formikBag) => { console.log( values ); },
                             validationSchema: Yup.object( {
                                                             email: Yup.string().email().required(),
                                                             password: Yup.string().required().matches(
                                                               /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?\d)[A-Za-z0-9_@#%!?\-^]{8,60}$/ ),
                                                           } )
                           } )( SignInForm );