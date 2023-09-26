import React, { Fragment } from "react"
import Header from "./components/Header"
import "./styles/App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import Contact from "./components/Contact"
import About from "./components/About"
import Product from "./components/Product"
const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/product/:id" element={<Product />}></Route>
        <Route path="/*" element={<div>Page Not Found 404!!</div>}></Route>
      </Routes>
    </Router>
  )
}

export default App
