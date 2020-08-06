import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from 'components/Header/Header';
import Main from 'components/Main/Main';
import Characters from 'components/Characters/Characters';
import Locations from 'components/Locations/Locations';
import Episodes from 'components/Episodes/Episodes';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path='/characters' component={Characters} />
        <Route path='/locations' component={Locations} />
        <Route path='/episodes' component={Episodes} />
        <Route exact path='/' component={Main} />
      </Switch>
    </>
  );
}

export default App;
