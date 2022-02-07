import React from 'react'

import { Switch, Route } from 'react-router-dom'

import Dashboard from '../pages/Dashboard'
import NewUser from '../pages/register/Register'
import Login from '../pages/Login/Login'
import Settings from '../pages/Settings/Settings'



const Routes = () => {
    return (
        <Switch>
            <Route path='/' exact component={Dashboard} />
            <Route path='/register' component={NewUser} />
            <Route path='/Login' component={Login} />
            <Route path='/settings' component={Settings} />
        </Switch>
    )
}

export default Routes