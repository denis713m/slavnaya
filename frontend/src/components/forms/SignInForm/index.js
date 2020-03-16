import React, { useState }                     from 'react';
import { Form, withFormik, Field, FieldArray } from 'formik';
import * as Yup                                from 'yup';
import Input                                   from '../Input';
import Label                                   from '../Label';
import StyledErrorMessage                      from '../StyledErrorMessage';
import styles                                  from './SignInForm.module.scss';
import Button                                  from '../Button';


const SignInForm = (props) => {

  const { values, isSubmitting } = props;
  const [fields, setFields] = useState( [
                                          {
                                            name: 'email',
                                            type: 'email',
                                            placeholder: 'Email Address',
                                          },
                                          {
                                            name: 'password',
                                            type: 'password',
                                            placeholder: 'Password',
                                          },
                                        ] );

  const renderFields = () => {

    return fields.map( ({ name, ...rest }) => (
      <Field key={name} name={name} value={values[name]}>
        {
          fieldProps => (
            <Label className={styles.fieldWrapper}>
              <Input {...rest} {...fieldProps}/>
              <StyledErrorMessage className={styles.errorWrapper} name={fieldProps.field.name}/>
            </Label>
          )
        }
      </Field>) );
  };

  return (
    <Form className={styles.form}>
      {
        renderFields()
      }
      <Button onClick={props.submitForm} className={styles.submitButton} disabled={isSubmitting}
              type='submit'>login</Button>
    </Form>
  );
};

export default withFormik( {
                             handleSubmit: (values, formikBag) => { alert( JSON.stringify( values, null, 4 ) ); },
                             mapPropsToValues: () => ({
                               email: '',
                               password: '',
                             }),
                             validationSchema: Yup.object( {
                                                             email: Yup.string().email('abrakadabra').required(),
                                                             password: Yup.string().required('Password must co...'),
                                                           } )
                           } )( SignInForm );