import React, { Component, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import routes from '../../routes';
import logo from '../../logo.svg';

class DefaultLayout extends Component {

  constructor(props) {
    super(props);
  }

  render(){
    return (
        <div className="App">
            <div className="app-body">
                <header className="App-header">
                    <a
                      className="App-link"
                      href="https://reactjs.org"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      React hooks template
                    </a>
                </header>
                <main className="main">
                    <Container>
                        <Switch>
                          {
                            routes.map((route, idx) => {
                                return route.component ? (
                                  <Route
                                    key={idx}
                                    path={route.path}
                                    exact={route.exact}
                                    name={route.name}
                                    render={props => (
                                      <route.component {...props} />
                                    )} />
                                ) : (null);
                            })
                          }
                        </Switch>
                    </Container>
                </main>
              </div>
        </div>
    );
  };

};

export default DefaultLayout;
