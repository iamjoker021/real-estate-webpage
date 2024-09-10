import { useEffect } from "react"
import About from "./components/About"
import Contact from "./components/Contact"
import Copyright from "./components/Copyright"
import Header from "./components/Header"
import Home from "./components/Home"
import Service from "./components/Service"
import Aos from "aos";
import "aos/dist/aos.css"

function App() {
  useEffect(() => {
    Aos.init({duration: 1200, easing: "linear"})
  }, [])

  return (
    <>
      <Header />
      <Home />
      <About />
      <Service />
      <Contact />
      <Copyright />
    </>
  )
}

export default App
