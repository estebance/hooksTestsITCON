import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import { Formik } from 'formik';
import './SignUp.scss';

const SignUp = React.memo(props => {
  return (
    <section>
        <Card>
            <p>SIGN UP</p>
             <Formik
               initialValues={{ email: '', password: '', passwordConfirmation: ''}}
               validate={values => {
                 const errors = {};
                 if (!values.email) {
                   errors.email = 'Required';
                 } else if (
                   !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                 ) {
                   errors.email = 'Invalid email address';
                 }
                 return errors;
               }}
               onSubmit={(values, { setSubmitting }) => {
                 setTimeout(() => {
                   alert(JSON.stringify(values, null, 2));
                   setSubmitting(false);
                 }, 400);
               }}
             >
               {({
                 values,
                 errors,
                 touched,
                 handleChange,
                 handleBlur,
                 handleSubmit,
                 isSubmitting
               }) => (
                 <form onSubmit={handleSubmit}>
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
                   {errors.password && touched.password && errors.password}
                   <input
                     type="passwordConfirmation"
                     name="passwordConfirmation"
                     onChange={handleChange}
                     onBlur={handleBlur}
                     value={values.passwordConfirmation}
                   />
                   {errors.passwordConfirmation && touched.passwordConfirmation && errors.passwordConfirmation}

                   <button type="submit" disabled={isSubmitting}>
                     Submit
                   </button>
                 </form>
               )}
             </Formik>
        </Card>
    </section>
  );
});

export default SignUp;

