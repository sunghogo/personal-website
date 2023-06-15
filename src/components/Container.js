import Typography from "./Typography";
import Header from "./Header";

function Container({ header, text }) {
  return (
    <div className="container mx-auto my-4 px-8 py-4 border-double border-4 rounded-lg borderr-gray-200 shadow-lg bg-white">
      <Header>{header}</Header>

      <Typography className="font-open-sans text-gray-700">{text}</Typography>
    </div>
  );
}

export default Container;
