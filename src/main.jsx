import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './pages/Home/Home'
import GlobalStyled from './Style/GlobalStyled'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyled/>
    <Home/>
  </StrictMode>,
)
