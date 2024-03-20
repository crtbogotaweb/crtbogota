import { Link } from "react-scroll";
import { mainText } from "../../locales/main";
import "./../styles/mainStyles.css";

const Main = () => {
  return (
    <div className="main_container">
      <div className="main_content_container">
        <div className="main_content">
          <section>
            <h2 className="title">{mainText.title_1}</h2>
            <h2 className="title">{mainText.title_2}</h2>
          </section>
          <p>{mainText.subtitle}</p>
          <Link
            className="button"
            to="aboutUs"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            <p>{mainText.more_info}</p>
            <i className="fa-solid fa-angles-right"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Main;
