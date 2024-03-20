import {
  aboutUs,
  contactUsTitle,
  horaryTitle,
  itemsContactUs,
  itemsHorary,
  itemsSocial,
  socialTitle,
} from "../../locales/footer";
import "./../styles/footerStyles.css";

const Footer = () => {
  return (
    <div className="footer_container p_section">
      <div className="container">
        <section>
          <h4>{aboutUs.title}</h4>
          <p>{aboutUs.text}</p>
        </section>
        <section>
          <h4>{contactUsTitle}</h4>
          {itemsContactUs.map((item) => (
            <div key={item.icon}>
              <i className={item.icon}></i>
              <p>{item.text}</p>
            </div>
          ))}
        </section>
        <section>
          <h4>{socialTitle}</h4>
          <div>
            {itemsSocial.map((item) => (
              <a key={item.icon} href={item.link} target="blank">
                <i className={item.icon}></i>{" "}
              </a>
            ))}
          </div>
        </section>
        <section>
          <h4>{horaryTitle}</h4>
          {itemsHorary.map((item) => (
            <div key={item.day}>
              <p>{item.day}</p>
              <p>{item.hour}</p>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default Footer;
