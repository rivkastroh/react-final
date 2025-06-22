import './App.css'
import { BusinessDetails } from './components/customerComponents/BusinessDetails'
import { ShowServices } from './components/customerComponents/ShowServices'

function App() {
  return (
    <>
      <div className="logo"></div>
      <h1>ברוכים הבאים</h1>
      {/* <BusinessDetails /> */}
      <ShowServices />
    </>
  )
}

export default App
