import { useState } from 'react'
import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login"

console.log("App is rendering");

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  )
}

export default App
