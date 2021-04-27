import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import * as ROUTES from './constants/routes';
import UserContext from './context/user';
import useAuthListener from './hooks/user-auth-listener';

const LoginPage =  lazy (()=> import ('./pages/login'));
const SignupPage =  lazy (()=> import ('./pages/signup'));
const Dashboard =  lazy (()=> import ('./pages/dashboard'));
const NotFoundPage = lazy (()=> import('./pages/notfound'));

function App() { 
  const {user} = useAuthListener();
  return (
    <UserContext.Provider value={{user}}>
      <Router>
        <Suspense fallback={<p>Loading...</p>}>
          <Switch>
            <Route path={ROUTES.LOGIN} component={LoginPage}/>
            <Route path={ROUTES.SIGN_UP} component={SignupPage}/>
            <Route path={ROUTES.DASHBOARD} component={Dashboard}/>
            <Route component={NotFoundPage}/>
          </Switch>
        </Suspense>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
