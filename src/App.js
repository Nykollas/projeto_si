import React from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import Empresas from './pages/Empresas';
import Login from './pages/Login';
import NewPassword from './pages/NewPassword';
import PasswordRecovery from './pages/PasswordRecovery';
import PasswordRecoveryCode from './pages/PasswordRecoveryCode'
import User from './pages/User';






function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login></Login>
        </Route>
        <Route path="/register">
        </Route>
        <Route path="/empresas">
          <Empresas></Empresas>
        </Route>
        <Route path="/home">
            <Dashboard></Dashboard>
        </Route>
        <Route path="/forgot_password">
            <PasswordRecovery></PasswordRecovery>
        </Route>
        <Route path="/code_password">
          <PasswordRecoveryCode></PasswordRecoveryCode>
        </Route>
        <Route path="/recovery_password">
            <NewPassword></NewPassword>
        </Route>
        <Route path="/user">
            <User></User>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
