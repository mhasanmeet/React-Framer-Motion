import "./App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import BasicMotion from "./pages/BasicMotion"
import Gestures from "./pages/Gestures"

function App() {

  return (
    <BrowserRouter>
      <header className="header">
        <Link to="/" className="link home">Home</Link>
        <nav className="nav">
          <Link to="/basic-motion" className="link">Basic Router</Link>
          <Link to="/gestures" className="link">Gestures</Link>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/basic-motion" element={<BasicMotion/>}/>
        <Route path="/gestures" element={<Gestures/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
