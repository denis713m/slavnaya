import React, { useState } from 'react';
import { Form, withFormik, Field, FieldArray } from 'formik';
import Button from '../Button';
import StyledErrorMessage from '../StyledErrorMessage';
import Input from '../Input';
import Label from '../Label';
import styles from './SignUpForm.module.scss';
import * as Yup from 'yup';

const SignUpForm = (props) => {

  const { values } = props;
  const [fields, setFields] = useState( [
                                          {
                                            name: 'firstName',
                                            type: 'text',
                                            placeholder: 'Name',

                                          },
                                          {
                                            name: 'lastName',
                                            type: 'text',
                                            placeholder: 'Surname',
                                          },
                                          {
                                            name: 'email',
                                            type: 'email',
                                            placeholder: 'Email address',

                                          },
                                          {
                                            name: 'password',
                                            type: 'password',
                                            placeholder: 'Password',

                                          },
                                          {
                                            name: 'passwordConfirm',
                                            type: 'password',
                                            placeholder: 'Confirm password',

                                          },
                                        ] );

  const renderField = ({ name, ...rest }) => {
    return (
      <Field key={name} name={name} value={values[name]}>
        {
          fieldProps => (
            <Label className={styles.fieldWrapper}>
              <Input {...rest} {...fieldProps} />
              <StyledErrorMessage name={name} className={styles.errorWrapper}/>
            </Label>
          )
        }
      </Field>
    );
  };

  return (
    <Form className={styles.form}>
      {
        fields.map( field => renderField( field ) )
      }
      <Button type='submit' className={styles.submitButton}>Create account</Button>
    </Form>
  );
};

export default withFormik( {
                             mapPropsToValues: () => ({
                               firstName: '',
                               lastName: '',
                               email: '',
                               password: '',
                               passwordConfirm: '',
                             }),
                             handleSubmit: ({ passwordConfirm, password, ...rest }) => {

                               sessionStorage.setItem( 'user', JSON.stringify( {
                                                                                 ...rest,
                                                                                 roles: [
                                                                                   'ROLE_TEST',
                                                                                   'ROLE_TEST_2',
                                                                                   'USER'],
                                                                               } ) );

                             },
                             validationSchema: Yup.object( {
                                                             firstName: Yup.string().label( 'User name' ).required(
                                                               'don\'t forget your name' ),
                                                             lastName: Yup.string().label( 'User surname' ).required(),
                                                             email: Yup.string().email().required(),
                                                             password: Yup.string()
                                                                          .matches(
                                                                            /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?\d)[A-Za-z0-9_@#%!?\-^]{8,16}$/,
                                                                            'Your password must be 8-16 characters, and include at least one lowercase letter, one uppercase letter, and a number. '
                                                                          )
                                                                          .required(),

                                                             passwordConfirm: Yup.string()
                                                                                 .oneOf(
                                                                                   [Yup.ref( 'password' ), null],
                                                                                   'Passwords must match'
                                                                                 ).required(),
                                                           } )
                           } )( SignUpForm );