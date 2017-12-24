import React from 'react'
import { Route, Switch, Redirect } from 'react-router'

import ComingSoon from 'scenes/coming soon'

export const View = () => (
  <Switch>
    <Route path="/coming-soon" component={ComingSoon} />
    <Route path="/" render={() => <Redirect to="/coming-soon" />} />
  </Switch>
)
