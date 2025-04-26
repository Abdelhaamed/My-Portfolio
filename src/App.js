import "./App.css";
import Home from "./componts/Home/Home";
import Nav from "./componts/Nav/Nav";
import Contact from "./componts/Contact/Contact";
import Portfolio from "./componts/Portfolio/Portfolio";
import Skills from "./componts/Skills/Skills";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/About" element={<About />} /> */}
        <Route path="/Skills" element={<Skills />} />
        <Route path="/Portfolio" element={<Portfolio />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
