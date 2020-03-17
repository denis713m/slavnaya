import React                      from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';

const DashboardNav = () => {
  return (
    <ul>
      <li><NavLink  to={'/dashboard/link1'}>Link number #1</NavLink></li>
      <li><NavLink   to={'/dashboard/link2'}>Link number #2</NavLink></li>
      <li><NavLink to={'/dashboard/link3'}>Link number #3</NavLink></li>
    </ul>
  );
};

const DashboardPage = () => {
  return (
    <>
      <DashboardNav/>
      <Switch>
        <Route path="/dashboard/link1">
          <h1>1</h1>
        </Route>
        <Route path="/dashboard/link2">
          <h1>2</h1>
        </Route>
        <Route path="/dashboard/link3">
          <h1>3</h1>
        </Route>
      </Switch>
    </>
  );
};

export default DashboardPage;