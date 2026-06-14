import './App.css'
import Navbar from './components/Navbar.jsx'
import About from './components/About.jsx'
import Formations from './components/Formations.jsx'
import Experiences from './components/Experiences.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <div className="page">
      <Navbar />
      <main className="contenu">
        <About />
        <Formations />
        <Experiences />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
