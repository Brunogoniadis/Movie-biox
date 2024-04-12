import { Outlet } from "react-router-dom"
import { Navbar } from "./components/Navbar/Navbar"
import Header from "./components/Header/Header"

function App() {

  return (
    <>
      <Header />
      <Navbar />
      <Outlet />
    </>
  )
}

export default App
