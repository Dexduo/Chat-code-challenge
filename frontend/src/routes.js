import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Register from './pages/Register/index'
import Login from './pages/Login/index'
import Home from './pages/Home/index'

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/home" component={Home} />
                <Route path="*" component={() => <h1>Page not found</h1>} />
            </Switch>
        </BrowserRouter>
    )
}