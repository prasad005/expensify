import React from 'react';
import ReactDOM from 'react-dom';
import {  NavLink } from 'react-router-dom';

const Header = () =>
(
<header>
<h1>Expensify App</h1>
<NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>
<NavLink to="/addexpense" activeClassName="is-active">Create Expense</NavLink>
<NavLink to="/help" activeClassName="is-active">Help</NavLink>

</header>
);

export default Header;