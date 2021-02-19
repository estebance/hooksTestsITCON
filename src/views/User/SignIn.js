import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Card } from 'react-bootstrap';
import { Formik } from 'formik';
import SignInData from './SignInData';

import './SignIn.scss';

const SignIn = React.memo(props => {
const emailInputRef = useRef();

  // set each state variable independently
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
        if (userEmail === emailInputRef.current.value) {
            console.log('state email', userEmail);
            console.log('input has changed',emailInputRef.current.value);
        }
    });
  }, [userEmail, emailInputRef]);

  //
  // Pass an inline callback and an array of dependencies.
  // useCallback will return a memoized version of the callback that only changes if one of the dependencies has changed.
  // This is useful when passing callbacks to optimized child components that rely on reference equality to prevent unnecessary renders
  const emptyFilter = useCallback(
    (param) => {
        console.log('this code just run if one of my dependencies has changed');
        console.log('new version?', userEmail);
    }, [userEmail, userPassword],
  );

  return (
    <section>
        <Card>
            <p>SIGN IN</p>
            <div>
                <h1>Add your credentials to Sign In</h1>
                 <Formik
                   initialValues={{ email: '', password: '' }}
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
                        setUserEmail(values.email);
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
                         ref={emailInputRef}
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
                       <button type="submit">
                         Submit
                       </button>
                     </form>
                   )}
                 </Formik>
             </div>
             <div>
                 <SignInData clearState={emptyFilter}/>
             </div>
        </Card>
    </section>
  );
});

export default SignIn;

