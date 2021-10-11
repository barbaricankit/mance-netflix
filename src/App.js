import { Route, Routes } from 'react-router'
import './App.css'
import {
  Home,
  Header,
  MobileHeader,
  Movies,
  TVSeries,
  Popular,
} from './features'

function App() {
  return (
    <div className="App">
      <div className="browser-header">
        <Header />
      </div>
      <div className="mobile-header">
        <MobileHeader />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/series" element={<TVSeries />} />
        <Route path="/films" element={<Movies />} />
        <Route path="/latest" element={<Popular />} />
      </Routes>
    </div>
  )
}

export default App
