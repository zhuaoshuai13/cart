import React from 'react'
import {Switch, Route} from 'react-router-dom'

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
  </Switch>
)

export default routerRender
