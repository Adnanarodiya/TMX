import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import App from './App.jsx'
import Layout from './Layout.jsx'
import './index.css'
import SignIn from './components/pages/SignIn.jsx'
import Agents from './components/pages/Agents.jsx'
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path='' element={<App />} />
      <Route path='signin' element={<SignIn />} />
      <Route path='agents' element={<Agents />} />
    </Route>
  )
);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
