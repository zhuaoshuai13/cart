import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'

const routerRender = (routes) => (
  <Switch>
    {
      routes.map((route) => (
        <Route
          path={route.path}
          component={route.component}
          key={route.path} />
      ))
    }
    <Redirect to="/list"></Redirect>
  </Switch>
)

export default routerRender
