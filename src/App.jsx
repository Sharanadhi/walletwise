import Signup from "./components/Signup/Signup";
import Signin from "./components/Signin/Signin";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.scss'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
