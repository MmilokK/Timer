import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import TimersPage from './pages/TimersPage.jsx'
import TimerDisplayPage from './pages/TimerDisplayPage.jsx'
import TimerSetupPage from './pages/TimerSetupPage.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <TimersPage />
  },
  {
    path: "/timer-display",
    element: <TimerDisplayPage />
  },
  {
    path: "/timer-setup",
    element: <TimerSetupPage />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router} />
  </React.StrictMode>,
)
