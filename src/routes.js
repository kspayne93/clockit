import React from 'react';
import { Switch, Route } from 'react-router-dom'; //importing from class-based component, so these components need to be destructured
import Homepage from './components/Homepage/Homepage';
import NewPunch from './components/NewPunch/NewPunch';
import EditPunch from './components/EditPunch/EditPunch';


export default (
   <Switch>
      <Route component={ Homepage } exact path='/'></Route>
      <Route component={ NewPunch } path='/new'></Route>
      <Route component={ EditPunch } path='/edit'></Route>
   </Switch>
)