import classNames from "classnames";
import useNavigation from "../hooks/useNavigation";
import Typography from "./Typography";

function Link({ to, children, className, activeClassName }) {
  const { navigate, currentPath } = useNavigation();

  const classes = classNames(
    "text-blue-500",
    className,
    currentPath === to && activeClassName
  );

  const handleClick = (event) => {
    // Shortcircuit handler and resume normal behavior in new tab
    if (event.metaKey || event.ctrlKey) return;
    event.preventDefault();
    navigate(to);
  };

  return (
    <a className={classes} href={to} onClick={handleClick}>
      <Typography fontSize="sm">{children}</Typography>
    </a>
  );
}

export default Link;
