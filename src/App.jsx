import Testimonials from "./sections/Testimonials.jsx";
import Hero from './sections/Hero.jsx'
import ShowcaseSection from "./sections/ShowcaseSection.jsx";
import FeatureCards from "./sections/FeatureCards.jsx";
import Navbar from "./components/NavBar.jsx";
import Experience from "./sections/Experience.jsx";
import Projects from "./sections/Projects.jsx";
import TechStack from "./sections/TechStack.jsx";
import BeyondCode from "./sections/BeyondCode.jsx";
import Contact from "./sections/Contact.jsx";
import Footer from "./sections/Footer.jsx";
const App = () => {
  return (
    <>
    <Navbar />
    <Hero />
    <ShowcaseSection />
    <FeatureCards />
    <Projects />
    <Experience />
    <TechStack />
    <Testimonials />
    <BeyondCode />
    <Contact />
    <Footer />
    </>
  )
}

export default App