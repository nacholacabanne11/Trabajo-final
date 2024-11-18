import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


createRoot(document.getElementById('root')).render(
  <StrictMode>
<h1>ecommerce</h1>
  <App />
</StrictMode>,
)
