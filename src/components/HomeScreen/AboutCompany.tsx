import "./../styles/aboutCompanyStyles.css";
import {
  aboutCompanyText,
  itemsAboutCompany,
} from "../../locales/aboutCompany";
import Separator from "../shared/Separator";
import ToUpMeterBackground from "../shared/ToUpMeterBackground";
import aboutCompany_img from "./../../assets/about-company_image.png";

const AboutCompany = () => {
  return (
    <div id="aboutUs">
      <ToUpMeterBackground />
      <div className="p_section container">
        <h2 className="title">{aboutCompanyText.title}</h2>
        <Separator />
        <p className="paragraph">{aboutCompanyText.text}</p>
        <div className="aboutCompany_info">
          <img src={aboutCompany_img} alt="about_company_crt" />
          <div>
            {itemsAboutCompany.map((item) => (
              <div key={item.title}>
                <i className={`${item.icon} icon_medium`}></i>
                <h4>{item.title}</h4>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCompany;
