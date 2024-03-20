import { useState } from "react";
import "./../styles/topArrowStyles.css";

const TopArrow = () => {
  const [showArrow, setShowArrow] = useState(false);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
      setShowArrow(true);
    } else {
      setShowArrow(false);
    }
  });

  return (
    <a className={`topArrow ${showArrow && "showArrow"}`} href="#">
      <i className="fa-solid fa-chevron-up"></i>
    </a>
  );
};

export default TopArrow;
