import Link from "./Link";

function NavigationBar() {
  const links = [
    { label: `About`, path: `/` },
    { label: `Skills`, path: `/skills` },
    { label: `Projects`, path: `/projects` },
    { label: `Contact`, path: `/contact` },
  ];

  const renderedLinks = links.map((link) => (
    <Link key={link.label} to={link.path} activeClassName="font-bold">
      {link.label}
    </Link>
  ));

  return (
    <nav className="fixed inset-x-1/4 bottom-4 flex items-center justify-between mx-auto px-4 py-2 bg-slate-300 border rounded-full">
      {renderedLinks}
    </nav>
  );
}

export default NavigationBar;
