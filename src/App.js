import React from 'react'
import './App.less'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'

import SiteLayout from './layouts/SiteLayout'

const App = () => (
  <Router>
    <SiteLayout>
      <Switch>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </SiteLayout>
  </Router>
)

export default App
