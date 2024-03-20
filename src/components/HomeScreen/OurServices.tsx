import {
  itemsOurServices,
  itemsServices,
  ourServicesText,
} from "../../locales/ourServices";
import MeterBackground from "../shared/MeterBackground";
import Separator from "../shared/Separator";
import Slider from "../shared/Slider";
import "./../styles/ourServicesStyles.css";

const OurServices = () => {
  return (
    <div id="ourServices" className="ourServices_container">
      <MeterBackground />
      <div className="p_section container">
        <h2 className="title">{ourServicesText.title}</h2>
        <Separator />
        <p className="paragraph">{ourServicesText.subtitle}</p>
        <Slider servicesData={itemsServices} />
        <div className="ourServices_items_container">
          {itemsOurServices.map((item) => (
            <div key={item.icon}>
              <i className={`${item.icon} icon_large`}></i>
              <h4 className="subtitle">{item.title}</h4>
              <p className="paragraph">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurServices;
