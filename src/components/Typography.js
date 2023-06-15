import className from "classnames";

function Typography({
  children,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  strong,
  em,
  ...rest
}) {
  const classNames = className(
    "text-sm sm:text-base md:text-lg",
    rest.className
  );

  let text = children;

  if (strong) text = <strong>{text}</strong>;
  if (em) text = <em>{text}</em>;
  if (h1) text = <h1>{text}</h1>;
  else if (h2) text = <h2>{text}</h2>;
  else if (h3) text = <h3>{text}</h3>;
  else if (h4) text = <h4>{text}</h4>;
  else if (h5) text = <h5>{text}</h5>;
  else if (h6) text = <h6>{text}</h6>;
  else if (p) text = <p>{text}</p>;

  return (
    <div {...rest} className={classNames}>
      {text}
    </div>
  );
}

export default Typography;

Typography.propTypes = {
  checkVariationValue: ({ h1, h2, h3, h4, h5, h6, p }) => {
    const count =
      Number(!!h1) +
      Number(!!h2) +
      Number(!!h3) +
      Number(!!h4) +
      Number(!!h5) +
      Number(!!h6) +
      Number(!!p);

    if (count > 1)
      return new Error(
        "Only one Typography prop (h1, h2, h3, h4, h5, h6, p) can be true"
      );
  },
};
