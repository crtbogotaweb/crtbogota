import "./../styles/headerStyles.css";
import logo from "./../../assets/crt_bogota.png";
import { headerInfo, headerItems, navBar } from "../../locales/header";
import { Link } from "react-scroll";
import { useState } from "react";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="header_container">
      <div className="header_top">
        <section>
          <i className="fa-solid fa-envelope"></i>
          <p>{headerInfo.email}</p>
        </section>
        <section>
          <i className="fa-solid fa-phone"></i>
          <p>{headerInfo.phone}</p>
        </section>
      </div>

      <div className="header_bottom">
        <img src={logo} alt="crt_logo" />
        <section>
          {headerItems.map((item) => (
            <div key={item.icon}>
              <i className={item.icon}></i>
              <section>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </section>
            </div>
          ))}
        </section>
      </div>

      <div className="navbar">
        <div
          className={`content_navbar container ${showMenu && "active_menu"}`}
        >
          <i
            onClick={() => setShowMenu(false)}
            className="fa-solid fa-square-xmark icon_medium"
          ></i>
          {navBar.map((item) => (
            <Link
              key={item.id}
              onClick={() => setShowMenu(false)}
              className="link"
              to={item.id}
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              {item.text}
            </Link>
          ))}
        </div>
        <i
          onClick={() => setShowMenu(true)}
          className="fa-solid fa-bars icon_small"
        ></i>
      </div>
    </div>
  );
};

export default Header;
