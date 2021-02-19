import React from 'react';

const Welcome = React.lazy(() => import('./views/Welcome/Welcome'));
const SignUp = React.lazy(() => import('./views/User/SignUp'));
const SignIn = React.lazy(() => import('./views/User/SignIn'));

const routes = [
    { path: '/', exact: true, name: '', component: Welcome },
    { path: '/sign-in', exact: true, name: '', component: SignIn },
    { path: '/sign-up', exact: true, name: '', component: SignUp },
];

export default routes;
