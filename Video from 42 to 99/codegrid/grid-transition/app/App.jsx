import {Routes, Route, useLocation} from "react-router-dom"

import Navbar from "./components/navbar"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"

export default function App() {
  const location = useLocation()

  return (
    <>
      <Navbar />
      <Routes location={location} key={location.pathname}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  )
}