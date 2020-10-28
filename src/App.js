import React, { useState } from 'react'
import './App.less'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'

import SiteLayout from './layouts/SiteLayout'

const App = () => {
  const [settingsOpen, setSettingsOpen] = useState(false)
  const [settings, setSettings] = useState({
    pageSize: 10,
    photoView: 'grid',
    photoSize: 20
  })

  return (
    <Router>
      <SiteLayout>
        <Switch>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/'>
            <Home settings={settings} />
          </Route>
        </Switch>
      </SiteLayout>
    </Router>
  )
}

export default App
