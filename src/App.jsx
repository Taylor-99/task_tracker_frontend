import { useState } from 'react'
import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login"
import Signup from "./pages/Signup"

console.log("App is rendering");

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  )
}

export default App
