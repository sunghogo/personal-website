import Typography from "./Typography";

function Header({ children }) {
  return (
    <Typography
      className="header-image font-montserrat-header text-gray-900 mb-4 sm:py-1 md:py-2 lg:py-4 flex justify-center border border-2 border-gray-100 rounded-full w-1/2 mx-auto"
      strong
      em
      h1
      fontSize={"3xl"}
    >
      {children}
    </Typography>
  );
}

export default Header;
