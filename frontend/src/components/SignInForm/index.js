import React                   from 'react';
import { Formik, Form, Field } from 'formik';
import Input                   from '../Input';

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

    <Formik onSubmit={handleSubmit} initialValues={initialValues}>
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
            <Field label={'Email'} validate={(value) => 'test'} name="email" type="email" component={Input}/>

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