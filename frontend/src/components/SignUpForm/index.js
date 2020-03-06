import React          from 'react';
import { withFormik, Form } from 'formik';

const SignUpForm = (props) => {
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
  } = props;

  return (
    <Form>
      <input
        type="email"
        name="email"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.email}
      />
      {errors.email && touched.email && errors.email}
      <input
        type="password"
        name="password"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.password}
      />
      <input
        type="password"
        name="confirmPassword"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.confirmPassword}
      />
      <input
        type="text"
        name="firstName"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.firstName}
      />
      <input
        type="text"
        name="lastName"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.lastName}
      />
      {errors.password && touched.password && errors.password}
      <button type="submit" disabled={isSubmitting}>
        Submit
      </button>
    </Form>
  );
};

export default withFormik( {
                             mapPropsToValues: () => ({
                               firstName: '',
                               lastName: '',
                               email: '',
                               password: '',
                               confirmPassword: '',
                             }),
                             handleSubmit: (values, formikBag) => {
                               console.log( values );
                               console.log( formikBag );

                             },
                           } )( SignUpForm );