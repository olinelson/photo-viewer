import React, { useState, useRef, useEffect } from 'react'
import './App.less'
import {
  BrowserRouter as Router,
  Switch as RouterSwitch,
  Route
} from 'react-router-dom'
import { message } from 'antd'
import firebase from 'firebase'

import Home from './pages/Home'
import About from './pages/About'

import SiteLayout from './layouts/SiteLayout'
import Unsplash, { toJson } from 'unsplash-js'
import SettingsDrawer from './components/SettingsDrawer'

const App = () => {
  const [firebaseApp] = firebase.apps
  const { unsplashAccessKey } = firebaseApp.options
  const unsplash = new Unsplash({ accessKey: unsplashAccessKey })

  const [settingsDrawerOpen, setSettingsDrawerOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const [selectedPhoto, setSelectedPhoto] = useState({})
  const [settings, setSettings] = useState({
    pageSize: 10,
    isGrid: true,
    photoSize: 20,
    photoQuery: 'minimal'
  })
  const [page, setPage] = useState(1)
  const [photos, setPhotos] = useState([])

  const seenIds = useRef([])
  const totalPages = useRef(1)

  const reload = () => {
    setPage(1)
    seenIds.current = []
    setPhotos([])
    getPhotos(true)
  }

  const getPhotos = async refresh => {
    try {
      setLoading(true)
      const res = await unsplash.search.photos(
        settings.photoQuery,
        page,
        settings.pageSize
      )
      const json = await toJson(res)

      if (!json.results.length) {
        message.info('No photos found.')
        return setLoading(false)
      }

      totalPages.current = json.total_pages
      const newPhotos = json.results.filter(
        p => !seenIds.current.includes(p.id)
      )
      seenIds.current = [...seenIds.current, ...newPhotos.map(r => r.id)]

      if (refresh) {
        setPhotos(newPhotos)
      } else {
        setPhotos([...photos, ...newPhotos])
      }
      setLoading(false)
    } catch (error) {
      message.error('Something went wrong...')
      setLoading(false)
    }
  }

  useEffect(() => {
    getPhotos()
  }, [page])

  return (
    <>
      <Router>
        <SiteLayout
          setSettings={setSettings}
          settings={settings}
          setSettingsDrawerOpen={setSettingsDrawerOpen}
          reload={reload}
        >
          <RouterSwitch>
            <Route path='/about'>
              <About />
            </Route>
            <Route path='/'>
              <Home
                loading={loading}
                setLoading={setLoading}
                settings={settings}
                photos={photos}
                page={page}
                setPage={setPage}
                totalPages={totalPages}
                selectedPhoto={selectedPhoto}
                setSelectedPhoto={setSelectedPhoto}
              />
            </Route>
          </RouterSwitch>
        </SiteLayout>
      </Router>
      <SettingsDrawer
        settings={settings}
        setSettings={setSettings}
        settingsDrawerOpen={settingsDrawerOpen}
        setSettingsDrawerOpen={setSettingsDrawerOpen}
      />
    </>
  )
}

export default App
