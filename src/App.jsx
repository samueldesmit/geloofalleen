import './App.scss'
import { Routes, Route } from 'react-router-dom'
import Nav from "./components/Nav/Nav"
import OverMij from "./pages/OverMij/OverMij"
import Contact from "./pages/Contact/Contact"
import Home from "./pages/Home/Home"
function App() {

  return (
    <>
      <Nav />
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/over_mij" element={<OverMij />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  )
}

export default App
