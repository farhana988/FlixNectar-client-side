import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'


import {
  
  RouterProvider,
} from "react-router-dom";
import router from './routes/router.jsx';
import AuthProvider from './provider/AuthProvider.jsx';
import ThemeProvider from './provider/ThemeProvider.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <ThemeProvider>
      <RouterProvider router={router} />
      </ThemeProvider>
   
    </AuthProvider>
    
  </StrictMode>,
)
