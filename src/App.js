import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import * as ROUTES from './constants/routes'

const LoginPage =  lazy (()=> import ('./pages/login'));
const SignupPage =  lazy (()=> import ('./pages/signup'));

function App() { 
  return (
    <Router>
      <Suspense fallback={<p>Loading...</p>}>
        <Switch>
          <Route path={ROUTES.LOGIN} component={LoginPage}/>
          <Route path={ROUTES.SIGN_UP} component={SignupPage}/>
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
