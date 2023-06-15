import Typography from "./Typography";

function NavigationBar() {
  const sections = ["About", "Skills", "Projects", "Contact"];

  const renderedSections = sections.map((section) => (
    <Typography key={section} fontSize={"base"}>
      {section}
    </Typography>
  ));

  return (
    <nav className="fixed inset-x-1/4 bottom-4 flex items-center justify-between mx-auto px-4 py-2 bg-slate-300 border rounded-full">
      {renderedSections}
    </nav>
  );
}

export default NavigationBar;
