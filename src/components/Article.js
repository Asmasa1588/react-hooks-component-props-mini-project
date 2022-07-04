import React from "react";
const duplicate = (x, n) => Array.from(new Array(n), () => x);
export const Article = ({
  title,
  date = "January 1, 1970",
  preview,
  minutes,
}) => {
  const shouldShowCoffeeIcon = minutes < 29;
  const iconsCount = shouldShowCoffeeIcon
    ? Math.ceil(minutes / 5)
    : Math.ceil(minutes / 10);

  return (
    <article>
      <h3>{title}</h3>
      <small>{date}</small>
      <p>{preview}</p>
      <div>
        {duplicate(shouldShowCoffeeIcon ? "☕️" : "🍱", iconsCount)} {minutes}{" "}
        min to read
      </div>
    </article>
  );
};
