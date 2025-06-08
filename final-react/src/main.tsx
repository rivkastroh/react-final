import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { store } from './app/store.ts'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { LoginAdmin } from './components/businesComponent/Login.tsx'
import { BusinesHome } from './components/businesComponent/BusinesHome.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='/admin' element={<LoginAdmin />} />
          <Route path='/admin/home' element={<BusinesHome />} />

        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>,
)
