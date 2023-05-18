import "./index.css";
import AboutMeSection from "./sections/AboutMeSection";
import ContactSection from "./sections/ContactSection";
import EducationSection from "./sections/EducationSection";
import HeroSection from "./sections/HeroSection";
import Nav from "./sections/Nav";
import Projects from "./sections/Projects";

function App() {
    return (
        <>
            <div className="flex flex-col">
                <Nav />
                <HeroSection />
                <AboutMeSection />
                <EducationSection />
                <ContactSection />
                <Projects />
            </div>
        </>
    );
}

export default App;
