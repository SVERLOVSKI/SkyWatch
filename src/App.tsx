import { BrowserRouter as Router, Route, Routes } from 'react-router'
import MainPage from './pages/mainPage'
import SingleForecastPage from './pages/singleForecastPage'
import './App.css'


function App() {
  return (
     <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/forecast/:date" element={<SingleForecastPage />} />
      </Routes>
     </Router>
  )
}

export default App
