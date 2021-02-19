import React, { useState, useRef, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import { Formik } from 'formik';
import './SignIn.scss';

const SignInData = React.memo(props => {

  // set each state variable independently
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');

  const emptyState = (param=0) => {
     props.clearState(param);
  };

  return (
    <section>
        <Card>
            <p>SIGN IN CONTENT DATA</p>
            <div>
                <button onClick={(e) => { emptyState()}}>Not to Change</button>
                <button onClick={(e) => { emptyState(1)}}>Change</button>S
            </div>
        </Card>
    </section>
  );
});

export default SignInData;


