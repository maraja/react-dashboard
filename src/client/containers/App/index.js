import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Home from '../Home'
import Login from '../Login'
import NotFound from '../NotFound'
import Dashboard from '../Dashboard'
import UserList from '../UserList'
import UserForm from '../UserForm'
import PrivateRoute from '../../components/PrivateRoute'
import './index.less'

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={Login} />
          <PrivateRoute exact path='/admin' component={() => <Redirect to='/admin/dashboard' />} />
          <PrivateRoute exact path='/admin/dashboard' component={Dashboard} />
          <PrivateRoute exact path='/admin/users' component={UserList} />
          <PrivateRoute exact path='/admin/users/create' component={props => <UserForm {...props} type='create' />} />
          <PrivateRoute exact path='/admin/users/edit/:itemId' component={props => <UserForm {...props} type='edit' />} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    )
  }
}
