import AboutPage from "./pages/AboutPage";
import SkillsPage from "./pages/SkillsPage";
import ProjectsPage from "./pages/ProjetsPage";
import ContactPage from "./pages/ContactPage";
import NavigationBar from "./components/NavigationBar";

function App() {
  return (
    <div className="relative background-image flex flex-wrap grid px-8 md:px-16 py-4">
      <AboutPage />
      <SkillsPage />
      <ProjectsPage />
      <ContactPage />
      <NavigationBar />
    </div>
  );
}

export default App;
