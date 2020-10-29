import React from 'react'
import { Drawer, Form, Slider, Switch, Input } from 'antd'

export default props => {
  const {
    settingsDrawerOpen,
    setSettingsDrawerOpen,
    settings,
    setSettings
  } = props

  return (
    <Drawer
      title='Settings'
      placement='right'
      closable={false}
      onClose={() => setSettingsDrawerOpen(false)}
      visible={settingsDrawerOpen}
    >
      <Form layout='vertical'>
        <Form.Item label='Photo size'>
          <Slider
            min={1}
            max={40}
            value={settings.photoSize}
            onChange={value => setSettings({ ...settings, photoSize: value })}
          />
        </Form.Item>
        <Form.Item label='Page size'>
          <Slider
            min={1}
            max={100}
            value={settings.pageSize}
            onChange={value => setSettings({ ...settings, pageSize: value })}
          />
        </Form.Item>
        <Form.Item label='Photo query'>
          <Input
            value={settings.photoQuery}
            onChange={(e, d) =>
              setSettings({ ...settings, photoQuery: e.target.value })
            }
          />
        </Form.Item>
        <Form.Item label='Grid view'>
          <Switch
            checked={settings.isGrid}
            onChange={() =>
              setSettings({ ...settings, isGrid: !settings.isGrid })
            }
          />
        </Form.Item>
      </Form>
    </Drawer>
  )
}
