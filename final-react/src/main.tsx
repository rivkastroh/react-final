import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { store } from './app/store.ts'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { LoginAdmin } from './components/businesComponent/Login.tsx'
import { BusinesHome } from './components/businesComponent/BusinesHome.tsx'
import { MakingAppointment } from './components/customerComponents/MakingAppointment.tsx'
import { BusinesDetailsOpen } from './components/businesComponent/BusinesDetailsOpen.tsx'
import { Appointments } from './components/businesComponent/Appointments.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='/service/:id' element={<MakingAppointment />} />

          <Route path='/admin' element={<LoginAdmin />} />
          <Route path='/admin/home' element={<BusinesHome />} />
          <Route path='/admin/busiens' element={<BusinesDetailsOpen />} />
          <Route path='/admin/appointments' element={<Appointments />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>,
)
