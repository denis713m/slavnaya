import React                   from 'react';
import { Formik, Form, Field } from 'formik';
import Input                   from '../Input';
import * as Yup                from 'yup';

const loginSchema = Yup.object().shape( {
                                          email: Yup.string().email().required(),
                                          password: Yup.string().min( 8 )
                                        } );

const SignInForm = () => {

  const handleSubmit = (values, formikBag) => {
    console.log( values );
    console.log( formikBag );
  };

  const initialValues = {
    email: '',
    password: '',
  };
  return (

    <Formik onSubmit={handleSubmit} validationSchema={loginSchema} initialValues={initialValues}>
      {
        ({
           values,
           errors,
           touched,
           handleChange,
           handleBlur,
           handleSubmit,
           isSubmitting,
         }) => (
          <Form>
            <Field
              name="email"
              type="email">
              {
                (emailProps) => (<Input {...emailProps} label={'Email'}/>)
              }
            </Field>

            {/*
             <Field children={Input}/>
             */}
            {false}
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )
      }
    </Formik>
  );
};

export default SignInForm;