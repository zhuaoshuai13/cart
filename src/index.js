import React from 'react'
import { render } from 'react-dom'
import App from './App'
import {HashRouter as Router} from 'react-router-dom'
import './App.less'
import zhCN from 'antd/lib/locale/zh_CN'
import { ConfigProvider } from 'antd'
import { Provider } from 'react-redux'
import store from './store'
render(
  <Provider store={store}>
    <ConfigProvider locale={zhCN}>
      <Router>
        <App />
      </Router>
    </ConfigProvider>
  </Provider>,
  document.getElementById('root')
)
