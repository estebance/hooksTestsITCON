import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import './Welcome.scss';

// REACT MEMO -->
// If your component renders the same result given the same props,
// you can wrap it in a call to React.memo for a performance boost in some cases by memoizing the result.

// REACT LAZY
// React.lazy() lets you define a component that is loaded dynamically.
// This helps reduce the bundle size to delay loading components that aren’t used during the initial render.

const Welcome = React.memo(props => {

  let goTo = (option) => {
    if (option == 'sign_in'){
        props.history.push('/sign-in');
    } else if (option == 'sign_up'){
        props.history.push('/sign-up');
    }
  };

  return (
    <section>
        <Card>
            <p className="welcomeMessage">WELCOME</p>
            <a onClick={(e) => {goTo('sign_in')}}> Sign In </a>
            <a onClick={(e) => {goTo('sign_up')}}> Sign Up</a>
        </Card>
    </section>
  );
});

export default Welcome;

