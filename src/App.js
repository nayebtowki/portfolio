import Navbar from "./com/NavBar/navbar";
import Intro from './com/Intro/intro';
import Skills from "./com/Skills/skills";
import Works from "./com/Works/works";
import Contact from "./com/Contact/contact";
import Footer from "./com/Footer/footer";
import AboutMe from "./com/AboutMe/aboutme";

function App() {
    return (
        <div className="App">
            <Navbar />
            <Intro />
            <AboutMe/>
            <Skills />
            <Works nayebtowki="nayebtowki" />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;
