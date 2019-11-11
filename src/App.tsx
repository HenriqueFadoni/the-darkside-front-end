import React from 'react';
import { Switch, Route } from 'react-router';

import LoginPage from './containers/LoginPage/LoginPage';

const App: React.FC = () => {
  return (
    <div className="App">
      <Switch>
      <Route path="/login" component={LoginPage} exact />
    </Switch>
    </div>
  );
}

export default App;
