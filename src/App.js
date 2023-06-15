import Container from "./components/Container";
import AboutPage from "./pages/AboutPage";
import SkillsPage from "./pages/SkillsPage";
import ProjectsPage from "./pages/ProjetsPage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <div className="background-image flex flex-wrap grid px-8 md:px-16 py-4">
      <AboutPage />
      <SkillsPage />
      <ProjectsPage />
      <ContactPage />
    </div>
  );
}

export default App;
