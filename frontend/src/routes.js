import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Register from './pages/Register/index'
import Login from './pages/Login/index'

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/register" component={Register} />
            </Switch>
        </BrowserRouter>
    )
}